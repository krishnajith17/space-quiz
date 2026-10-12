/**
 * AstroMobbin - Ambient Canvas Starfield & Nebula
 * High-performance, lightweight star canvas with twinkling, depth, and shooting stars.
 */

class StarfieldCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.shootingStars = [];
    this.starCount = 180;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.animId = null;
    this.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.stars = [];
    const colors = ["#FFFFFF", "#E0F2FE", "#BAE6FD", "#FEF08A", "#DDD6FE"];

    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.6 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: (Math.random() * 0.15 + 0.02) * (this.prefersReducedMotion ? 0 : 1)
      });
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
    });

    // Check reduced motion toggle dynamically
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", (e) => {
      this.prefersReducedMotion = e.matches;
      this.stars.forEach(s => {
        s.speedY = (Math.random() * 0.15 + 0.02) * (this.prefersReducedMotion ? 0 : 1);
      });
    });
  }

  spawnShootingStar() {
    if (this.prefersReducedMotion) return;
    if (this.shootingStars.length > 2) return;
    if (Math.random() > 0.015) return;

    this.shootingStars.push({
      x: Math.random() * this.width * 0.8,
      y: Math.random() * (this.height * 0.4),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 10 + 12,
      angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
      alpha: 1,
      life: 0,
      maxLife: 35
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw and update stars
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      star.twinklePhase += star.twinkleSpeed;
      const alpha = Math.max(0.1, star.baseAlpha + Math.sin(star.twinklePhase) * 0.3);

      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = alpha;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Drift gently downwards
      if (!this.prefersReducedMotion) {
        star.y += star.speedY;
        if (star.y > this.height) {
          star.y = 0;
          star.x = Math.random() * this.width;
        }
      }
    }

    // Handle Shooting Stars
    this.spawnShootingStar();
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.life++;
      s.alpha = 1 - (s.life / s.maxLife);

      if (s.life >= s.maxLife) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, s.alpha);
      const gradient = this.ctx.createLinearGradient(
        s.x, s.y,
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      gradient.addColorStop(0, "#FFFFFF");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.6)");
      gradient.addColorStop(1, "transparent");

      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(
        s.x - Math.cos(s.angle) * s.length,
        s.y - Math.sin(s.angle) * s.length
      );
      this.ctx.stroke();
      this.ctx.restore();
    }

    this.ctx.globalAlpha = 1;
    this.animId = requestAnimationFrame(() => this.animate());
  }
}
