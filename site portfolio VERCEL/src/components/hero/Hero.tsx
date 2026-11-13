"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SamuraiOniIllustration } from "./SamuraiOniIllustration";

const easeCustom = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 pb-12 pt-32 md:px-8 md:pt-40 bg-dot-pattern"
    >
      {/* Aurora Carmesim Suave no Topo */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-crimson-aurora opacity-75" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Coluna Esquerda: Texto e Tipografia Monumental */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-crimson-glow font-medium">
              {profile.role} — {profile.location}
            </p>
          </motion.div>

          <h1 className="font-sans text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-ink">
            {profile.tagline.map((line, idx) => (
              <span key={idx} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: easeCustom,
                    delay: 0.2 + idx * 0.12,
                  }}
                  className="block"
                >
                  {line}
                  {idx === profile.tagline.length - 1 && (
                    <span className="text-crimson">.</span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom, delay: 0.6 }}
            className="text-ink-soft mt-8 max-w-xl text-base sm:text-lg leading-relaxed font-normal"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCustom, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono"
          >
            <span className="border border-crimson/30 bg-crimson/10 text-crimson-glow px-3.5 py-1.5 rounded-full">
              Java 21 · Spring Boot 3
            </span>
            <span className="border border-paper-border bg-paper-card text-ink-soft px-3.5 py-1.5 rounded-full">
              React 19 & Next.js
            </span>
            <span className="border border-paper-border bg-paper-card text-ink-soft px-3.5 py-1.5 rounded-full">
              Oracle SQL & PL/SQL
            </span>
          </motion.div>
        </div>

        {/* Coluna Direita: Busto do Samurai com Máscara Oni */}
        <div className="flex items-center justify-center lg:justify-end">
          <SamuraiOniIllustration className="w-full max-w-[380px] sm:max-w-[450px]" />
        </div>
      </div>

      {/* Rodapé da Hero: Botão de Scroll e Status */}
      <div className="relative z-10 mx-auto mt-12 flex w-full max-w-6xl items-end justify-between border-t border-paper-border/60 pt-6">
        <a
          href="#trabalho"
          className="cursor-target text-ink-soft hover:text-white group flex items-center gap-3 text-xs sm:text-sm transition-colors"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-crimson/30 group-hover:border-crimson group-hover:bg-crimson/10 transition-all">
            <ArrowDown className="h-4 w-4 text-crimson group-hover:translate-y-0.5 transition-transform" />
          </span>
          Rolar para ver o trabalho
        </a>

        {profile.available && (
          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-crimson" />
            </span>
            <span className="text-ink-soft font-mono">Disponível para novos desafios</span>
          </div>
        )}
      </div>
    </section>
  );
}
