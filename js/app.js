/**
 * AstroMobbin - Main Application Controller
 * Handles Mobbin layout interactions, filtering, search, bookmarks, command palette,
 * and the interactive space quiz engine.
 */

class AstroMobbinApp {
  constructor() {
    this.missions = MISSIONS_DATA;
    this.currentCategory = "all";
    this.currentDifficulty = "all";
    this.currentDuration = "all";
    this.currentSort = "trending";
    this.searchQuery = "";
    this.viewMode = "grid"; // "grid" or "list"
    this.savedMissionIds = new Set();
    this.dailyStreak = 1;

    // Quiz Player State
    this.activeMission = null;
    this.currentQuestionIdx = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.quizMaxStreak = 0;
    this.userAnswers = []; // { questionId, selectedIndex, correctIndex, isCorrect, timeSpent }
    this.timerSeconds = 25;
    this.timerInterval = null;
    this.questionStartTime = 0;
    this.lifelinesUsed = {
      fiftyFifty: false,
      hint: false,
      timeWarp: false
    };
    this.isAnswerSubmitted = false;

    this.init();
  }

  init() {
    this.loadStorage();
    this.renderHeaderStats();
    this.renderCategoryTabs();
    this.renderMissions();
    this.bindDOMEvents();
    this.bindKeyboardShortcuts();
    this.updateDailyStreak();
  }

  /* --------------------------------------------------------------------------
     Local Storage Persistence
     -------------------------------------------------------------------------- */
  loadStorage() {
    try {
      const saved = localStorage.getItem("astromobbin_bookmarks");
      if (saved) {
        this.savedMissionIds = new Set(JSON.parse(saved));
      }
      const streak = localStorage.getItem("astromobbin_streak");
      if (streak) {
        this.dailyStreak = parseInt(streak, 10) || 1;
      }
    } catch (e) {
      console.warn("Storage access issue:", e);
    }
  }

  saveStorage() {
    try {
      localStorage.setItem("astromobbin_bookmarks", JSON.stringify([...this.savedMissionIds]));
      localStorage.setItem("astromobbin_streak", this.dailyStreak.toString());
    } catch (e) {}
  }

