"use client";

import { useEffect, useRef } from "react";

/** Grid pitch and dot size, in CSS px. */
const CELL = 4;
const DOT = 2;
/** Trail brush radius near the cursor, and how long a point takes to dissolve. */
const RADIUS = 32;
const LIFE_MS = 1000;
/** Pointer moves are filled in every SPACING px, so fast strokes stay continuous. */
const SPACING = 6;

type Point = { x: number; y: number; t: number };

/** Elements marked with this attribute (e.g. case cards, which have their own cursor) cut the trail. */
const EXCLUDE = "[data-no-trail]";

/**
 * A dithered dot trail that follows the mouse across the page and dissolves pixel by pixel.
 * Every grid cell has a fixed random threshold: a cell is lit while the trail's strength there
 * is above it, so as the trail fades the dots drop out one by one instead of fading uniformly.
 */
export function DotTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Mouse only (no hover on touch screens), and off for people who asked for less motion.
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let strength = new Float32Array(0);
    let threshold = new Float32Array(0);
    let points: Point[] = [];
    let last: { x: number; y: number } | null = null;
    let frame = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas!.getBoundingClientRect();
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      strength = new Float32Array(cols * rows);
      threshold = new Float32Array(cols * rows);
      // Biased low so the core of the trail is nearly solid.
      for (let i = 0; i < threshold.length; i++) threshold[i] = Math.random() * 0.9 + 0.05;
    }

    function draw(now: number) {
      points = points.filter((p) => now - p.t < LIFE_MS);
      strength.fill(0);

      for (const p of points) {
        const age = (now - p.t) / LIFE_MS;
        const radius = RADIUS * (1 - age * 0.6);
        const fade = 1 - age;
        const x0 = Math.max(0, Math.floor((p.x - radius) / CELL));
        const x1 = Math.min(cols - 1, Math.ceil((p.x + radius) / CELL));
        const y0 = Math.max(0, Math.floor((p.y - radius) / CELL));
        const y1 = Math.min(rows - 1, Math.ceil((p.y + radius) / CELL));
        for (let cy = y0; cy <= y1; cy++) {
          for (let cx = x0; cx <= x1; cx++) {
            const d = Math.hypot(cx * CELL + CELL / 2 - p.x, cy * CELL + CELL / 2 - p.y);
            if (d >= radius) continue;
            const v = (1 - d / radius) * fade;
            const i = cy * cols + cx;
            if (v > strength[i]) strength[i] = v;
          }
        }
      }

      const { width, height } = canvas!.getBoundingClientRect();
      ctx!.clearRect(0, 0, width, height);
      // The canvas' CSS color (set in the className below) is the dot color.
      ctx!.fillStyle = getComputedStyle(canvas!).color;
      const offset = (CELL - DOT) / 2;
      for (let i = 0; i < strength.length; i++) {
        if (strength[i] > threshold[i]) {
          ctx!.fillRect((i % cols) * CELL + offset, Math.floor(i / cols) * CELL + offset, DOT, DOT);
        }
      }

      frame = points.length ? requestAnimationFrame(draw) : 0;
    }

    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse" || reducedMotion.matches) return;
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const excluded = e.target instanceof Element && e.target.closest(EXCLUDE);
      if (excluded || x < 0 || y < 0 || x > rect.width || y > rect.height) {
        last = null;
        return;
      }
      const now = performance.now();
      if (last) {
        const steps = Math.floor(Math.hypot(x - last.x, y - last.y) / SPACING);
        for (let s = 1; s <= steps; s++) {
          const k = s / (steps + 1);
          points.push({ x: last.x + (x - last.x) * k, y: last.y + (y - last.y) * k, t: now });
        }
      }
      points.push({ x, y, t: now });
      last = { x, y };
      if (!frame) frame = requestAnimationFrame(draw);
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Fixed to the viewport, under all page content (the body background is painted below it).
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 size-full text-neutral-800"
    />
  );
}
