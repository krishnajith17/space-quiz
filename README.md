# 🪐 AstroMobbin — Space Intelligence Quiz Platform

An interactive, single-dashboard Space Quiz web application inspired by **Mobbin's** modern UI design language. Features a configurable timer, randomized celestial questions, user registration, and automatic Excel/CSV session logging with trial tracking for returning participants.

🌐 **Live Demo (GitHub Pages):** [https://krishnajith17.github.io/space-quiz/](https://krishnajith17.github.io/space-quiz/)  
📂 **GitHub Repository:** [https://github.com/krishnajith17/space-quiz](https://github.com/krishnajith17/space-quiz)

---

## 🚀 Key Features

1. **Clean Single-Dashboard Flow**:
   - **Start Screen**: Clean welcome hero with mission overview and stats.
   - **⏱ Configurable Timer**: Choose 15s, 30s, 45s, 60s per question presets or input any custom seconds (5–300s).
   - **🧑‍🚀 Participant Details**: Captures Name, Department, and Last 5 Digits of ID/Roll number with validation.
   - **🎯 Interactive Question Dashboard**: Displays 10 questions per session selected from a balanced question bank (Easy, Medium, Hard).
   - **📊 Results & Debrief**: Cosmic Rank calculation, accuracy percentage, time taken, and live result export.

2. **Question Design**:
   - **Long, descriptive prompts**: 1–2 sentences exploring deep space, telescopes, black holes, rovers, and cosmology.
   - **One-word MCQ answers**: Fast, clean choices (e.g. *Ice*, *Fusion*, *Gravity*, *Supernova*, *Hawking*, *Relativity*).
   - **Session Randomization**: 10 questions drawn randomly each session, with freshly shuffled option order.

3. **📊 Automatic Excel & Session Logging**:
   - **Columns Recorded**: `Trial | Timestamp | Name | Department | ID (Last 5 Digits) | Score | Total Questions | Percentage (%) | Timer (sec/q) | Time Taken (sec)`
   - **Repeat Participant Tracking**: If the same user (Name + Last 5 ID digits) takes the quiz again, the system automatically increments their **Trial** number (Trial #1, Trial #2, etc.).
   - **Local Mode**: Appends directly to a styled Excel file at `results/quiz_results.xlsx` via the Python Flask server.
   - **Web / GitHub Pages Mode**: Records sessions to browser storage with a 1-click **📥 Download Results Spreadsheet (.csv)** button.

4. **Visual & Auditory Polish**:
   - Animated SVG countdown ring timer with warning and critical color shifts.
   - Canvas particle starfield with subtle twinkling stars.
   - Instant visual feedback on correct/wrong answers with astronomical explanations.

---

## 🛠️ How to Run Locally

### Option 1: Python Flask Server (with Excel Logging)
```bash
# Install dependencies
pip install -r requirements.txt

# Run the server
python server.py
```
This automatically opens the browser at `http://localhost:5000`. All submissions are saved to `results/quiz_results.xlsx`.

### Option 2: Windows 1-Click Launch
Double-click `start.bat` in the project root.

### Option 3: Direct Browser Launch
Open `index.html` directly in any modern browser.

---

## 📜 License
MIT