  updateDailyStreak() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem("astromobbin_last_date");
    if (lastPlayed !== today) {
      // Keep streak current
      localStorage.setItem("astromobbin_last_date", today);
    }
    const streakEl = document.getElementById("headerStreakBadge");
    if (streakEl) {
      streakEl.innerHTML = `<span class="streak-flame">🔥</span> Day ${this.dailyStreak}`;
    }
  }

  /* --------------------------------------------------------------------------
     Artwork SVG Generator (Custom celestial vector art for cards)
     -------------------------------------------------------------------------- */
  getCoverSvg(type, accentColor) {
    switch (type) {
      case "jwst":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCD34D"/>
                <stop offset="50%" stop-color="#F59E0B"/>
                <stop offset="100%" stop-color="#D97706"/>
              </linearGradient>
              <radialGradient id="nebulaJwst" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="rgba(245, 158, 11, 0.25)"/>
                <stop offset="100%" stop-color="transparent"/>
              </radialGradient>
            </defs>
            <rect width="300" height="180" fill="#070C18"/>
            <circle cx="150" cy="90" r="80" fill="url(#nebulaJwst)"/>
            <!-- Sunshield layers -->
            <polygon points="50,135 150,150 250,135 150,120" fill="#334155" stroke="#64748B" stroke-width="1"/>
            <polygon points="60,132 150,145 240,132 150,123" fill="#475569" stroke="#94A3B8" stroke-width="1"/>
            <!-- Honeycomb Hexagonal Mirror Array -->
            <g transform="translate(150, 75)" fill="url(#goldGrad)" stroke="#78350F" stroke-width="1">
              ${this.createHexGrid()}
            </g>
            <!-- Secondary Mirror Tripod -->
            <line x1="150" y1="75" x2="150" y2="40" stroke="#CBD5E1" stroke-width="1.5"/>
            <line x1="130" y1="85" x2="150" y2="40" stroke="#CBD5E1" stroke-width="1.5"/>
            <line x1="170" y1="85" x2="150" y2="40" stroke="#CBD5E1" stroke-width="1.5"/>
            <circle cx="150" cy="40" r="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
          </svg>
        `;

      case "blackhole":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="diskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#38BDF8"/>
                <stop offset="30%" stop-color="#C084FC"/>
                <stop offset="70%" stop-color="#F43F5E"/>
                <stop offset="100%" stop-color="#F59E0B"/>
              </linearGradient>
            </defs>
            <rect width="300" height="180" fill="#05070E"/>
            <!-- Warped Light Ring -->
            <ellipse cx="150" cy="90" rx="90" ry="25" fill="none" stroke="url(#diskGrad)" stroke-width="16" opacity="0.85" filter="drop-shadow(0 0 12px #C084FC)"/>
            <!-- Black Hole Shadow Void -->
            <circle cx="150" cy="90" r="32" fill="#000000" stroke="#FDE047" stroke-width="2"/>
            <!-- Front Lower Accretion Ring -->
            <ellipse cx="150" cy="95" rx="85" ry="18" fill="none" stroke="url(#diskGrad)" stroke-width="10" opacity="0.95"/>
          </svg>
        `;

      case "moon":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#070A12"/>
            <!-- Distant Earth -->
            <circle cx="230" cy="45" r="14" fill="#0284C7"/>
            <circle cx="228" cy="43" r="14" fill="#38BDF8" opacity="0.4"/>
            <!-- Moon Horizon Curve -->
            <path d="M 0 130 Q 150 110 300 130 L 300 180 L 0 180 Z" fill="#1E293B"/>
            <path d="M 0 145 Q 150 130 300 145 L 300 180 L 0 180 Z" fill="#0F172A"/>
            <!-- Craters -->
            <ellipse cx="80" cy="148" rx="14" ry="4" fill="#0F172A" stroke="#334155" stroke-width="1"/>
            <ellipse cx="200" cy="155" rx="22" ry="6" fill="#0F172A" stroke="#334155" stroke-width="1"/>
            <!-- Lunar Lander silhouette -->
            <g transform="translate(140, 102)" fill="#94A3B8">
              <polygon points="10,0 20,0 24,14 6,14"/>
              <rect x="8" y="14" width="14" height="6" fill="#F59E0B"/>
              <!-- Legs -->
              <line x1="6" y1="18" x2="0" y2="28" stroke="#CBD5E1" stroke-width="1.5"/>
              <line x1="24" y1="18" x2="30" y2="28" stroke="#CBD5E1" stroke-width="1.5"/>
            </g>
          </svg>
        `;

      case "voyager":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#060912"/>
            <!-- Golden Record Glow -->
            <circle cx="85" cy="75" r="22" fill="#F59E0B" opacity="0.8" stroke="#FDE68A" stroke-width="2"/>
            <!-- High gain dish -->
            <ellipse cx="170" cy="90" rx="36" ry="16" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5" transform="rotate(-25 170 90)"/>
            <!-- Sub-reflector -->
            <line x1="170" y1="90" x2="185" y2="60" stroke="#CBD5E1" stroke-width="2"/>
            <circle cx="185" cy="60" r="4" fill="#94A3B8"/>
            <!-- RTG Boom -->
            <line x1="150" y1="105" x2="105" y2="135" stroke="#64748B" stroke-width="2.5"/>
            <rect x="95" y="130" width="18" height="10" fill="#10B981" rx="2"/>
          </svg>
        `;

      case "mars":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="marsSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#1E1012"/>
                <stop offset="100%" stop-color="#5B211A"/>
              </linearGradient>
            </defs>
            <rect width="300" height="180" fill="url(#marsSky)"/>
            <!-- Distant dunes -->
            <path d="M 0 120 Q 90 95 180 115 T 300 110 L 300 180 L 0 180 Z" fill="#7C2D12"/>
            <path d="M 0 135 Q 120 120 240 140 T 300 135 L 300 180 L 0 180 Z" fill="#9A3412"/>
            <!-- Ingenuity drone hovering -->
            <g transform="translate(180, 55)" stroke="#CBD5E1" stroke-width="1.5">
              <line x1="0" y1="5" x2="26" y2="5"/>
              <line x1="0" y1="9" x2="26" y2="9"/>
              <rect x="10" y="10" width="6" height="8" fill="#F59E0B" stroke="none"/>
              <line x1="8" y1="18" x2="4" y2="25"/>
              <line x1="18" y1="18" x2="22" y2="25"/>
            </g>
          </svg>
        `;

      case "exoplanet":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="starHost" cx="30%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FFFBEB"/>
                <stop offset="60%" stop-color="#F59E0B"/>
                <stop offset="100%" stop-color="#B45309"/>
              </radialGradient>
            </defs>
            <rect width="300" height="180" fill="#080D1A"/>
            <!-- Host Star -->
            <circle cx="80" cy="90" r="65" fill="url(#starHost)" filter="drop-shadow(0 0 30px #F59E0B)"/>
            <!-- Transiting Exoplanet with glowing blue atmosphere ring -->
            <circle cx="180" cy="85" r="32" fill="#0F172A" stroke="#38BDF8" stroke-width="2" filter="drop-shadow(0 0 8px #38BDF8)"/>
          </svg>
        `;

      case "saturn":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="saturnBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDE68A"/>
                <stop offset="50%" stop-color="#D97706"/>
                <stop offset="100%" stop-color="#78350F"/>
              </linearGradient>
            </defs>
            <rect width="300" height="180" fill="#060912"/>
            <!-- Back Ring -->
            <ellipse cx="150" cy="90" rx="110" ry="22" fill="none" stroke="#FDE68A" stroke-width="8" opacity="0.6"/>
            <ellipse cx="150" cy="90" rx="90" ry="17" fill="none" stroke="#D97706" stroke-width="5" opacity="0.8"/>
            <!-- Planet Ball -->
            <circle cx="150" cy="90" r="42" fill="url(#saturnBody)"/>
            <!-- Front Ring Segment -->
            <path d="M 40 90 A 110 22 0 0 0 260 90" fill="none" stroke="#FDE68A" stroke-width="8" opacity="0.85"/>
            <path d="M 60 90 A 90 17 0 0 0 240 90" fill="none" stroke="#D97706" stroke-width="5" opacity="0.95"/>
          </svg>
        `;

      case "rocket":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#080C16"/>
            <!-- Exhaust Plume -->
            <polygon points="150,115 135,175 150,165 165,175" fill="#F97316" filter="drop-shadow(0 0 12px #F97316)"/>
            <polygon points="150,115 142,150 150,145 158,150" fill="#FEF08A"/>
            <!-- Rocket Hull -->
            <rect x="142" y="55" width="16" height="60" rx="3" fill="#E2E8F0"/>
            <polygon points="142,55 150,30 158,55" fill="#0284C7"/>
            <!-- Fins -->
            <polygon points="142,105 130,118 142,118" fill="#475569"/>
            <polygon points="158,105 170,118 158,118" fill="#475569"/>
          </svg>
        `;

      case "cosmology":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#080B17"/>
            <!-- Cosmic Web Fluctuation Blobs -->
            <circle cx="150" cy="90" r="70" fill="none" stroke="#4F46E5" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
            <circle cx="150" cy="90" r="45" fill="none" stroke="#38BDF8" stroke-width="2" stroke-dasharray="8,6" opacity="0.7"/>
            <circle cx="150" cy="90" r="20" fill="#6366F1" opacity="0.3"/>
            <circle cx="90" cy="60" r="8" fill="#38BDF8" opacity="0.5"/>
            <circle cx="210" cy="120" r="10" fill="#EC4899" opacity="0.5"/>
            <circle cx="190" cy="50" r="6" fill="#F59E0B" opacity="0.6"/>
          </svg>
        `;

      case "sun":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FFFBEB"/>
                <stop offset="40%" stop-color="#F59E0B"/>
                <stop offset="80%" stop-color="#DC2626"/>
                <stop offset="100%" stop-color="transparent"/>
              </radialGradient>
            </defs>
            <rect width="300" height="180" fill="#140A06"/>
            <circle cx="150" cy="90" r="75" fill="url(#sunGlow)"/>
            <circle cx="150" cy="90" r="38" fill="#FEF3C7" stroke="#F59E0B" stroke-width="3"/>
          </svg>
        `;

      case "europa":
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#060A14"/>
            <circle cx="150" cy="90" r="48" fill="#E0F2FE" stroke="#38BDF8" stroke-width="2"/>
            <!-- Europa Lineae Cracks -->
            <path d="M 120 65 Q 145 90 185 105" stroke="#9A3412" stroke-width="2" fill="none"/>
            <path d="M 110 100 Q 150 95 175 60" stroke="#7C2D12" stroke-width="1.5" fill="none"/>
            <path d="M 140 50 Q 155 100 135 130" stroke="#9A3412" stroke-width="1.5" fill="none"/>
            <!-- Cryo-plume vent -->
            <path d="M 104 85 Q 85 80 75 70" stroke="#BAE6FD" stroke-width="2" stroke-dasharray="2,2" fill="none"/>
          </svg>
        `;

      case "galaxy":
      default:
        return `
          <svg viewBox="0 0 300 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#080A14"/>
            <!-- Spiral Arms -->
            <ellipse cx="150" cy="90" rx="90" ry="32" fill="none" stroke="#8B5CF6" stroke-width="12" opacity="0.4" transform="rotate(-20 150 90)"/>
            <ellipse cx="150" cy="90" rx="60" ry="20" fill="none" stroke="#38BDF8" stroke-width="8" opacity="0.6" transform="rotate(-20 150 90)"/>
            <!-- Core -->
            <circle cx="150" cy="90" r="14" fill="#FFFFFF" filter="drop-shadow(0 0 12px #38BDF8)"/>
          </svg>
        `;
    }
  }

  createHexGrid() {
    let out = "";
    const coords = [
      [-20, -18], [0, -18], [20, -18],
      [-30, 0], [-10, 0], [10, 0], [30, 0],
      [-20, 18], [0, 18], [20, 18]
    ];
    coords.forEach(([cx, cy]) => {
      out += `<polygon points="${cx},${cy-9} ${cx+8},${cy-4.5} ${cx+8},${cy+4.5} ${cx},${cy+9} ${cx-8},${cy+4.5} ${cx-8},${cy-4.5}"/>`;
    });
    return out;
  }

  /* --------------------------------------------------------------------------
     Render Category Tabs (Mobbin Style)
     -------------------------------------------------------------------------- */
  renderCategoryTabs() {
    const container = document.getElementById("categoryTabs");
    if (!container) return;

    container.innerHTML = QUIZ_STATS.categories.map(cat => {
      const isActive = this.currentCategory === cat.id;
      return `
        <button class="tab-pill ${isActive ? 'active' : ''}" data-category="${cat.id}">
          <span>${cat.label}</span>
        </button>
      `;
    }).join("");

    container.querySelectorAll(".tab-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        audio.playClick();
        this.currentCategory = btn.dataset.category;
        container.querySelectorAll(".tab-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderMissions();
      });
    });
  }

  /* --------------------------------------------------------------------------
     Render Missions Grid / Filter Loop
     -------------------------------------------------------------------------- */
  getFilteredMissions() {
    return this.missions.filter(m => {
      // Category filter
      if (this.currentCategory !== "all" && m.category !== this.currentCategory) {
        return false;
      }
      // Difficulty filter
      if (this.currentDifficulty !== "all" && m.difficulty !== this.currentDifficulty) {
        return false;
      }
      // Duration filter
      if (this.currentDuration !== "all") {
        if (this.currentDuration === "quick" && m.questionCount > 6) return false;
        if (this.currentDuration === "standard" && (m.questionCount < 7 || m.questionCount > 9)) return false;
        if (this.currentDuration === "deep" && m.questionCount < 10) return false;
      }
      // Search query
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        const matchesTitle = m.title.toLowerCase().includes(query);
        const matchesDesc = m.overview.toLowerCase().includes(query);
        const matchesTags = m.tags.some(t => t.toLowerCase().includes(query));
        const matchesQuestions = m.questions.some(q => q.question.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesQuestions) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (this.currentSort === "trending") return b.rating - a.rating;
      if (this.currentSort === "top") return parseFloat(b.completionRate) - parseFloat(a.completionRate);
      if (this.currentSort === "hardest") {
        const diffRank = { commander: 3, astronaut: 2, cadet: 1 };
        return diffRank[b.difficulty] - diffRank[a.difficulty];
      }
      return 0;
    });
  }

  renderMissions() {
    const grid = document.getElementById("missionsGrid");
    const countEl = document.getElementById("resultsCount");
    if (!grid) return;

    const filtered = this.getFilteredMissions();

    if (countEl) {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${this.missions.length} space missions`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h3 class="empty-state-title">No space missions found</h3>
          <p class="empty-state-desc">Try clearing your filters or search query to explore other celestial tracks.</p>
          <button class="btn-primary" id="emptyClearBtn" style="margin: 0 auto;">
            Reset All Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("emptyClearBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => this.resetFilters());
      }
      return;
    }

    grid.className = `missions-grid ${this.viewMode === 'list' ? 'list-view' : ''}`;

    grid.innerHTML = filtered.map(m => {
      const isBookmarked = this.savedMissionIds.has(m.id);
      return `
        <article class="mission-card" data-mission-id="${m.id}">
          <div class="card-cover" data-action="preview" data-mission-id="${m.id}">
            <div class="card-cover-art">
              ${this.getCoverSvg(m.coverSvgType, m.accentColor)}
            </div>
            
            <div class="card-badges-top">
              <span class="badge-pill badge-difficulty-${m.difficulty}">
                <span class="status-dot"></span>
                ${m.difficultyLabel}
              </span>
              <span class="badge-pill card-meta-badge">
                ${m.questionCount} Questions
              </span>
            </div>

            <div class="card-quick-actions">
              <button class="quick-preview-btn" data-action="preview" data-mission-id="${m.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Preview
              </button>
            </div>
          </div>

          <div class="card-body">
            <span class="card-category-sub">${m.categoryLabel}</span>
            <h3 class="card-title" data-action="preview" data-mission-id="${m.id}">${m.title}</h3>
            <p class="card-desc">${m.tagline}</p>
            
            <div class="card-tags">
              ${m.tags.slice(0, 3).map(tag => `<span class="tag-pill">#${tag}</span>`).join("")}
            </div>
          </div>

          <div class="card-footer">
            <div class="card-stats">
              <span class="stat-metric rating">★ ${m.rating}</span>
              <span class="stat-metric">${m.playsCount} plays</span>
              <span class="stat-metric">${m.completionRate} pass</span>
            </div>

            <div class="card-footer-actions">
              <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" 
                data-action="bookmark" 
                data-mission-id="${m.id}" 
                title="${isBookmarked ? 'Remove Bookmark' : 'Save Mission'}" 
                aria-label="Bookmark">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>

              <button class="btn-start-mission" data-action="start" data-mission-id="${m.id}">
                <span>Launch</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    this.bindCardClicks();
  }

  bindCardClicks() {
    const grid = document.getElementById("missionsGrid");
    if (!grid) return;

    grid.querySelectorAll("[data-action='preview']").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        audio.playClick();
        const id = el.dataset.missionId;
        this.openPreviewModal(id);
      });
    });

    grid.querySelectorAll("[data-action='bookmark']").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        audio.playClick();
        const id = el.dataset.missionId;
        this.toggleBookmark(id);
      });
    });

    grid.querySelectorAll("[data-action='start']").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        audio.playClick();
        const id = el.dataset.missionId;
        this.startQuiz(id);
      });
    });
  }

  /* --------------------------------------------------------------------------
     Bookmarks System
     -------------------------------------------------------------------------- */
  toggleBookmark(missionId) {
    if (this.savedMissionIds.has(missionId)) {
      this.savedMissionIds.delete(missionId);
      this.showToast("Mission removed from bookmarks");
    } else {
      this.savedMissionIds.add(missionId);
      this.showToast("Mission saved to your orbit");
    }
    this.saveStorage();
    this.renderHeaderStats();
    this.renderMissions();
    this.renderBookmarksDrawer();
  }

  renderHeaderStats() {
    const bookmarkCount = document.getElementById("bookmarkCounter");
    if (bookmarkCount) {
      bookmarkCount.textContent = this.savedMissionIds.size;
    }
  }

  renderBookmarksDrawer() {
    const container = document.getElementById("bookmarksList");
    if (!container) return;

    const saved = this.missions.filter(m => this.savedMissionIds.has(m.id));
    if (saved.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 0.75rem;">
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
          </svg>
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main);">No bookmarked missions yet</p>
          <p style="font-size: 0.78rem; margin-top: 4px;">Click the bookmark icon on any space mission to save it for quick takeoff.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = saved.map(m => `
      <div class="drawer-item" data-mission-id="${m.id}">
        <div style="display: flex; flex-direction: column; gap: 3px;">
          <span style="font-size: 0.86rem; font-weight: 700; color: var(--text-main);">${m.title}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">${m.duration} • ${m.difficultyLabel}</span>
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="btn-start-mission" data-action="start-saved" data-mission-id="${m.id}">
            Launch
          </button>
        </div>
      </div>
    `).join("");

    container.querySelectorAll("[data-action='start-saved']").forEach(btn => {
      btn.addEventListener("click", () => {
        this.closeBookmarksDrawer();
        this.startQuiz(btn.dataset.missionId);
      });
    });
  }

  openBookmarksDrawer() {
    audio.playClick();
    this.renderBookmarksDrawer();
    const drawer = document.getElementById("bookmarksDrawer");
    if (drawer) drawer.classList.add("open");
  }

  closeBookmarksDrawer() {
    const drawer = document.getElementById("bookmarksDrawer");
    if (drawer) drawer.classList.remove("open");
  }

  /* --------------------------------------------------------------------------
     Mission Inspection Modal (Mobbin Preview Pattern)
     -------------------------------------------------------------------------- */
  openPreviewModal(missionId) {
    const mission = this.missions.find(m => m.id === missionId);
    if (!mission) return;

    const modal = document.getElementById("previewModal");
    const titleEl = document.getElementById("modalMissionTitle");
    const subEl = document.getElementById("modalMissionSubtitle");
    const overviewEl = document.getElementById("modalOverview");
    const objectivesEl = document.getElementById("modalObjectives");
    const previewQEl = document.getElementById("modalPreviewQuestion");
    const launchBtn = document.getElementById("modalLaunchBtn");
    const bookmarkBtn = document.getElementById("modalBookmarkBtn");
    const coverEl = document.getElementById("modalCoverArt");

    if (titleEl) titleEl.textContent = mission.title;
    if (subEl) subEl.textContent = `${mission.categoryLabel} • ${mission.difficultyLabel} • ${mission.duration}`;
    if (overviewEl) overviewEl.textContent = mission.overview;
    if (coverEl) coverEl.innerHTML = this.getCoverSvg(mission.coverSvgType, mission.accentColor);

    if (objectivesEl) {
      objectivesEl.innerHTML = mission.objectives.map(obj => `
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>${obj}</span>
        </li>
      `).join("");
    }

    if (previewQEl && mission.questions.length > 0) {
      const q = mission.questions[0];
      previewQEl.innerHTML = `
        <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--color-cyan); margin-bottom: 4px;">SAMPLE QUESTION INTEL</div>
        <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-main); margin-bottom: 8px;">${q.question}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
          ${q.options.slice(0, 2).map((opt, i) => `
            <div style="font-size: 0.78rem; background: rgba(255,255,255,0.04); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--border-subtle); color: var(--text-secondary);">
              <strong style="color: var(--text-muted);">${['A','B'][i]}:</strong> ${opt}
            </div>
          `).join("")}
        </div>
      `;
    }

    if (launchBtn) {
      launchBtn.onclick = () => {
        audio.playClick();
        this.closePreviewModal();
        this.startQuiz(mission.id);
      };
    }

    if (bookmarkBtn) {
      const isBookmarked = this.savedMissionIds.has(mission.id);
      bookmarkBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
        </svg>
        <span>${isBookmarked ? 'Saved' : 'Save Mission'}</span>
      `;
      bookmarkBtn.onclick = () => {
        audio.playClick();
        this.toggleBookmark(mission.id);
        this.openPreviewModal(mission.id); // Refresh button state
      };
    }

    if (modal) modal.classList.add("open");
  }

  closePreviewModal() {
    const modal = document.getElementById("previewModal");
    if (modal) modal.classList.remove("open");
  }

  /* --------------------------------------------------------------------------
     Command Palette (Mobbin ⌘K / Search)
     -------------------------------------------------------------------------- */
  openCommandPalette() {
    audio.playClick();
    const palette = document.getElementById("commandPalette");
    const input = document.getElementById("paletteInput");
    if (palette && input) {
      palette.classList.add("open");
      input.value = "";
      input.focus();
      this.filterPaletteResults("");
    }
  }

  closeCommandPalette() {
    const palette = document.getElementById("commandPalette");
    if (palette) palette.classList.remove("open");
  }

  filterPaletteResults(query) {
    const list = document.getElementById("paletteResults");
    if (!list) return;

    const term = query.toLowerCase().trim();
    const matches = this.missions.filter(m => {
      if (!term) return true;
      return m.title.toLowerCase().includes(term) ||
             m.tags.some(t => t.toLowerCase().includes(term)) ||
             m.overview.toLowerCase().includes(term);
    }).slice(0, 8);

    if (matches.length === 0) {
      list.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No matching missions found.
        </div>
      `;
      return;
    }

    list.innerHTML = matches.map((m, idx) => `
      <div class="palette-item ${idx === 0 ? 'selected' : ''}" data-mission-id="${m.id}">
        <div class="palette-item-left">
          <span style="font-size: 1.2rem;">🪐</span>
          <div>
            <div class="palette-item-title">${m.title}</div>
            <div class="palette-item-sub">${m.categoryLabel} • ${m.difficultyLabel}</div>
          </div>
        </div>
        <div class="palette-shortcut-hint">Enter to Launch</div>
      </div>
    `).join("");

    list.querySelectorAll(".palette-item").forEach(item => {
      item.addEventListener("click", () => {
        this.closeCommandPalette();
        this.startQuiz(item.dataset.missionId);
      });
    });
  }

  /* --------------------------------------------------------------------------
     INTERACTIVE QUIZ PLAYER ENGINE
     -------------------------------------------------------------------------- */
  startQuiz(missionId) {
    const mission = this.missions.find(m => m.id === missionId);
    if (!mission) return;

    this.activeMission = mission;
    this.currentQuestionIdx = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.quizMaxStreak = 0;
    this.userAnswers = [];
    this.lifelinesUsed = { fiftyFifty: false, hint: false, timeWarp: false };
    this.isAnswerSubmitted = false;

    const player = document.getElementById("quizPlayerView");
    if (player) {
      player.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    const titleEl = document.getElementById("playerMissionTitle");
    if (titleEl) titleEl.textContent = mission.title;

    this.renderQuestion();
  }

  startDailyOrbit() {
    audio.playClick();
    // Create special 5-question daily challenge from random missions
    const shuffledQuestions = [];
    const pool = [...this.missions].sort(() => Math.random() - 0.5);
    pool.slice(0, 5).forEach(m => {
      const q = m.questions[Math.floor(Math.random() * m.questions.length)];
      shuffledQuestions.push(q);
    });

    const dailyMission = {
      id: "daily-orbit",
      title: "Daily Orbit Challenge",
      shortTitle: "Daily Orbit",
      category: "all",
      categoryLabel: "Daily Orbital Gauntlet",
      difficulty: "astronaut",
      difficultyLabel: "Astronaut",
      duration: "5 Qs • 3 min",
      questionCount: 5,
      questions: shuffledQuestions,
      coverSvgType: "sun",
      accentColor: "#F59E0B"
    };

    this.activeMission = dailyMission;
    this.currentQuestionIdx = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.quizMaxStreak = 0;
    this.userAnswers = [];
    this.lifelinesUsed = { fiftyFifty: false, hint: false, timeWarp: false };
    this.isAnswerSubmitted = false;

    const player = document.getElementById("quizPlayerView");
    if (player) {
      player.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    const titleEl = document.getElementById("playerMissionTitle");
    if (titleEl) titleEl.textContent = dailyMission.title;

    this.renderQuestion();
  }

  exitQuiz() {
    audio.playClick();
    clearInterval(this.timerInterval);
    const player = document.getElementById("quizPlayerView");
    if (player) {
      player.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    this.activeMission = null;
  }

  renderQuestion() {
    clearInterval(this.timerInterval);
    this.isAnswerSubmitted = false;

    const q = this.activeMission.questions[this.currentQuestionIdx];
    const totalQ = this.activeMission.questions.length;

    // Reset lifelines UI state for active question
    const btnFifty = document.getElementById("lifelineFifty");
    const btnHint = document.getElementById("lifelineHint");
    const btnTime = document.getElementById("lifelineTime");
    if (btnFifty) btnFifty.disabled = this.lifelinesUsed.fiftyFifty;
    if (btnHint) btnHint.disabled = this.lifelinesUsed.hint;
    if (btnTime) btnTime.disabled = this.lifelinesUsed.timeWarp;

    // Update Progress Bar
    const progressEl = document.getElementById("playerProgressFill");
    const progressText = document.getElementById("playerProgressText");
    const percent = Math.round(((this.currentQuestionIdx) / totalQ) * 100);
    if (progressEl) progressEl.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `Question ${this.currentQuestionIdx + 1} of ${totalQ}`;

    // Update Score & Streak
    const scoreVal = document.getElementById("playerScoreVal");
    const streakVal = document.getElementById("playerStreakVal");
    if (scoreVal) scoreVal.textContent = this.quizScore;
    if (streakVal) streakVal.textContent = `x${this.quizStreak}`;

    // Question Text & Meta
    const stage = document.getElementById("quizQuestionStage");
    if (!stage) return;

    stage.innerHTML = `
      <div class="question-card">
        <div class="question-top-meta">
          <span class="badge-pill card-meta-badge">
            Telemetry #${this.currentQuestionIdx + 1}
          </span>
          <span class="badge-pill badge-difficulty-${this.activeMission.difficulty}">
            <span class="status-dot"></span>
            ${this.activeMission.difficultyLabel}
          </span>
        </div>

        <h2 class="question-heading">${q.question}</h2>

        <div id="hintContainer"></div>

        <div class="options-grid" id="optionsGrid">
          ${q.options.map((opt, idx) => {
            const letter = ['A', 'B', 'C', 'D'][idx];
            return `
              <button class="option-btn" data-opt-idx="${idx}">
                <span class="option-key">${letter}</span>
                <span class="option-text">${opt}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <div id="explanationContainer"></div>
    `;

    // Bind option click handlers
    stage.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.optIdx, 10);
        this.handleAnswerSelection(idx);
      });
    });

    // Start Countdown Timer (25 seconds)
    this.timerSeconds = 25;
    this.questionStartTime = Date.now();
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();
      if (this.timerSeconds <= 5 && this.timerSeconds > 0) {
        audio.playTick();
      }
      if (this.timerSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.handleAnswerTimeout();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerBadge = document.getElementById("playerTimerBadge");
    const timerText = document.getElementById("playerTimerText");
    if (timerText) timerText.textContent = `${this.timerSeconds}s`;
    if (timerBadge) {
      if (this.timerSeconds <= 5) {
        timerBadge.classList.add("warning");
      } else {
        timerBadge.classList.remove("warning");
      }
    }
  }

  /* --------------------------------------------------------------------------
     Lifeline Executions
     -------------------------------------------------------------------------- */
  useFiftyFifty() {
    if (this.lifelinesUsed.fiftyFifty || this.isAnswerSubmitted) return;
    this.lifelinesUsed.fiftyFifty = true;
    audio.playLifeline();

    const q = this.activeMission.questions[this.currentQuestionIdx];
    const correctIdx = q.correctIndex;
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIdx);
    // Shuffle and pick 2 to disable
    const toDisable = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);

    const buttons = document.querySelectorAll("#optionsGrid .option-btn");
    toDisable.forEach(idx => {
      if (buttons[idx]) {
        buttons[idx].classList.add("fifty-disabled");
      }
    });

    const btn = document.getElementById("lifelineFifty");
    if (btn) btn.disabled = true;
    this.showToast("50:50 Orbital Purge activated (-2 incorrect options)");
  }

  useHint() {
    if (this.lifelinesUsed.hint || this.isAnswerSubmitted) return;
    this.lifelinesUsed.hint = true;
    audio.playLifeline();

    const q = this.activeMission.questions[this.currentQuestionIdx];
    const hintBox = document.getElementById("hintContainer");
    if (hintBox) {
      hintBox.innerHTML = `
        <div class="hint-banner" style="margin-top: 1rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
          </svg>
          <div>
            <strong>Telemetry Clue:</strong> ${q.hint}
          </div>
        </div>
      `;
    }

    const btn = document.getElementById("lifelineHint");
    if (btn) btn.disabled = true;
    this.showToast("Telemetry Clue deciphered");
  }

  useTimeWarp() {
    if (this.lifelinesUsed.timeWarp || this.isAnswerSubmitted) return;
    this.lifelinesUsed.timeWarp = true;
    audio.playLifeline();

    this.timerSeconds += 15;
    this.updateTimerDisplay();

    const btn = document.getElementById("lifelineTime");
    if (btn) btn.disabled = true;
    this.showToast("Chrono Boost: +15 seconds added to orbital clock");
  }

  /* --------------------------------------------------------------------------
     Answer Handling & Scoring
     -------------------------------------------------------------------------- */
  handleAnswerSelection(selectedIdx) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;
    clearInterval(this.timerInterval);

    const q = this.activeMission.questions[this.currentQuestionIdx];
    const isCorrect = selectedIdx === q.correctIndex;
    const timeSpent = Math.max(1, Math.round((Date.now() - this.questionStartTime) / 1000));

    // Calculate score
    let points = 0;
    if (isCorrect) {
      audio.playCorrect();
      this.quizStreak++;
      if (this.quizStreak > this.quizMaxStreak) {
        this.quizMaxStreak = this.quizStreak;
      }
      const streakMultiplier = 1 + (this.quizStreak - 1) * 0.25;
      const speedBonus = Math.max(0, this.timerSeconds * 2);
      points = Math.round((100 + speedBonus) * streakMultiplier);
      this.quizScore += points;
    } else {
      audio.playWrong();
      this.quizStreak = 0;
    }

    this.userAnswers.push({
      question: q.question,
      options: q.options,
      selectedIndex: selectedIdx,
      correctIndex: q.correctIndex,
      isCorrect,
      explanation: q.explanation,
      pointsEarned: points,
      timeSpent
    });

    // Update buttons styling
    const buttons = document.querySelectorAll("#optionsGrid .option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("wrong");
      }
    });

    // Update HUD Score
    const scoreVal = document.getElementById("playerScoreVal");
    const streakVal = document.getElementById("playerStreakVal");
    if (scoreVal) scoreVal.textContent = this.quizScore;
    if (streakVal) streakVal.textContent = `x${this.quizStreak}`;

    // Render Scientific Explanation Box
    const explanationContainer = document.getElementById("explanationContainer");
    if (explanationContainer) {
      explanationContainer.innerHTML = `
        <div class="explanation-card">
          <div class="explanation-header">
            <span class="explanation-badge ${isCorrect ? 'correct' : 'wrong'}">
              ${isCorrect ? '✓ MISSION TELEMETRY CONFIRMED (+'+points+' pts)' : '✕ TRAJECTORY CORRECTION NEEDED'}
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
              Response time: ${timeSpent}s
            </span>
          </div>

          <p class="explanation-text">
            <strong>Cosmic Fact:</strong> ${q.explanation}
          </p>

          <div class="explanation-actions">
            <button class="btn-continue" id="btnContinueMission">
              <span>Continue Mission</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      const continueBtn = document.getElementById("btnContinueMission");
      if (continueBtn) {
        continueBtn.addEventListener("click", () => {
          audio.playClick();
          this.advanceNextQuestion();
        });
      }
    }
  }

  handleAnswerTimeout() {
    if (this.isAnswerSubmitted) return;
    this.handleAnswerSelection(-1); // -1 indicates timed out
    this.showToast("Orbital window expired! Auto-advancing...");
  }

  advanceNextQuestion() {
    this.currentQuestionIdx++;
    if (this.currentQuestionIdx < this.activeMission.questions.length) {
      this.renderQuestion();
    } else {
      this.renderDebriefResults();
    }
  }

  /* --------------------------------------------------------------------------
     Results & Debrief Screen
     -------------------------------------------------------------------------- */
  renderDebriefResults() {
    clearInterval(this.timerInterval);
    audio.playVictory();

    const stage = document.getElementById("quizQuestionStage");
    if (!stage) return;

    const totalQuestions = this.userAnswers.length;
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const totalTime = this.userAnswers.reduce((sum, a) => sum + a.timeSpent, 0);

    // Determine Cosmic Rank
    let rankTitle = "Orbital Cadet";
    let rankColor = "#38BDF8";
    let rankIcon = "🚀";
    if (accuracy === 100) {
      rankTitle = "Grand Cosmic Admiral";
      rankColor = "#F59E0B";
      rankIcon = "👑";
    } else if (accuracy >= 80) {
      rankTitle = "Flight Commander";
      rankColor = "#A855F7";
      rankIcon = "⭐";
    } else if (accuracy >= 60) {
      rankTitle = "Mission Specialist";
      rankColor = "#10B981";
      rankIcon = "🛰️";
    }

    stage.innerHTML = `
      <div class="results-screen">
        <div class="debrief-hero">
          <div class="rank-badge-icon" style="background: rgba(56, 189, 248, 0.15); border: 2px solid ${rankColor}; font-size: 2.5rem;">
            ${rankIcon}
          </div>
          <h1 class="rank-title">${rankTitle}</h1>
          <p class="rank-subtitle">Mission ${this.activeMission.title} completed with ${accuracy}% accuracy</p>
        </div>

        <div class="debrief-metrics-grid">
          <div class="metric-card">
            <span class="metric-val" style="color: var(--color-cyan);">${this.quizScore}</span>
            <span class="metric-lbl">Total Score</span>
          </div>
          <div class="metric-card">
            <span class="metric-val" style="color: var(--color-emerald);">${accuracy}%</span>
            <span class="metric-lbl">Accuracy</span>
          </div>
          <div class="metric-card">
            <span class="metric-val" style="color: var(--color-orange);">${this.quizMaxStreak}x</span>
            <span class="metric-lbl">Max Streak</span>
          </div>
          <div class="metric-card">
            <span class="metric-val">${totalTime}s</span>
            <span class="metric-lbl">Total Time</span>
          </div>
        </div>

        <div class="review-section">
          <h3 class="review-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Telemetry Log & Answers Review
          </h3>

          <div class="review-list">
            ${this.userAnswers.map((ans, idx) => `
              <div class="review-item ${ans.isCorrect ? 'correct-item' : 'wrong-item'}">
                <div class="review-q-text">${idx + 1}. ${ans.question}</div>
                <div class="review-answers-row">
                  <div><strong>Your Answer:</strong> ${ans.selectedIndex >= 0 ? ans.options[ans.selectedIndex] : 'Timed Out'} (${ans.isCorrect ? '✓ Correct' : '✕ Wrong'})</div>
                  ${!ans.isCorrect ? `<div><strong style="color: var(--color-emerald);">Correct Answer:</strong> ${ans.options[ans.correctIndex]}</div>` : ''}
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">
                  ${ans.explanation}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="debrief-actions">
          <button class="btn-primary" id="btnRestartMission">
            <span>Re-Fly Mission</span>
          </button>

          <button class="icon-btn" id="btnShareMission">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            <span>Share Debrief</span>
          </button>

          <button class="icon-btn" id="btnReturnDirectory">
            <span>Return to Missions</span>
          </button>
        </div>
      </div>
    `;

    // Bind Debrief Actions
    const restartBtn = document.getElementById("btnRestartMission");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        audio.playClick();
        this.startQuiz(this.activeMission.id);
      });
    }

    const returnBtn = document.getElementById("btnReturnDirectory");
    if (returnBtn) {
      returnBtn.addEventListener("click", () => {
        this.exitQuiz();
      });
    }

    const shareBtn = document.getElementById("btnShareMission");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        audio.playClick();
        const shareText = `🚀 AstroMobbin Debrief: Completed "${this.activeMission.title}" with rank [${rankTitle}]! Score: ${this.quizScore} | Accuracy: ${accuracy}% | Max Streak: ${this.quizMaxStreak}x. Test your cosmic intellect!`;
        navigator.clipboard.writeText(shareText).then(() => {
          this.showToast("Mission debrief copied to clipboard!");
        }).catch(() => {
          this.showToast("Debrief copied!");
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     Toast Notice
     -------------------------------------------------------------------------- */
  showToast(msg) {
    let toast = document.getElementById("globalToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "globalToast";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      <span>${msg}</span>
    `;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     Event Bindings & Keyboard Shortcuts
     -------------------------------------------------------------------------- */
  bindDOMEvents() {
    // Search input trigger
    const searchTrigger = document.getElementById("searchTrigger");
    if (searchTrigger) {
      searchTrigger.addEventListener("click", () => this.openCommandPalette());
    }

    // Audio sound toggle
    const audioToggle = document.getElementById("audioToggleBtn");
    if (audioToggle) {
      audioToggle.addEventListener("click", () => {
        const state = audio.toggle();
        audioToggle.classList.toggle("active", state);
        this.showToast(`Sound FX ${state ? 'Enabled' : 'Muted'}`);
      });
    }

    // Bookmarks drawer trigger
    const bookmarksBtn = document.getElementById("bookmarksTriggerBtn");
    if (bookmarksBtn) {
      bookmarksBtn.addEventListener("click", () => this.openBookmarksDrawer());
    }

    const drawerBackdrop = document.getElementById("bookmarksDrawer");
    const drawerClose = document.getElementById("drawerCloseBtn");
    if (drawerClose) {
      drawerClose.addEventListener("click", () => this.closeBookmarksDrawer());
    }
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener("click", (e) => {
        if (e.target === drawerBackdrop) this.closeBookmarksDrawer();
      });
    }

    // Daily Orbit Challenge button
    const dailyBtn = document.getElementById("dailyOrbitBtn");
    if (dailyBtn) {
      dailyBtn.addEventListener("click", () => this.startDailyOrbit());
    }

    // Modal Close
    const modalBackdrop = document.getElementById("previewModal");
    const modalClose = document.getElementById("modalCloseBtn");
    if (modalClose) {
      modalClose.addEventListener("click", () => this.closePreviewModal());
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) this.closePreviewModal();
      });
    }

    // Palette Close & Input
    const paletteBackdrop = document.getElementById("commandPalette");
    const paletteInput = document.getElementById("paletteInput");
    if (paletteBackdrop) {
      paletteBackdrop.addEventListener("click", (e) => {
        if (e.target === paletteBackdrop) this.closeCommandPalette();
      });
    }
    if (paletteInput) {
      paletteInput.addEventListener("input", (e) => {
        this.filterPaletteResults(e.target.value);
      });
    }

    // Filter selects
    const diffSelect = document.getElementById("difficultyFilter");
    if (diffSelect) {
      diffSelect.addEventListener("change", (e) => {
        audio.playClick();
        this.currentDifficulty = e.target.value;
        this.renderMissions();
      });
    }

    const durSelect = document.getElementById("durationFilter");
    if (durSelect) {
      durSelect.addEventListener("change", (e) => {
        audio.playClick();
        this.currentDuration = e.target.value;
        this.renderMissions();
      });
    }

    const sortSelect = document.getElementById("sortFilter");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        audio.playClick();
        this.currentSort = e.target.value;
        this.renderMissions();
      });
    }

    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener("click", () => this.resetFilters());
    }

    // View toggles
    const gridViewBtn = document.getElementById("gridViewBtn");
    const listViewBtn = document.getElementById("listViewBtn");
    if (gridViewBtn && listViewBtn) {
      gridViewBtn.addEventListener("click", () => {
        audio.playClick();
        this.viewMode = "grid";
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
        this.renderMissions();
      });
      listViewBtn.addEventListener("click", () => {
        audio.playClick();
        this.viewMode = "list";
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
        this.renderMissions();
      });
    }

    // Quiz Player HUD Exit
    const exitQuizBtn = document.getElementById("btnExitMission");
    if (exitQuizBtn) {
      exitQuizBtn.addEventListener("click", () => this.exitQuiz());
    }

    // Quiz Lifelines
    const lifelineFifty = document.getElementById("lifelineFifty");
    if (lifelineFifty) {
      lifelineFifty.addEventListener("click", () => this.useFiftyFifty());
    }

    const lifelineHint = document.getElementById("lifelineHint");
    if (lifelineHint) {
      lifelineHint.addEventListener("click", () => this.useHint());
    }

    const lifelineTime = document.getElementById("lifelineTime");
    if (lifelineTime) {
      lifelineTime.addEventListener("click", () => this.useTimeWarp());
    }
  }

  resetFilters() {
    audio.playClick();
    this.currentCategory = "all";
    this.currentDifficulty = "all";
    this.currentDuration = "all";
    this.currentSort = "trending";
    this.searchQuery = "";

    const diffSelect = document.getElementById("difficultyFilter");
    const durSelect = document.getElementById("durationFilter");
    const sortSelect = document.getElementById("sortFilter");
    if (diffSelect) diffSelect.value = "all";
    if (durSelect) durSelect.value = "all";
    if (sortSelect) sortSelect.value = "trending";

    const tabs = document.querySelectorAll(".category-tabs .tab-pill");
    tabs.forEach(t => {
      t.classList.toggle("active", t.dataset.category === "all");
    });

    this.renderMissions();
    this.showToast("Filters reset to default");
  }

  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      // ⌘K or Ctrl+K or '/' to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.openCommandPalette();
        return;
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        this.openCommandPalette();
        return;
      }

      // Escape to close open overlays
      if (e.key === "Escape") {
        this.closeCommandPalette();
        this.closePreviewModal();
        this.closeBookmarksDrawer();
        return;
      }

      // If in Quiz Player mode, handle keys A, B, C, D (or 1, 2, 3, 4)
      const player = document.getElementById("quizPlayerView");
      if (player && player.classList.contains("active")) {
        if (!this.isAnswerSubmitted) {
          const keyMap = {
            'a': 0, '1': 0,
            'b': 1, '2': 1,
            'c': 2, '3': 2,
            'd': 3, '4': 3
          };
          const pressed = e.key.toLowerCase();
          if (pressed in keyMap) {
            e.preventDefault();
            this.handleAnswerSelection(keyMap[pressed]);
          }
        } else {
          // If answer is submitted, pressing Space or Enter continues
          if (e.key === " " || e.key === "Enter") {
            const continueBtn = document.getElementById("btnContinueMission");
            if (continueBtn) {
              e.preventDefault();
              audio.playClick();
              this.advanceNextQuestion();
            }
          }
        }
      }
    });
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.astroApp = new AstroMobbinApp();
  new StarfieldCanvas("starfield");
});
