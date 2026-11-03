"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070709] pt-28 md:pt-40 pb-16 border-t border-paper-border"
    >
      {/* Aurora Carmesim Inferior */}
      <div className="pointer-events-none absolute inset-0 bg-crimson-aurora opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-8 font-semibold">
          ( Contato Direto )
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-tight"
        >
          Vamos construir <br />
          <span className="text-crimson">algo que</span> dure.
        </motion.h2>

        {/* Botão Magnético de E-mail */}
        <div className="mt-12 block max-w-full">
          <Magnetic padding={100} strength={3}>
            <a
              href={`mailto:${profile.email}`}
              className="cursor-target group inline-flex items-center gap-4 border border-crimson/40 bg-crimson/10 hover:bg-crimson/20 px-6 sm:px-10 py-5 sm:py-7 rounded-2xl transition-all shadow-[0_0_25px_rgba(220,38,38,0.2)]"
            >
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-crimson text-white transition-transform duration-500 group-hover:rotate-45 shadow-[0_0_15px_#dc2626]">
                <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <span className="font-sans text-xl sm:text-3xl md:text-4xl font-bold text-ink group-hover:text-crimson-glow transition-colors break-all">
                {profile.email}
              </span>
            </a>
          </Magnetic>
        </div>

        {/* Links Rápidos e Informações */}
        <div className="mt-24 flex flex-col gap-8 border-t border-paper-border pt-10 sm:flex-row sm:items-center sm:justify-between text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-ink-soft hover:text-white flex items-center gap-2 transition-colors"
            >
              <Github className="h-4 w-4 text-crimson" />
              GitHub
            </a>

            <a
              href={`https://wa.me/5521985692631`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-ink-soft hover:text-white flex items-center gap-2 transition-colors"
            >
              <Phone className="h-4 w-4 text-crimson" />
              WhatsApp / {profile.phone}
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="cursor-target text-ink-soft hover:text-white flex items-center gap-2 transition-colors"
            >
              <Mail className="h-4 w-4 text-crimson" />
              {profile.email}
            </a>
          </div>

          <p className="font-mono text-ink-muted text-xs">
            {profile.location} · 2026
          </p>
        </div>
      </div>

      {/* Marca D'Água Tipográfica Gigante ao Fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 mt-8 select-none text-center font-sans text-[22vw] font-black leading-[0.75] tracking-tighter text-white/[0.02]"
      >
        RENAN
      </div>
    </section>
  );
}
