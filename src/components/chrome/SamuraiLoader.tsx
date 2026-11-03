"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/portfolio";

export function SamuraiLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isSliced, setIsSliced] = useState(false);

  useEffect(() => {
    // Verifica se já viu o loader na sessão
    if (typeof window !== "undefined" && sessionStorage.getItem("samurai_intro_seen")) {
      setLoading(false);
      return;
    }

    // Bloqueia scroll enquanto carrega
    document.documentElement.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Ao atingir 100%, dispara o golpe de katana da terceira imagem
        setTimeout(() => {
          setIsSliced(true);
        }, 150);

        // Depois do corte e da queda das metades, encerra o preloader
        setTimeout(() => {
          setLoading(false);
          document.documentElement.style.overflow = "";
          sessionStorage.setItem("samurai_intro_seen", "true");
        }, 1350);
      } else {
        setProgress(current);
      }
    }, 35);

    return () => {
      clearInterval(interval);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[999] pointer-events-none select-none overflow-hidden">
          {/* Efeito do Feixe de Lâmina (Katana Slash da 3ª Imagem) no momento do corte */}
          {isSliced && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -25 }}
              animate={{ scale: [0.7, 1.4, 1.6], opacity: [0, 1, 0.9, 0], rotate: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-[120vw] h-[60vh] max-w-[1200px]">
                <Image
                  src="/images/katana-slash.png"
                  alt="Corte Katana Preloader"
                  fill
                  className="object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,1)]"
                />
              </div>
            </motion.div>
          )}

          {/* METADE SUPERIOR / ESQUERDA DA FOLHA CORTADA */}
          <motion.div
            initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
            animate={
              isSliced
                ? {
                    y: -220,
                    x: -90,
                    rotate: -14,
                    opacity: 0,
                    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.08 },
                  }
                : {}
            }
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 38%, 0 62%)",
            }}
            className="absolute inset-0 z-40 bg-[#050505] flex flex-col justify-between p-6 sm:p-12 border-b border-crimson/40 shadow-2xl"
          >
            {/* Header da metade superior */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-ping" />
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft">
                  {profile.name}
                </span>
              </div>
              <span className="font-mono text-xs text-crimson uppercase tracking-widest hidden sm:inline-block">
                Samurai Oni Edition
              </span>
            </div>

            {/* Texto central superior */}
            <div>
              <span className="text-crimson font-mono text-xs uppercase tracking-[0.3em] block mb-2 font-bold">
                Cortes Precisos · Código Refinado
              </span>
              <h2 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink font-sans">
                {profile.role}
              </h2>
            </div>

            {/* Rodapé esquerdo */}
            <div className="font-mono text-xs text-ink-soft/60 uppercase tracking-widest">
              Preparando ambiente
            </div>
          </motion.div>

          {/* METADE INFERIOR / DIREITA DA FOLHA CORTADA */}
          <motion.div
            initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
            animate={
              isSliced
                ? {
                    y: 250,
                    x: 100,
                    rotate: 15,
                    opacity: 0,
                    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.08 },
                  }
                : {}
            }
            style={{
              clipPath: "polygon(0 62%, 100% 38%, 100% 100%, 0 100%)",
            }}
            className="absolute inset-0 z-40 bg-[#08080a] flex flex-col justify-between p-6 sm:p-12 border-t border-crimson/50 shadow-2xl"
          >
            <div />

            {/* Centro da metade inferior */}
            <div className="flex items-center justify-between">
              <div className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                {isSliced ? "Lâmina Desembainhada" : "Carregando experiência"}
              </div>

              {/* Contador monumental numérico */}
              <div className="flex items-baseline gap-1 font-sans">
                <span className="text-7xl sm:text-9xl font-black tracking-tighter text-ink tabular-nums">
                  {progress}
                </span>
                <span className="text-2xl sm:text-4xl font-light text-crimson">%</span>
              </div>
            </div>

            {/* Rodapé inferior */}
            <div className="flex items-center justify-between border-t border-paper-border pt-4">
              <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest">
                FIAP ADS · RM566997
              </span>
              <span className="font-mono text-[11px] text-ink-muted uppercase tracking-widest">
                Rio de Janeiro, RJ
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
