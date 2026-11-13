"use client";

import React from "react";
import { motion } from "framer-motion";
import { marqueeTexts } from "@/data/portfolio";

export function Marquee() {
  return (
    <section className="relative overflow-hidden bg-[#070709] border-y border-crimson/20 py-12 md:py-16 select-none">
      {/* Luz ambiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 via-transparent to-crimson/10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Linha 1: Movimento para a esquerda */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            className="flex shrink-0 items-center gap-6"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink/90 flex items-center gap-6"
              >
                {marqueeTexts[0]}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Linha 2: Movimento para a direita em estilo contorno/outline */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            className="flex shrink-0 items-center gap-6"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-crimson-glow/80 flex items-center gap-6"
                style={{
                  WebkitTextStroke: "1px #dc2626",
                  color: "transparent",
                }}
              >
                {marqueeTexts[1]}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
