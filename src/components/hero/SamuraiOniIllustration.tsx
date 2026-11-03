"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Sparkles } from "lucide-react";

export function SamuraiOniIllustration({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverdriven, setIsOverdriven] = useState(false);
  const [neonMode, setNeonMode] = useState<"intense" | "flicker">("intense");

  // Mouse tilt 3D interativo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Disparo de sobrecarga elétrica de alta voltagem ao clicar
  const triggerOverdrive = () => {
    setIsOverdriven(true);
    setTimeout(() => {
      setIsOverdriven(false);
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={triggerOverdrive}
      className={`relative flex flex-col items-center justify-center select-none cursor-pointer group ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* --- 1. AURA AMBIENTE DE NEON CARMESIM --- */}
      <motion.div
        animate={{
          scale: isOverdriven ? [1, 1.45, 1.1] : [1, 1.08, 1],
          opacity: isOverdriven ? [0.6, 1, 0.7] : [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: isOverdriven ? 0.6 : 3.5,
          repeat: isOverdriven ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-radial from-crimson/50 via-crimson-dark/25 to-transparent blur-3xl pointer-events-none -z-20"
      />

      {/* Círculo do Enso / Tubo Neon Circular ao redor da Máscara */}
      <motion.div
        animate={{
          rotate: [0, 360],
          boxShadow: isOverdriven
            ? "0 0 50px rgba(255,0,56,0.9), inset 0 0 30px rgba(255,255,255,0.8)"
            : "0 0 25px rgba(220,38,38,0.35)",
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          boxShadow: { duration: 0.3 },
        }}
        className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-crimson/40 bg-gradient-to-b from-crimson/15 via-transparent to-transparent pointer-events-none -z-10"
      />

      {/* Corte sutil de katana no fundo girando */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[440px] h-[220px] pointer-events-none -rotate-12 opacity-30 -z-10"
      >
        <Image
          src="/images/katana-slash.png"
          alt="Katana Glow Arc"
          fill
          className="object-contain filter drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]"
        />
      </motion.div>

      {/* --- 2. O BUSTO / MÁSCARA NEON EM 3D PERSPECTIVE --- */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ scale: 0.9, opacity: 0, y: 25 }}
        animate={{
          scale: isOverdriven ? [1, 1.08, 1] : 1,
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] h-[360px] sm:h-[440px] flex items-center justify-center"
      >
        {/* Camada Principal da Máscara Neon Oni (Extraída com Tubos Neon de Alta Definição) */}
        <div
          className={`relative w-full h-full transition-all duration-300 ${
            neonMode === "flicker"
              ? "animate-neon-flicker"
              : "animate-neon-pulse"
          } ${
            isOverdriven
              ? "brightness-150 contrast-125 filter drop-shadow-[0_0_50px_#ffffff] drop-shadow-[0_0_90px_#ff0038]"
              : ""
          }`}
        >
          <Image
            src="/images/samurai-neon-oni.png"
            alt="Máscara Neon Samurai Oni em Alta Definição"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_12px_#ff0038] drop-shadow-[0_0_28px_rgba(220,38,38,0.8)]"
          />

          {/* Brilho Intenso de Plasma Neon nos Olhos e Narinas */}
          <motion.div
            animate={{
              opacity: isOverdriven ? [0.4, 1, 0.4] : [0.75, 1, 0.75],
              scale: isOverdriven ? [1, 1.4, 1] : [1, 1.15, 1],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[32%] left-[40%] w-4 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_24px_#ff0038] pointer-events-none blur-[1px]"
          />
          <motion.div
            animate={{
              opacity: isOverdriven ? [0.4, 1, 0.4] : [0.75, 1, 0.75],
              scale: isOverdriven ? [1, 1.4, 1] : [1, 1.15, 1],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[32%] right-[40%] w-4 h-2.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_24px_#ff0038] pointer-events-none blur-[1px]"
          />

          {/* Flash Elétrico de Sobrecarga quando clica */}
          {isOverdriven && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 0.85, 0], scale: [0.95, 1.25, 1.4] }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 rounded-full border-2 border-white bg-crimson/20 blur-md pointer-events-none"
            />
          )}
        </div>
      </motion.div>

      {/* --- 3. BARRA DE STATUS CYBER-NEON INTERATIVA --- */}
      <div className="relative z-20 mt-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-paper-card/90 border border-crimson/30 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-ink-soft backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.2)]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
          </span>
          <span className="text-white font-semibold tracking-wider">
            NEON ONI
          </span>
          <span className="text-ink-muted">· 10.000V GAS</span>
        </div>

        <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-paper-border pt-1 sm:pt-0 sm:pl-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setNeonMode(neonMode === "intense" ? "flicker" : "intense");
            }}
            className="px-2 py-0.5 rounded-full text-[10px] bg-paper-border/60 hover:bg-crimson/20 text-ink-soft hover:text-white transition-colors"
          >
            {neonMode === "intense" ? "Pulso Contínuo" : "Flicker Elétrico"}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              triggerOverdrive();
            }}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] bg-crimson hover:bg-crimson-dark text-white font-semibold transition-all shadow-[0_0_8px_#dc2626]"
          >
            <Zap className="h-3 w-3 fill-current" />
            Descarga
          </button>
        </div>
      </div>
      <span className="text-[10px] font-mono text-ink-muted mt-1.5 opacity-60">
        ( Mova o mouse para inclinar em 3D · Clique para descarga elétrica )
      </span>
    </div>
  );
}
