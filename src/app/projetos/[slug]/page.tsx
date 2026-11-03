import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Youtube } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#050505] text-ink pb-20">
      {/* Top Header Navegação */}
      <header className="sticky top-0 z-50 border-b border-paper-border/80 bg-[#070709]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/#trabalho"
            className="cursor-target text-ink-soft hover:text-white flex items-center gap-2 text-xs sm:text-sm transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 text-crimson group-hover:-translate-x-1 transition-transform" />
            Voltar para o trabalho
          </Link>

          <Link
            href="/"
            className="font-sans text-xs sm:text-sm font-semibold tracking-tight text-ink hover:text-crimson-glow transition-colors"
          >
            Renan Xavier
          </Link>
        </div>
      </header>

      {/* Hero do Projeto */}
      <section className="relative overflow-hidden border-b border-paper-border px-5 py-20 md:px-8 md:py-28 bg-dot-pattern">
        <div className="pointer-events-none absolute inset-0 bg-crimson-aurora opacity-60" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs font-semibold text-crimson uppercase tracking-[0.25em]">
              {project.index} · {project.category}
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs sm:text-sm text-ink-soft">
            <span className="border-r border-paper-border pr-6">{project.role}</span>
            <span className="border-r border-paper-border pr-6">{project.year}</span>
            {project.client && (
              <span className="border-r border-paper-border pr-6">Instituição · {project.client}</span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-1.5 text-crimson-glow hover:underline"
              >
                <Github className="h-4 w-4" />
                Ver Repositório
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center gap-1.5 text-red-500 hover:text-red-400 hover:underline"
              >
                <Youtube className="h-4 w-4" />
                Assistir Vídeo
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Conteúdo Principal do Projeto */}
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24 space-y-20">
        {/* Visão Geral */}
        <div>
          <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-4 font-semibold">
            ( Visão Geral )
          </span>
          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-ink/90">
            {project.overview}
          </p>
        </div>

        {/* Demonstração em Vídeo */}
        {project.videoUrl && (
          <div className="border-t border-paper-border pt-14">
            <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-6 font-semibold">
              ( Demonstração & Pitch em Vídeo )
            </span>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-paper-border/80 bg-black shadow-[0_0_30px_rgba(220,38,38,0.15)]">
              <iframe
                src={`https://www.youtube.com/embed/${project.videoUrl.match(/v=([a-zA-Z0-9_-]+)/)?.[1] || ""}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        )}

        {/* Galeria de Validação & Capturas do Sistema */}
        {project.images && project.images.length > 0 && (
          <div className="border-t border-paper-border pt-14">
            <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-6 font-semibold">
              ( Validação Visual & Telas do Sistema )
            </span>
            <div className="grid gap-10">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-paper-border/80 bg-paper-card shadow-2xl transition-all hover:border-crimson/50"
                >
                  <div className="p-4 sm:p-5 border-b border-paper-border/60 bg-[#0a0a0f] flex items-center justify-between">
                    <div>
                      <h4 className="font-sans text-base sm:text-lg font-bold text-ink">
                        {img.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-soft mt-0.5">
                        {img.caption}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-crimson font-medium px-2.5 py-1 rounded-md bg-crimson/10 border border-crimson/20">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="relative bg-black/40 overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-auto object-cover rounded-b-2xl border-t border-paper-border/30"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Destaques Técnicos */}
        <div className="border-t border-paper-border pt-14">
          <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-8 font-semibold">
            ( Destaques de Engenharia & Arquitetura )
          </span>
          <div className="grid gap-6">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-paper-border bg-paper-card p-5 sm:p-6 hover:border-crimson/40 transition-colors"
              >
                <span className="font-mono text-xs font-semibold text-crimson pt-1">
                  0{idx + 1}
                </span>
                <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparação: Desafio vs Resultado */}
        <div className="grid gap-8 md:grid-cols-2 border-t border-paper-border pt-14">
          <div className="rounded-xl border border-paper-border bg-paper-card p-6 sm:p-8">
            <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-3 font-semibold">
              ( Desafio )
            </span>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="rounded-xl border border-crimson/30 bg-crimson/5 p-6 sm:p-8">
            <span className="font-mono text-crimson-glow text-xs uppercase tracking-[0.25em] block mb-3 font-semibold">
              ( Resultado )
            </span>
            <p className="text-base sm:text-lg text-ink leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Tecnologias Utilizadas (Stack Completa) */}
        <div className="border-t border-paper-border pt-14">
          <span className="font-mono text-crimson text-xs uppercase tracking-[0.25em] block mb-6 font-semibold">
            ( Stack & Tecnologias )
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-paper-border bg-paper-card px-4 py-2 font-mono text-xs sm:text-sm text-ink-soft hover:border-crimson hover:text-crimson-glow transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cartão de Próximo Projeto */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 pt-8">
        <Link
          href={`/projetos/${nextProject.slug}`}
          className="cursor-target group block overflow-hidden rounded-2xl border border-crimson/30 bg-gradient-to-r from-paper-card to-crimson/10 p-8 sm:p-12 hover:border-crimson transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-crimson uppercase tracking-[0.25em] block mb-2 font-semibold">
                Próximo Projeto · {nextProject.index}
              </span>
              <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-ink group-hover:text-crimson-glow transition-colors">
                {nextProject.title}
              </h2>
              <p className="text-ink-soft text-sm mt-2 max-w-md">
                {nextProject.category}
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson text-white shadow-[0_0_20px_#dc2626] group-hover:scale-110 transition-transform">
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
