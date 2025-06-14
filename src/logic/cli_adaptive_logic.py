from supabase import create_client
import matplotlib.pyplot as plt
import re
import sys
import random
import uuid
from datetime import datetime

# ————————————————
SUPABASE_URL = "https://kmitoklacnjggvymdxqr.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaXRva2xhY25qZ2d2eW1keHFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk1MzE5OSwiZXhwIjoyMDY0NTI5MTk5fQ.kpbQxioHg4-wFsjZl4emI7_brvdPL4PAniwrEkakiS8"
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
# ————————————————

RATING_MAP = {
    ("low", 1): 800, ("low", 2): 850, ("low", 3): 900, ("low", 4): 950,
    ("medium", 1): 1000, ("medium", 2): 1050, ("medium", 3): 1100, ("medium", 4): 1150,
    ("high", 1): 1200, ("high", 2): 1250, ("high", 3): 1300, ("high", 4): 1350,
}

def update_rating(student_rating: int, question_rating: int, outcome: int,
                  K: int, time_taken: int, level: str, tag: str) -> int:
    expected = 1 / (1 + 10 ** ((question_rating - student_rating) / 400))
    ideal_time = {'low': 300, 'medium': 420, 'high': 900}
    if time_taken <= ideal_time[level]:
        time_factor = 1
    else:
        overtime = (time_taken - ideal_time[level]) / 60
        time_factor = max(0.5, 1 - 0.1 * overtime)
    tag_factor = 1
    if tag == "basic":
        tag_factor = 0.8 if outcome == 1 else 1.5
    elif tag == "trap":
        tag_factor = 1.5 if outcome == 1 else 1.0
    elif tag == "critical":
        tag_factor = 1.3 if outcome == 1 else 0.7
    elo_change = K * (outcome - expected) * time_factor * tag_factor
    return round(student_rating + elo_change)

# Fetch and render functions unchanged
# Fetch exercise details by ID
# Render question text
# Check provided answer
# Recommend next exercise based on ELO

def fetch_exercise_by_id(ex_id: int) -> dict | None:
    resp = supabase.table("exercises").select("*").eq("id", ex_id).maybe_single().execute()
    return resp.data

def render_question_plot(q_raw: str):
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
    resp = supabase.table("exercises").select("answer").eq("id", exercise_id).single().execute()
    return user_input.strip().lower() == resp.data.get("answer", "").strip().lower()

def recommend_next(current_ex: dict, user_id: str) -> int | None:
    chapter_id = current_ex["chapter_id"]
    resp_r = supabase.table("user_chapter_ratings").select("current_rating").eq("user_id", user_id).eq("chapter_id", chapter_id).single().execute()
    student_rating = resp_r.data.get("current_rating", 1000)
    low, high = student_rating - 100, student_rating + 100
    resp = supabase.table("exercises").select("*").eq("chapter_id", chapter_id).execute()
    candidates = [q["id"] for q in resp.data if low <= RATING_MAP[(q["level"], q["difficulty"])] <= high]
    return random.choice(candidates) if candidates else None

if __name__ == "__main__":
    random_username = f"student_{uuid.uuid4().hex[:8]}"
    user = supabase.table("profiles").insert({"username": random_username}, returning="representation").execute().data[0]
    user_id = user["id"]

    next_ex_id = None
    try:
        while True:
            if next_ex_id is None:
                inp = input("Δώσε το ID της άσκησης (ή 'exit'): ").strip()
                if inp.lower() == "exit": break
                ex_id = int(inp)
            else:
                ex_id = next_ex_id

            ex = fetch_exercise_by_id(ex_id)
            if not ex:
                next_ex_id = None
                continue

            render_question_plot(ex["question"])
            start_time = datetime.now()
            ans = input("\nΔώσε την απάντησή σου (ή 'exit'): ").strip()
            if ans.lower() == "exit": break
            time_taken = (datetime.now() - start_time).seconds

            is_correct = check_answer(ex_id, ans)
            print("✅ Σωστό!" if is_correct else "❌ Λάθος.")

            resp_r = supabase.table("user_chapter_ratings").select("current_rating").eq("user_id", user_id).eq("chapter_id", ex["chapter_id"]).maybe_single().execute()
            if not resp_r or resp_r.data is None:
                old_rating = 1000
            else:
                old_rating = resp_r.data.get("current_rating", 1000)

            new_rating = update_rating(old_rating, RATING_MAP[(ex['level'], ex['difficulty'])], int(is_correct), 60, time_taken, ex['level'], ex['tag'])
            supabase.table("user_chapter_ratings").upsert({"user_id": user_id, "chapter_id": ex['chapter_id'], "current_rating": new_rating, "last_updated": datetime.utcnow().isoformat()}, on_conflict="user_id,chapter_id").execute()

            next_ex_id = recommend_next(ex, user_id)
    except KeyboardInterrupt:
        sys.exit(0)
