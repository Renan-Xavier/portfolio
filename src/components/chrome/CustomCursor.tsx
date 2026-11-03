"use client";

import React, { useEffect, useRef, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return;

    cursor.style.display = "block";
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isTarget = target?.closest("a, button, input, [data-cursor-grow], .cursor-target");
      if (isTarget) {
        cursor.dataset.grow = "1";
      } else {
        cursor.dataset.grow = "0";
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Cria faíscas ao clicar
      const sparkColors = ["#ffffff", "#ef4444", "#dc2626", "#f87171"];
      const newSparks: Spark[] = Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 + (Math.random() - 0.5);
        const speed = Math.random() * 45 + 25;
        return {
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        };
      });

      setSparks((prev) => [...prev.slice(-16), ...newSparks]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Ponto / Alvo do Cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 -ml-2 -mt-2 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out data-[grow='1']:scale-[3.2] hidden"
      >
        <div className="w-full h-full rounded-full bg-crimson/80 backdrop-blur-sm border border-crimson-glow shadow-[0_0_12px_#dc2626]" />
      </div>

      {/* Partículas de Faíscas de Clique */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full transition-all duration-500 ease-out animate-ping"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            backgroundColor: spark.color,
            transform: `translate(${spark.vx}px, ${spark.vy}px) scale(0)`,
            boxShadow: `0 0 6px ${spark.color}`,
          }}
        />
      ))}
    </>
  );
}
