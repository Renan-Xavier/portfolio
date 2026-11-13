"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile, stats, skills } from "@/data/portfolio";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#070709] py-28 md:py-40 border-t border-paper-border">
      {/* Luz ambiente de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-crimson-aurora opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-8 font-semibold">
          ( Sobre Mim )
        </span>

        {/* Statement em destaque */}
        <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl font-bold leading-snug tracking-tight text-ink max-w-4xl">
          {profile.aboutStatement}
        </h2>

        {/* Estatísticas Numéricas */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-paper-border pt-12 sm:grid-cols-3 md:mt-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-4"
            >
              <div className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink flex items-baseline">
                <span>{stat.value}</span>
                <span className="text-crimson font-light">{stat.suffix}</span>
              </div>
              <div className="font-mono text-ink-soft text-xs sm:text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grade de 4 Quadrantes de Especialidades */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 border-t border-paper-border pt-12">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="rounded-xl border border-paper-border bg-paper-card/70 p-6 sm:p-8 hover:border-crimson/30 transition-colors"
            >
              <h3 className="font-sans text-lg font-bold tracking-tight text-ink flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-crimson" />
                {skill.title}
              </h3>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
