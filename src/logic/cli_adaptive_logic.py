from supabase import create_client
import matplotlib.pyplot as plt
import re
import sys
import random
import uuid
import os
from datetime import datetime

# ————————————————
# 1) Ρύθμισέ τα δικά σου:
SUPABASE_URL = "https://kmitoklacnjggvymdxqr.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttaXRva2xhY25qZ2d2eW1keHFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODk1MzE5OSwiZXhwIjoyMDY0NTI5MTk5fQ.kpbQxioHg4-wFsjZl4emI7_brvdPL4PAniwrEkakiS8"
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
# ————————————————

# Fixed rating map (level, difficulty) → ELO rating
RATING_MAP = {
    ("low", 1): 800,    ("low", 2): 850,
    ("low", 3): 900,    ("low", 4): 950,
    ("medium", 1): 1000,("medium", 2):1050,
    ("medium", 3):1100,("medium", 4):1150,
    ("high", 1):1200,   ("high", 2):1250,
    ("high", 3):1300,   ("high", 4):1350,
}

# ELO update function
def update_rating(student_rating: int, question_rating: int, outcome: int, K: int) -> int:
    expected = 1 / (1 + 10 ** ((question_rating - student_rating) / 400))
    return round(student_rating + K * (outcome - expected))

# Fetch exercise details by ID (includes chapter_id)
def fetch_exercise_by_id(ex_id: int) -> dict | None:
    resp = (
        supabase.table("exercises")
        .select("id, question, answer, difficulty, level, unit, category, chapter_id")
        .eq("id", ex_id)
        .maybe_single()
        .execute()
    )
    return resp.data

# Render the question text with matplotlib
def render_question_plot(q_raw: str):
    if not q_raw:
        print("Η ερώτηση είναι κενή.")
        return
    match = re.search(r"\\", q_raw)
    if match:
        i = match.start()
        greek_part = q_raw[:i].strip()
        math_part = q_raw[i:]
        text_to_plot = f"{greek_part}\n${math_part}$"
    else:
        text_to_plot = q_raw
    plt.figure(figsize=(8, 3))
    plt.text(0.5, 0.5, text_to_plot, fontsize=24, ha="center", va="center")
    plt.axis("off")
    plt.show()

# Check if the provided answer is correct
def check_answer(exercise_id: int, user_input: str) -> bool:
    resp = (
        supabase.table("exercises")
        .select("answer")
        .eq("id", exercise_id)
        .single()
        .execute()
    )
    correct = resp.data.get("answer", "").strip().lower()
    return user_input.strip().lower() == correct

# Recommend next exercise based on student's ELO rating and same chapter
def recommend_next(current_ex: dict, user_id: str) -> int | None:
    chapter_id = current_ex["chapter_id"]
    # fetch student's chapter ELO
    resp_r = (
        supabase.table("user_chapter_ratings")
        .select("current_rating")
        .eq("user_id", user_id)
        .eq("chapter_id", chapter_id)
        .single()
        .execute()
    )
    student_rating = resp_r.data.get("current_rating", 1000) if resp_r.data else 1000
    low, high = student_rating - 100, student_rating + 100
    # fetch exercises in same chapter
    resp = (
        supabase.table("exercises")
        .select("id, difficulty, level, chapter_id")
        .eq("chapter_id", chapter_id)
        .execute()
    )
    candidates = [q["id"] for q in resp.data
                  if low <= RATING_MAP[(q["level"], q["difficulty"]) ]<= high]
    if not candidates:
        low, high = student_rating - 200, student_rating + 200
        candidates = [q["id"] for q in resp.data
                      if low <= RATING_MAP[(q["level"], q["difficulty"]) ]<= high]
    return random.choice(candidates) if candidates else None

# Main CLI loop
if __name__ == "__main__":
    print("=== CLI Ασκήσεων με Adaptive ELO Difficulty ανά Κεφάλαιο ===\n")

    # Δημιουργία νέου μαθητή με username
    random_username = f"student_{uuid.uuid4().hex[:8]}"
    resp = (
        supabase.table("profiles")
        .insert({"username": random_username}, returning="representation")
        .execute()
    )
    user = resp.data[0] if isinstance(resp.data, list) else resp.data
    user_id = user["id"]
    # Initial profile rating no longer used
    print(f"Δημιουργήθηκε νέος μαθητής με ID = {user_id}, username = '{random_username}'\n")

    next_ex_id = None
    try:
        while True:
            # Επιλογή άσκησης
            if next_ex_id is None:
                inp = input("Δώσε το ID της άσκησης (ή 'exit'): ").strip()
                if inp.lower() == "exit": break
                try:
                    ex_id = int(inp)
                except ValueError:
                    print("Μη έγκυρη τιμή.")
                    continue
            else:
                ex_id = next_ex_id
                print(f"\n▶️  Επόμενη άσκηση ID = {ex_id}\n")

            ex = fetch_exercise_by_id(ex_id)
            if not ex:
                print(f"Δεν βρέθηκε άσκηση με ID = {ex_id}.")
                next_ex_id = None
                continue

            print(f"Άσκηση #{ex['id']} | Κεφάλαιο {ex['chapter_id']} | {ex['level']}-{ex['difficulty']}\n")
            render_question_plot(ex.get("question",""))

            ans = input("\nΔώσε την απάντησή σου (ή 'exit'): ").strip()
            if ans.lower() == "exit": break
            is_correct = check_answer(ex_id, ans)
            print("✅ Σωστό!" if is_correct else "❌ Λάθος.")

            # --- ELO per chapter ---
            chapter_id = ex['chapter_id']
            
            # fetch old rating (αν υπάρχει), αλλιώς None
            resp_r = (
                supabase.table("user_chapter_ratings")
                        .select("current_rating")
                        .eq("user_id", user_id)
                        .eq("chapter_id", chapter_id)
                        .maybe_single()
                        .execute()
            )
            
            # αν δεν βρέθηκε εγγραφή, default 1000
            if resp_r is None:
                old_rating = 1000
            else:
                old_rating = resp_r.data['current_rating']
            
            # Υπολογισμός νέου rating
            question_rating = RATING_MAP[(ex['level'], ex['difficulty'])]
            K = 60
            new_rating = update_rating(old_rating, question_rating, int(is_correct), K)
            
            # upsert νέου rating
            supabase.table("user_chapter_ratings") \
                .upsert(
                    {
                      "user_id": user_id,
                      "chapter_id": chapter_id,
                      "current_rating": new_rating,
                      "last_updated": datetime.utcnow().isoformat()
                    },
                    on_conflict="user_id,chapter_id"
                ).execute()

            print(f"🔄 ELO στο κεφάλαιο {chapter_id}: {old_rating} → {new_rating}")

            # propose next
            next_ex_id = recommend_next(ex, user_id)
            if not next_ex_id:
                print("⚠️ Δεν βρέθηκε επόμενη άσκηση στο κεφάλαιο.")
                next_ex_id = None
            print("\n---\n")
    except KeyboardInterrupt:
        print("\nΤέλος.")
        sys.exit(0)
