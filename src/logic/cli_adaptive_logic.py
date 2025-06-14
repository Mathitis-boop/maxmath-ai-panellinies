from supabase import create_client
import matplotlib.pyplot as plt
import re
import sys
import random
import uuid
from datetime import datetime, timezone

# ————————————————
# Configuration: replace with your Supabase credentials
SUPABASE_URL = "https://kmitoklacnjggvymdxqr.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaXRva2xhY25qZ2d2eW1keHFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk1MzE5OSwiZXhwIjoyMDY0NTI5MTk5fQ.kpbQxioHg4-wFsjZl4emI7_brvdPL4PAniwrEkakiS8"
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
# ————————————————

# Mapping of (difficulty level, complexity) to base ELO rating
RATING_MAP = {
    ("low", 1): 800, ("low", 2): 850, ("low", 3): 900, ("low", 4): 950,
    ("medium", 1): 1000, ("medium", 2): 1050, ("medium", 3): 1100, ("medium", 4): 1150,
    ("high", 1): 1200, ("high", 2): 1250, ("high", 3): 1300, ("high", 4): 1350,
}


def update_rating(student_rating: int, question_rating: int, outcome: int,
                  K: int, time_taken: int, level: str, tag: str) -> int:
    """
    Calculate the updated ELO rating for a student based on:
    - student_rating: current ELO of the student for the chapter
    - question_rating: base ELO assigned to the question
    - outcome: 1 if the student answered correctly, 0 otherwise
    - K: ELO adjustment factor (constant)
    - time_taken: time spent by the student in seconds
    - level: difficulty category ('low', 'medium', 'high')
    - tag: question type tag ('basic', 'trap', 'critical')

    This function adjusts the ELO change by:
    1. Expected outcome difference (standard ELO formula)
    2. Time factor: penalize slow responses beyond an ideal threshold
    3. Tag factor: weight based on question classification
    """
    # standard ELO expected score formula
    expected = 1 / (1 + 10 ** ((question_rating - student_rating) / 400))

    # ideal time thresholds for different difficulty levels
    ideal_time = {'low': 300, 'medium': 420, 'high': 900}
    if time_taken <= ideal_time[level]:
        time_factor = 1.0  # full credit if within ideal time
    else:
        # reduce credit by 10% per minute overtime, floor at 50%
        overtime = (time_taken - ideal_time[level]) / 60
        time_factor = max(0.5, 1 - 0.1 * overtime)

    # adjust impact based on question tag
    # - basic: small reward, heavy penalty
    # - trap: high reward, moderate penalty
    # - critical: significant reward, small penalty
    tag_factor = 1.0
    if tag == "basic":
        tag_factor = 0.8 if outcome == 1 else 1.5
    elif tag == "trap":
        tag_factor = 1.5 if outcome == 1 else 1.0
    elif tag == "critical":
        tag_factor = 1.3 if outcome == 1 else 0.7

    # final ELO change calculation
    elo_change = K * (outcome - expected) * time_factor * tag_factor
    return round(student_rating + elo_change)


def fetch_exercise_by_id(ex_id: int) -> dict | None:
    """
    Retrieve exercise details from Supabase by exercise ID.
    Returns a single record or None.
    """
    resp = supabase.table("exercises").select("*").eq("id", ex_id).maybe_single().execute()
    return resp.data


def render_question_plot(q_raw: str):
    """
    Display the question text in a Matplotlib figure.
    Splits Greek text from LaTeX math (if any) for cleaner rendering.
    """
    match = re.search(r"\\", q_raw)
    if match:
        greek_part = q_raw[:match.start()].strip()
        math_part = q_raw[match.start():]
        text_to_plot = f"{greek_part}\n${math_part}$"
    else:
        text_to_plot = q_raw
    plt.figure(figsize=(8, 3))
    plt.text(0.5, 0.5, text_to_plot, fontsize=24, ha="center", va="center")
    plt.axis("off")
    plt.show()


def check_answer(exercise_id: int, user_input: str) -> bool:
    """
    Compare user input (trimmed & lowercase) to stored answer.
    Returns True if they match, False otherwise.
    """
    resp = supabase.table("exercises").select("answer").eq("id", exercise_id).single().execute()
    correct_answer = resp.data.get("answer", "").strip().lower()
    return user_input.strip().lower() == correct_answer


