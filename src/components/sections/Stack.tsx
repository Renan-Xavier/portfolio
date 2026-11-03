"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letters = "FERRAMENTAS DO OFÍCIO".split("");

const techStack = [
  { name: "Java 21", tag: "Backend Core", color: "#f89820" },
  { name: "Spring Boot 3", tag: "Enterprise API", color: "#6db33f" },
  { name: "React 19", tag: "UI & State", color: "#61dafb" },
  { name: "Next.js", tag: "Full-Stack Web", color: "#ffffff" },
  { name: "Oracle SQL", tag: "Database & PL/SQL", color: "#f80000" },
  { name: "Docker", tag: "DevOps & Containers", color: "#2496ed" },
  { name: "Kotlin", tag: "Android Nativo", color: "#7f52ff" },
  { name: "TypeScript", tag: "Tipagem Estrita", color: "#3178c6" },
];

export function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const centerIndex = Math.floor(letters.length / 2);

  return (
    <section
      ref={containerRef}
      id="stack"
      className="relative flex h-[190vh] flex-col items-center justify-center overflow-hidden bg-[#050505] border-t border-paper-border select-none"
    >
      {/* 
        Container Sticky: Trava a seção em tela cheia (100vh) enquanto o scroll progride.
        O vídeo cobre todo o fundo com object-cover e loop automático.
      */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-10 sm:gap-12 px-4 overflow-hidden">
        
        {/* --- VÍDEO DE FUNDO EXTRAÍDO DO PINTEREST (COBRINDO TODO O FUNDO) --- */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50 contrast-125 saturate-125"
          >
            <source src="/videos/tools-bg.mp4" type="video/mp4" />
          </video>

          {/* Overlays escuros para legibilidade da tipografia e transição suave nas bordas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/50 to-[#050505] z-10" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505] z-10" />
          <div className="absolute inset-0 bg-dot-pattern opacity-30 z-10" />
        </div>

        {/* --- CONTEÚDO EM PRIMEIRO PLANO COM CONTRASTE APERFEIÇOADO --- */}
        <div className="relative z-20 flex flex-col items-center gap-4 text-center">
          <span className="font-mono text-crimson text-xs uppercase tracking-[0.3em] font-semibold bg-[#050505]/80 px-4 py-1.5 rounded-full border border-crimson/30 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            ( Arsenal Tecnológico · Domínio )
          </span>

          {/* Título Monumental 3D "FERRAMENTAS DO OFÍCIO" */}
          <div
            className="w-full whitespace-nowrap text-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]"
            style={{ perspective: "700px" }}
          >
            {letters.map((char, index) => {
              const diff = index - centerIndex;
              return (
                <LetterSpan
                  key={index}
                  char={char}
                  diff={diff}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </div>
        </div>

        {/* Grade de Tecnologias Convergentes em Glassmorphism */}
        <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full px-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-paper-border/80 bg-paper-card/75 p-4 text-center hover:border-crimson hover:bg-paper-card/95 hover:shadow-[0_0_20px_rgba(220,38,38,0.35)] transition-all group backdrop-blur-md"
            >
              <div
                className="w-2.5 h-2.5 rounded-full mx-auto mb-2 transition-transform group-hover:scale-125 shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: tech.color, color: tech.color }}
              />
              <div className="font-sans font-bold text-sm sm:text-base text-ink group-hover:text-white">
                {tech.name}
              </div>
              <div className="font-mono text-[11px] text-ink-soft uppercase tracking-wider mt-1">
                {tech.tag}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function LetterSpan({
  char,
  diff,
  scrollYProgress,
}: {
  char: string;
  diff: number;
  scrollYProgress: any;
}) {
  const x = useTransform(scrollYProgress, [0, 0.5], [diff * 35, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [diff * 25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.25, 1]);

  return (
    <motion.span
      style={{ x, rotateX, opacity }}
      className={`inline-block ${char === " " ? "w-3 sm:w-6" : ""}`}
    >
      {char}
    </motion.span>
  );
}
