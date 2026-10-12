/**
 * AstroMobbin Quiz — Controller
 * Handles 5 screens: Welcome → Timer Setup → User Info → Quiz → Results
 * Each quiz selects 10 random questions from a 30-question bank.
 * Results are saved to an Excel sheet via Flask backend.
 */

const $ = id => document.getElementById(id);

/* ─────────── State ─────────────────────────────────────────── */
const STATE = {
  // User inputs
  name: "",
  department: "",
  id5: "",
  timerSeconds: 30,   // seconds per question (default)

  // Quiz runtime
  questions: [],      // 10 shuffled questions for this session
  currentIdx: 0,
  score: 0,
  answered: false,    // has user answered this question?
  timerRemaining: 0,
  timerInterval: null,
  timerMax: 30,       // same as timerSeconds (captured at quiz start)
  startTime: null,    // unix ms when quiz started
};

/* ─────────── Screen switching ──────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN 1 — WELCOME
   ═══════════════════════════════════════════════════════════════ */
function initWelcomeScreen() {
  $("btnStart").addEventListener("click", () => {
    showScreen("screenTimer");
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN 2 — TIMER SETUP
   ═══════════════════════════════════════════════════════════════ */
const PRESETS = [15, 30, 45, 60]; // seconds per question

function initTimerScreen() {
  const presetBtns = document.querySelectorAll(".preset-btn");
  const customInput = $("customTimerInput");

  // Select default (30s)
  presetBtns.forEach(btn => {
    const val = parseInt(btn.dataset.secs, 10);
    btn.classList.toggle("selected", val === STATE.timerSeconds);

    btn.addEventListener("click", () => {
      STATE.timerSeconds = val;
      presetBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      customInput.value = "";
    });
  });

  customInput.addEventListener("input", () => {
    const v = parseInt(customInput.value, 10);
    if (!isNaN(v) && v >= 5 && v <= 300) {
      STATE.timerSeconds = v;
      presetBtns.forEach(b => b.classList.remove("selected"));
    }
  });

  $("btnTimerNext").addEventListener("click", () => {
    if (STATE.timerSeconds < 5) {
      alert("Minimum timer is 5 seconds per question.");
      return;
    }
    showScreen("screenInfo");
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN 3 — USER INFO
   ═══════════════════════════════════════════════════════════════ */
function initInfoScreen() {
  $("btnInfoBack").addEventListener("click", () => showScreen("screenTimer"));

  $("btnBeginQuiz").addEventListener("click", async () => {
    const name  = $("inputName").value.trim();
    const dept  = $("inputDept").value.trim();
    const id5   = $("inputId5").value.trim();
    const errEl = $("infoError");

    // Validation
    if (!name) {
      errEl.textContent = "Please enter your name."; return;
    }
    if (!dept) {
      errEl.textContent = "Please enter your department."; return;
    }
    if (!/^\d{5}$/.test(id5)) {
      errEl.textContent = "Please enter exactly 5 digits for your ID."; return;
    }

    errEl.textContent = "";
    STATE.name = name;
    STATE.department = dept;
    STATE.id5 = id5;

    startQuiz();
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN 4 — QUIZ
   ═══════════════════════════════════════════════════════════════ */
function startQuiz() {
  STATE.questions   = getRandomizedQuiz();
  STATE.currentIdx  = 0;
  STATE.score       = 0;
  STATE.timerMax    = STATE.timerSeconds;
  STATE.startTime   = Date.now();

  showScreen("screenQuiz");
  renderQuestion();
}

function renderQuestion() {
  const q = STATE.questions[STATE.currentIdx];
  STATE.answered = false;

  // Header
  const total = STATE.questions.length;
  const cur   = STATE.currentIdx + 1;
  $("qLabel").textContent    = `Question ${cur} of ${total}`;
  $("scoreBadge").textContent = `Score: ${STATE.score}`;
  $("progressFill").style.width = `${((cur - 1) / total) * 100}%`;

  // Difficulty chip
  const diffMap = { easy: "diff-easy", medium: "diff-medium", hard: "diff-hard" };
  const chipEl  = $("difficultyChip");
  chipEl.className = `difficulty-chip ${diffMap[q.difficulty]}`;
  chipEl.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);

  // Question text
  $("questionText").textContent = q.question;

  // Options
  const grid = $("optionsGrid");
  grid.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" data-idx="${i}" id="opt${i}">
      <span class="option-key">${["A","B","C","D"][i]}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join("");

  grid.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.idx, 10)));
  });

  // Hide explanation
  $("explanationBox").style.display = "none";
  $("btnNext").style.display = "none";

  // Start timer
  startTimer();
}

/* ── Timer ─────────────────────────────────────────────────── */
const RING_RADIUS = 40;
const RING_CIRCUM = 2 * Math.PI * RING_RADIUS; // ≈ 251.3

function startTimer() {
  clearInterval(STATE.timerInterval);
  STATE.timerRemaining = STATE.timerMax;
  updateTimerUI();

  STATE.timerInterval = setInterval(() => {
    STATE.timerRemaining--;
    updateTimerUI();

    if (STATE.timerRemaining <= 0) {
      clearInterval(STATE.timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function updateTimerUI() {
  const t   = STATE.timerRemaining;
  const max = STATE.timerMax;
  const pct = t / max;

  // Ring fill
  const ring = $("timerRing");
  const offset = RING_CIRCUM * (1 - pct);
  ring.style.strokeDashoffset = offset;

  // Colour states
  ring.classList.remove("warning", "critical");
  if (pct <= 0.25)      ring.classList.add("critical");
  else if (pct <= 0.50) ring.classList.add("warning");

  // Text
  $("timerText").textContent = t;
}

function handleTimeOut() {
  if (STATE.answered) return;
  STATE.answered = true;

  // Disable all options
  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
    b.classList.add("timeout");
  });

  // Highlight correct
  const q = STATE.questions[STATE.currentIdx];
  const correctBtn = document.querySelector(`[data-idx="${q.correct}"]`);
  if (correctBtn) {
    correctBtn.classList.remove("timeout");
    correctBtn.classList.add("correct");
  }

  showExplanation("timeout", "Time expired! Here's the answer.", q.options[q.correct]);
}

/* ── Answer Handler ─────────────────────────────────────────── */
function handleAnswer(selectedIdx) {
  if (STATE.answered) return;
  STATE.answered = true;
  clearInterval(STATE.timerInterval);

  const q = STATE.questions[STATE.currentIdx];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) {
    STATE.score++;
    $(`opt${selectedIdx}`).classList.add("correct");
    showExplanation("correct", "Correct!", null);
  } else {
    $(`opt${selectedIdx}`).classList.add("wrong");
    const correctBtn = document.querySelector(`[data-idx="${q.correct}"]`);
    if (correctBtn) correctBtn.classList.add("correct");
    showExplanation("wrong", "Wrong.", q.options[q.correct]);
  }

  // Disable all option buttons
  document.querySelectorAll(".option-btn").forEach(b => { b.disabled = true; });

  // Show next / finish button
  const btnNext = $("btnNext");
  btnNext.style.display = "flex";
  const isLast = STATE.currentIdx === STATE.questions.length - 1;
  btnNext.textContent = isLast ? "View Results →" : "Next Question →";
}

function showExplanation(type, label, correctWord) {
  const box = $("explanationBox");
  box.style.display = "flex";

  const badge = $("expBadge");
  badge.className = `explanation-badge ${type}`;

  if (type === "correct") {
    badge.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Correct!`;
    $("expText").textContent = "Great job! That was right.";
  } else if (type === "wrong") {
    badge.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Incorrect`;
    $("expText").textContent = `The correct answer was: "${correctWord}"`;
  } else {
    badge.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 10"/></svg> Time's Up!`;
    $("expText").textContent = `Time expired. The correct answer was: "${correctWord}"`;
  }
}

/* ── Next Question ──────────────────────────────────────────── */
function initQuizScreen() {
  $("btnNext").addEventListener("click", () => {
    const isLast = STATE.currentIdx === STATE.questions.length - 1;
    if (isLast) {
      clearInterval(STATE.timerInterval);
      showResultsScreen();
    } else {
      STATE.currentIdx++;
      renderQuestion();
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCREEN 5 — RESULTS
   ═══════════════════════════════════════════════════════════════ */
function showResultsScreen() {
  const total    = STATE.questions.length;
  const score    = STATE.score;
  const pct      = Math.round((score / total) * 100);
  const elapsed  = Math.round((Date.now() - STATE.startTime) / 1000);

  // Rank
  let rankIcon = "🚀", rankTitle = "Orbital Cadet";
  if (pct === 100) { rankIcon = "👑"; rankTitle = "Grand Cosmic Admiral"; }
  else if (pct >= 80) { rankIcon = "⭐"; rankTitle = "Flight Commander"; }
  else if (pct >= 60) { rankIcon = "🛰️"; rankTitle = "Mission Specialist"; }

  $("resultRankIcon").textContent  = rankIcon;
  $("resultRankTitle").textContent = rankTitle;
  $("resultRankSub").textContent   =
    `${STATE.name} · ${STATE.department} · ID: ${STATE.id5}`;

  $("metricScore").textContent    = score;
  $("metricPct").textContent      = pct + "%";
  $("metricTime").textContent     = formatTime(elapsed);

  // Label total on score tile
  $("metricScoreLbl").textContent = `Score / ${total}`;

  // Colour score tile
  const pctColor = pct >= 80 ? "var(--green)" : pct >= 60 ? "var(--amber)" : "var(--rose)";
  $("metricPct").style.color = pctColor;

  showScreen("screenResults");

  // Save to Excel
  saveResult({ score, total, pct, elapsed });

  // Restart / try again
  $("btnTryAgain").addEventListener("click", () => {
    showScreen("screenTimer");
  });

  $("btnNewUser").addEventListener("click", () => {
    // Clear form
    $("inputName").value = "";
    $("inputDept").value = "";
    $("inputId5").value  = "";
    showScreen("screenWelcome");
  });
}

/* ── Save to Excel via Flask API ─────────────────────────────── */
async function saveResult({ score, total, pct, elapsed }) {
  const statusEl = $("saveStatus");
  statusEl.className = "save-status saving";
  statusEl.innerHTML = `<div class="spinner"></div> Saving to Excel...`;
  statusEl.style.display = "flex";

  const payload = {
    name:       STATE.name,
    department: STATE.department,
    id5:        STATE.id5,
    score,
    total,
    percentage: pct,
    timer_secs: STATE.timerMax,
    time_taken: elapsed
  };

  // Attempt server save first
  try {
    const resp = await fetch("/api/save-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (resp.ok) {
      const data = await resp.json();
      if (data.status === "ok") {
        const trialMsg = data.trial > 1
          ? ` (Trial #${data.trial} for this user)`
          : " (First attempt saved)";
        statusEl.className = "save-status success";
        statusEl.innerHTML =
          `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
           Result saved to Excel!${trialMsg}`;
        return;
      }
    }
  } catch (err) {
    // Server not available (e.g., hosted on static GitHub Pages) - fall through to client-side storage
  }

  // Client-side fallback for GitHub Pages hosting
  try {
    const records = JSON.parse(localStorage.getItem("space_quiz_records") || "[]");
    const userMatches = records.filter(r => 
      r.name.trim().toLowerCase() === payload.name.toLowerCase() && 
      r.id5.trim() === payload.id5
    );
    const trial = userMatches.length + 1;
    const timestamp = new Date().toLocaleString();

    const record = {
      trial,
      timestamp,
      ...payload
    };
    records.push(record);
    localStorage.setItem("space_quiz_records", JSON.stringify(records));

    statusEl.className = "save-status success";
    statusEl.innerHTML =
      `<div style="display: flex; flex-direction: column; gap: 6px; width: 100%;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Result saved! (Trial #${trial})
        </div>
        <button id="btnDownloadCsv" style="background: rgba(56,189,248,0.15); border: 1px solid var(--cyan); color: var(--cyan); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-family: var(--mono); cursor: pointer; align-self: flex-start;">
          📥 Download Results Spreadsheet (.csv)
        </button>
      </div>`;

    const dlBtn = document.getElementById("btnDownloadCsv");
    if (dlBtn) {
      dlBtn.onclick = () => downloadResultsCsv(records);
    }
  } catch (err) {
    statusEl.className = "save-status error";
    statusEl.innerHTML = `Could not save result: ${err.message}`;
  }
}

function downloadResultsCsv(records) {
  const headers = ["Trial", "Timestamp", "Name", "Department", "ID (Last 5 Digits)", "Score", "Total Questions", "Percentage (%)", "Timer (sec/q)", "Time Taken (sec)"];
  const rows = records.map(r => [
    r.trial,
    `"${r.timestamp}"`,
    `"${r.name}"`,
    `"${r.department}"`,
    `"${r.id5}"`,
    r.score,
    r.total,
    r.percentage,
    r.timer_secs,
    r.time_taken
  ]);
  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "quiz_results.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ─────────── Helpers ────────────────────────────────────────── */
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

/* ─────────── Boot ───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initWelcomeScreen();
  initTimerScreen();
  initInfoScreen();
  initQuizScreen();
  showScreen("screenWelcome");

  // Minimal canvas starfield
  new StarfieldCanvas("starfield");
});