def recommend_next(current_ex: dict, user_id: str) -> int | None:
    """
    Suggest the next exercise ID based on the student's current chapter ELO.
    Filters exercises within ±100 ELO range of student's rating.
    Chooses randomly among candidates.
    """
    chapter_id = current_ex["chapter_id"]
    # fetch student's chapter ELO or default to 1000
    resp_r = supabase.table("user_chapter_ratings") \
        .select("current_rating") \
        .eq("user_id", user_id) \
        .eq("chapter_id", chapter_id) \
        .maybe_single() \
        .execute()
    student_rating = resp_r.data.get("current_rating", 1000) if resp_r and resp_r.data else 1000

    # define search window for next question
    low, high = student_rating - 100, student_rating + 100
    resp = supabase.table("exercises").select("level,difficulty,id").eq("chapter_id", chapter_id).execute()
    candidates = [q["id"] for q in resp.data
                  if low <= RATING_MAP[(q["level"], q["difficulty"])] <= high]
    return random.choice(candidates) if candidates else None


if __name__ == "__main__":
    # CLI entry point: create a new student profile and loop until exit
    print("=== CLI: Adaptive ELO Exercises by Chapter ===\n")
    random_username = f"student_{uuid.uuid4().hex[:8]}"
    resp_user = supabase.table("profiles").insert({"username": random_username}, returning="representation").execute()
    user = resp_user.data[0] if isinstance(resp_user.data, list) else resp_user.data
    user_id = user["id"]
    print(f"Created new student profile: username='{random_username}', ID={user_id}\n")

    next_ex_id = None
    try:
        while True:
            # prompt or use recommended exercise
            if next_ex_id is None:
                inp = input("Enter exercise ID (or 'exit'): ").strip()
                if inp.lower() == "exit":
                    break
                try:
                    ex_id = int(inp)
                except ValueError:
                    print("Invalid input, please enter a number.")
                    continue
            else:
                ex_id = next_ex_id
                print(f"\n▶️ Next exercise ID: {ex_id}\n")

            # fetch exercise and render question
            ex = fetch_exercise_by_id(ex_id)
            if not ex:
                print(f"Exercise ID {ex_id} not found.")
                next_ex_id = None
                continue

            print(f"Exercise #{ex['id']} | Chapter {ex['chapter_id']} | {ex['level']}-{ex['difficulty']} | Tag={ex.get('tag','basic')}\n")
            render_question_plot(ex.get("question",""))

            # record start time and get answer
            start_time = datetime.now(timezone.utc)
            ans = input("Your answer (or 'exit'): ").strip()
            if ans.lower() == "exit":
                break
            time_taken = (datetime.now(timezone.utc) - start_time).seconds

            # check correctness and display result
            is_correct = check_answer(ex_id, ans)
            print("✅ Correct!" if is_correct else "❌ Incorrect.")

            # retrieve old ELO rating safely
            resp_r = supabase.table("user_chapter_ratings") \
                .select("current_rating") \
                .eq("user_id", user_id) \
                .eq("chapter_id", ex['chapter_id']) \
                .maybe_single() \
                .execute()
            old_rating = resp_r.data.get('current_rating', 1000) if resp_r and resp_r.data else 1000

            # print debug info
            print(f"⭐ Previous ELO: {old_rating}")
            print(f"⏱️ Time taken: {time_taken} seconds")

            # calculate and show new ELO
            new_rating = update_rating(
                old_rating,
                RATING_MAP[(ex['level'], ex['difficulty'])],
                int(is_correct),
                60,
                time_taken,
                ex['level'],
                ex.get('tag','basic')
            )
            print(f"✨ New ELO: {new_rating}\n")

            # save updated rating
            supabase.table("user_chapter_ratings").upsert({
                "user_id": user_id,
                "chapter_id": ex['chapter_id'],
                "current_rating": new_rating,
                "last_updated": datetime.now(timezone.utc).isoformat()
            }, on_conflict="user_id,chapter_id").execute()

            # recommend next exercise
            next_ex_id = recommend_next(ex, user_id)
    except KeyboardInterrupt:
        print("\nGoodbye!")
        sys.exit(0)
