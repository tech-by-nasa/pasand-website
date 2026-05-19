import React, { useEffect, useRef, useState } from 'react';

export default function BiryaniHeroScene({ biryaniImage }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const W = () => canvas.width;
    const H = () => canvas.height;

    // Smoke particles
    class SmokeParticle {
      constructor() { this.reset(); }
      reset() {
        this.x = W() * 0.5 + (Math.random() - 0.5) * W() * 0.25;
        this.y = H() * 0.6;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = -(Math.random() * 1.2 + 0.5);
        this.radius = Math.random() * 40 + 20;
        this.alpha = Math.random() * 0.12 + 0.04;
        this.life = 0;
        this.maxLife = Math.random() * 180 + 100;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
      }
      update(mx, my) {
        // Wind from mouse
        this.vx += (mx - 0.5) * 0.015;
        this.x += this.vx;
        this.y += this.vy;
        this.radius += 0.5;
        this.alpha *= 0.992;
        this.rotation += this.rotSpeed;
        this.life++;
        if (this.life > this.maxLife || this.alpha < 0.005) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
        grad.addColorStop(0, `rgba(240,220,180,${this.alpha})`);
        grad.addColorStop(0.5, `rgba(200,180,140,${this.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(150,130,100,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Gold sparkles
    class Sparkle {
      constructor() { this.reset(); }
      reset() {
        this.x = W() * 0.5 + (Math.random() - 0.5) * W() * 0.5;
        this.y = H() * 0.5 + (Math.random() - 0.5) * H() * 0.4;
        this.size = Math.random() * 2.5 + 0.5;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.8 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 120 + 60;
        this.phase = Math.random() * Math.PI * 2;
      }
      update() {
        this.life++;
        const t = this.life / this.maxLife;
        this.alpha = t < 0.3 ? (t / 0.3) * this.maxAlpha : t > 0.7 ? ((1 - t) / 0.3) * this.maxAlpha : this.maxAlpha;
        this.y -= 0.3;
        if (this.life > this.maxLife) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#E5A93C';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#E5A93C';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const smokes = Array.from({ length: 40 }, () => new SmokeParticle());
    const sparkles = Array.from({ length: 60 }, () => new Sparkle());

    // Load biryani image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = biryaniImage;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, W(), H());

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Foggy base gradient
      const fogGrad = ctx.createRadialGradient(W() * 0.5, H() * 0.72, 0, W() * 0.5, H() * 0.72, W() * 0.5);
      fogGrad.addColorStop(0, 'rgba(229,169,60,0.06)');
      fogGrad.addColorStop(0.4, 'rgba(229,169,60,0.02)');
      fogGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, W(), H());

      // Draw biryani image with tilt
      if (img.complete && img.naturalWidth > 0) {
        const tiltX = (mx - 0.5) * 14;
        const tiltY = (my - 0.5) * 8;
        const imgW = Math.min(W() * 0.72, 480);
        const imgH = imgW;
        const ix = W() * 0.5 - imgW / 2 + tiltX;
        const iy = H() * 0.5 - imgH / 2 - 30 + tiltY;

        // Plate glow
        const glowGrad = ctx.createRadialGradient(W() * 0.5, H() * 0.65, 0, W() * 0.5, H() * 0.65, imgW * 0.5);
        glowGrad.addColorStop(0, 'rgba(229,169,60,0.18)');
        glowGrad.addColorStop(0.5, 'rgba(229,169,60,0.06)');
        glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, W(), H());

        // Circular clip for bowl
        ctx.save();
        ctx.beginPath();
        const cr = imgW * 0.46;
        ctx.arc(W() * 0.5 + tiltX * 0.5, H() * 0.5 - 10 + tiltY * 0.5, cr, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, ix, iy, imgW, imgH);
        ctx.restore();

        // Gold ring border
        ctx.save();
        ctx.beginPath();
        ctx.arc(W() * 0.5 + tiltX * 0.5, H() * 0.5 - 10 + tiltY * 0.5, cr, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(229,169,60,0.6)';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(229,169,60,0.8)';
        ctx.stroke();
        ctx.restore();

        // Second outer ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(W() * 0.5 + tiltX * 0.3, H() * 0.5 - 10 + tiltY * 0.3, cr + 18, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(229,169,60,0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Smoke above the bowl
      smokes.forEach(s => { s.update(mx, my); s.draw(); });

      // Sparkles
      sparkles.forEach(s => { s.update(); s.draw(); });

      // Bottom fog gradient
      const bottomFog = ctx.createLinearGradient(0, H() * 0.7, 0, H());
      bottomFog.addColorStop(0, 'rgba(13,13,13,0)');
      bottomFog.addColorStop(1, 'rgba(13,13,13,0.85)');
      ctx.fillStyle = bottomFog;
      ctx.fillRect(0, 0, W(), H());
    };

    img.onload = () => animate();
    if (img.complete) animate();

    const onMouse = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    const onTouch = (e) => {
      if (e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX / window.innerWidth;
        mouseRef.current.y = e.touches[0].clientY / window.innerHeight;
      }
    };
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch);
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', onResize);
    };
  }, [biryaniImage]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
