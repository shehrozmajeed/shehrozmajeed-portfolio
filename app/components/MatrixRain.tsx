"use client";

import { useEffect, useRef } from "react";

// Characters used in rain: binary + hex + special chars
const CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*<>/\\|{}[]01";

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
  brightness: number[];
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const FONT_SIZE = 14;
    let cols: number;
    let columns: Column[] = [];

    const randomChar = () =>
      CHARS[Math.floor(Math.random() * CHARS.length)];

    const initColumns = () => {
      const w = canvas.width;
      cols = Math.floor(w / FONT_SIZE);
      columns = [];
      for (let i = 0; i < cols; i++) {
        const len = 8 + Math.floor(Math.random() * 20);
        columns.push({
          x: i * FONT_SIZE,
          y: Math.random() * -canvas.height,
          speed: 0.5 + Math.random() * 1.5,
          length: len,
          chars: Array.from({ length: len }, randomChar),
          brightness: Array.from({ length: len }, (_, j) =>
            1 - j / len
          ),
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;

    const draw = () => {
      frame++;
      // Fade trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (const col of columns) {
        for (let j = 0; j < col.length; j++) {
          const alpha = col.brightness[j];
          const isHead = j === 0;

          if (isHead) {
            // Bright white head char
            ctx.fillStyle = `rgba(220, 255, 220, ${alpha})`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#00ff41";
          } else {
            const greenVal = Math.floor(80 + alpha * 175);
            ctx.fillStyle = `rgba(0, ${greenVal}, 20, ${alpha * 0.9})`;
            ctx.shadowBlur = 4;
            ctx.shadowColor = "transparent";
          }

          // Randomly mutate chars
          if (frame % Math.floor(10 + Math.random() * 30) === 0) {
            col.chars[j] = randomChar();
          }

          const cy = col.y + j * FONT_SIZE;
          if (cy > 0 && cy < canvas.height) {
            ctx.fillText(col.chars[j], col.x, cy);
          }
        }

        col.y += col.speed;

        // Reset column when it scrolls past bottom
        if (col.y - col.length * FONT_SIZE > canvas.height) {
          col.y = -FONT_SIZE * col.length;
          col.speed = 0.5 + Math.random() * 1.5;
          const newLen = 8 + Math.floor(Math.random() * 20);
          col.length = newLen;
          col.chars = Array.from({ length: newLen }, randomChar);
          col.brightness = Array.from({ length: newLen }, (_, j) =>
            1 - j / newLen
          );
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ imageRendering: "pixelated" }}
      />
      {/* Radial vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
