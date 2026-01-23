import React, { useEffect, useRef } from 'react';
import { useThemeMode } from '../App';

const FractalParticleBackground = () => {
  const canvasRef = useRef(null);
  const { themeMode } = useThemeMode();
  const themeModeRef = useRef(themeMode);

  // Update ref when theme changes
  useEffect(() => {
    themeModeRef.current = themeMode;
  }, [themeMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let logicalWidth = window.innerWidth;
    let logicalHeight = window.innerHeight;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      canvas.width = Math.floor(logicalWidth * dpr);
      canvas.height = Math.floor(logicalHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particlesArray = [];
    const numberOfParticles = 100;

    const getParticleColor = () => {
      const mode = themeModeRef.current;
      if (mode === 'minimal') return 'rgba(122, 155, 118, 0.8)';
      if (mode === 'dark') return 'rgba(187, 134, 252, 0.8)';
      return 'rgba(220, 20, 60, 0.8)';
    };

    const getLineColor = (opacity) => {
      const mode = themeModeRef.current;
      if (mode === 'minimal') return `rgba(122, 155, 118, ${opacity})`;
      if (mode === 'dark') return `rgba(187, 134, 252, ${opacity})`;
      return `rgba(220, 20, 60, ${opacity})`;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        this.size = Math.random() * 4 + 3;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 2) this.size -= 0.05;
        if (this.x < 0 || this.x > logicalWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > logicalHeight) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = getParticleColor();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = getLineColor(1 - distance / 100);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default FractalParticleBackground;