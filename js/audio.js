/**
 * AstroMobbin - Web Audio API Sci-Fi Synthesizer
 * Zero external audio assets required. 100% synthesized in-browser.
 */

class CosmicAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initFromStorage();
  }

  initFromStorage() {
    try {
      const stored = localStorage.getItem("astromobbin_audio_enabled");
      if (stored !== null) {
        this.enabled = stored === "true";
      }
    } catch (e) {
      this.enabled = true;
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem("astromobbin_audio_enabled", this.enabled);
    } catch (e) {}
    if (this.enabled) {
      this.ensureContext();
      this.playClick();
    }
    return this.enabled;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.04);

      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Arpeggiated C-major ascending chord with warm bell quality
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteStart = t + idx * 0.06;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0, noteStart);
        gain.gain.linearRampToValueAtTime(0.12, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + 0.36);
      });
    } catch (e) {}
  }

  playWrong() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Dissonant low frequencies
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(130, t);
      osc1.frequency.exponentialRampToValueAtTime(95, t + 0.25);

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(123.47, t); // B2 flat against C
      osc2.frequency.exponentialRampToValueAtTime(90, t + 0.25);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.3);
      osc2.stop(t + 0.3);
    } catch (e) {}
  }

  playLifeline() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Cosmic frequency sweep warp
      osc.type = "triangle";
      osc.frequency.setValueAtTime(250, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.3);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.36);
    } catch (e) {}
  }

  playTick() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, t);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.035);
    } catch (e) {}
  }

  playVictory() {
    if (!this.enabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      // Fanfare sequence: C4 -> E4 -> G4 -> C5 -> G4 -> C5
      const notes = [
        { f: 523.25, time: 0.00, dur: 0.15 },
        { f: 659.25, time: 0.15, dur: 0.15 },
        { f: 783.99, time: 0.30, dur: 0.18 },
        { f: 1046.5, time: 0.48, dur: 0.50 }
      ];

      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = t + n.time;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.f, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.15, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, start + n.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + n.dur + 0.05);
      });
    } catch (e) {}
  }
}

const audio = new CosmicAudioEngine();
