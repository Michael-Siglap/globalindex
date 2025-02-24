"use client";

import type React from "react";
import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Sparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas));
    }

    let animationFrameId: number;
    const mouse = { x: 0, y: 0 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.size = Math.min(8, particle.size + 0.1);
        } else {
          particle.size = Math.max(1, particle.size - 0.1);
        }

        drawSparkle(ctx, particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createParticle(canvas: HTMLCanvasElement): Particle {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: getRandomColor(),
    };
  }

  function getRandomColor(): string {
    const colors = [
      "rgba(59, 130, 246, 0.8)", // Primary (blue)
      "rgba(244, 63, 94, 0.8)", // Accent (pink)
      "rgba(16, 185, 129, 0.8)", // Success (green)
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
};

function drawSparkle(ctx: CanvasRenderingContext2D, particle: Particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(particle.x - particle.size * 2, particle.y);
  ctx.lineTo(particle.x + particle.size * 2, particle.y);
  ctx.moveTo(particle.x, particle.y - particle.size * 2);
  ctx.lineTo(particle.x, particle.y + particle.size * 2);
  ctx.strokeStyle = particle.color;
  ctx.stroke();
}

export default Sparkles;
