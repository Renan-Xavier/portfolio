"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const easeCustom = [0.16, 1, 0.3, 1];

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="trabalho" className="py-24 md:py-36 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Cabeçalho da Seção */}
        <div className="mb-14 flex items-end justify-between border-b border-paper-border pb-8">
          <div>
            <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-2 font-medium">
              ( Portfólio Selecionado )
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink">
              Trabalho <span className="text-crimson italic">selecionado</span>
            </h2>
          </div>
          <span className="font-mono text-ink-soft hidden text-sm uppercase tracking-[0.2em] sm:block">
            ({projects.length} Projetos)
          </span>
        </div>

        {/* Lista Accordion dos 7 Projetos */}
        <div className="divide-y divide-paper-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: easeCustom, delay: index * 0.05 }}
            >
              <Link
                href={`/projetos/${project.slug}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-target group block py-7 md:py-10 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  {/* Número e Título */}
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-xs sm:text-sm text-crimson font-medium">
                      {project.index}
                    </span>
                    <div>
                      <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2.5 group-hover:text-crimson-glow">
                        {project.title}
                      </h3>
                      <span className="text-ink-soft mt-1.5 block text-xs sm:hidden">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadados e Seta */}
                  <div className="flex shrink-0 items-baseline gap-4 md:gap-6">
                    <span className="text-ink-soft hidden text-sm md:block">
                      {project.role}
                    </span>
                    <span className="font-mono text-ink-muted hidden text-sm sm:block">
                      {project.year}
                    </span>
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-paper-border group-hover:border-crimson group-hover:bg-crimson/20 transition-all">
                      <ArrowUpRight className="h-4 w-4 text-ink group-hover:text-crimson-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Bloco Expansível no Hover */}
                <motion.div
                  initial={false}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: easeCustom }}
                  className="hidden overflow-hidden md:block"
                >
                  <div className="grid gap-6 pt-6 md:grid-cols-[1fr_auto] md:items-end">
                    <p className="text-ink-soft max-w-xl text-base leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="border border-crimson/20 bg-crimson/5 text-ink-soft text-xs rounded-full px-3 py-1 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
