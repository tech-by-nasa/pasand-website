import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const GOLD = { r: 229, g: 169, b: 60 };
    const SILVER = { r: 200, g: 185, b: 155 };

    class Particle {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = Math.random() * W;
        this.y = initial ? Math.random() * H : H + 10;
        this.size = Math.random() * 1.8 + 0.3;
        this.speedY = -(Math.random() * 0.5 + 0.15);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
        const useGold = Math.random() > 0.35;
        const c = useGold ? GOLD : SILVER;
        this.r = c.r; this.g = c.g; this.b = c.b;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX + Math.sin(this.life * 0.02 + this.pulse) * 0.3;
        this.y += this.speedY;
        this.life++;
        if (this.life > this.maxLife || this.y < -10) this.reset();
      }
      draw() {
        const ratio = this.life / this.maxLife;
        const alpha = ratio < 0.1 ? ratio / 0.1 : ratio > 0.8 ? (1 - ratio) / 0.2 : 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${alpha * 0.5})`;
        ctx.fill();
      }
    }

    // Mandala-like orbiting particles
    class OrbitParticle {
      constructor() {
        this.cx = W * 0.75;
        this.cy = H * 0.45;
        this.radius = 80 + Math.random() * 220;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1);
        this.size = Math.random() * 1.2 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.05;
        const useGold = Math.random() > 0.4;
        const c = useGold ? GOLD : SILVER;
        this.r = c.r; this.g = c.g; this.b = c.b;
      }
      update() {
        this.angle += this.speed;
        this.cx = W * 0.75;
        this.cy = H * 0.45;
      }
      draw() {
        const x = this.cx + Math.cos(this.angle) * this.radius;
        const y = this.cy + Math.sin(this.angle) * this.radius * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 160 }, () => new Particle());
    const orbiters = Array.from({ length: 120 }, () => new OrbitParticle());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      orbiters.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
