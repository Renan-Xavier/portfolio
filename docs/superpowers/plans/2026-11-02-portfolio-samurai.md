# Portfólio Samurai Dark (Renan Xavier) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir e colocar no ar o portfólio profissional completo em Next.js para Renan Santa Rosa Xavier, com estética Samurai Dark (Preto & Vermelho), Preloader cinematográfico com corte de Katana, busto de Samurai com máscara de Oni, 7 projetos reais mapeados da FIAP e navegação dinâmica.

**Architecture:** Aplicação Next.js 15 (App Router) com TypeScript e Tailwind CSS. Animações de entrada e física via Framer Motion, animações de scroll avançadas com GSAP (ScrollTrigger) e rolagem suave via Lenis. Dados centralizados em `src/data/portfolio.ts` e páginas de detalhes dinâmicas em `app/projetos/[slug]/page.tsx`.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Lucide-React.

**Spec:** `docs/superpowers/specs/2026-11-02-portfolio-samurai-design.md`

## Global Constraints

- Paleta visual obrigatória: Fundo Preto profundo (`#050505` / `#0a0a0a`), Vermelho Carmesim (`#dc2626` / `#ef4444`), Texto em Branco/Zinco (`#f4f4f5` / `#a1a1aa`).
- Preloader inicial com corte de katana e duas metades de tela caindo com rotação/gravidade revelando o Samurai com máscara de Oni.
- 7 projetos reais detalhados com informações da pasta `ADS FIAP`.
- Tipografia moderna e responsividade total (Mobile, Tablet, Desktop).

## Review Focus

- Efeito de corte do preloader não bloquear a rolagem nem esconder a Hero após finalizado.
- Rota `/projetos/[slug]` renderizar corretamente para todos os 7 slugs sem 404.
- Animações GSAP e Lenis não quebrarem durante hidratação SSR (uso correto de `'use client'`).
- Botão de contato com link `mailto` funcional e links do GitHub apontando para repositórios válidos.
- Performance fluida de scroll sem lag em monitores 60Hz/120Hz.

---

### Task 1: Scaffolding e Configuração de Dependências

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.ts`

- [ ] **Step 1: Criar o projeto Next.js com as dependências necessárias**
  - Instalar: `next`, `react`, `react-dom`, `framer-motion`, `gsap`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`
  - Dev dependencies: `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `tailwindcss`, `postcss`, `autoprefixer`
- [ ] **Step 2: Configurar Tailwind com a paleta preta e vermelha**
  - Cores: `paper: '#070707'`, `paper-card: '#111113'`, `paper-border: '#27272a'`, `ink: '#f4f4f5'`, `ink-soft: '#a1a1aa'`, `crimson: '#dc2626'`, `crimson-glow: '#ef4444'`
- [ ] **Step 3: Verificar build básico inicial**
  - Executar: `npx next build` ou `npm run build`
- [ ] **Step 4: Commit**
  - `git add . && git commit -m "chore: scaffold next.js project with tailwind and animation dependencies"`

---

### Task 2: Base de Dados e Componentes Visuais do Samurai

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/components/hero/SamuraiOniIllustration.tsx`
- Create: `src/lib/utils.ts`

- [ ] **Step 1: Criar `src/data/portfolio.ts`**
  - Estrutura completa de `profile`, `projects` (os 7 projetos da FIAP), `skills`, `stats` e `socials`.
- [ ] **Step 2: Criar ilustração vetorial SVG responsiva do Samurai com Máscara Oni**
  - Desenho vetorial estilizado em tons de preto, cinza grafite e vermelho carmesim nos olhos/detalhes da máscara Oni.
- [ ] **Step 3: Criar função helper `cn` em `src/lib/utils.ts`**
- [ ] **Step 4: Commit**
  - `git add src/data/portfolio.ts src/components/hero/SamuraiOniIllustration.tsx src/lib/utils.ts && git commit -m "feat: add portfolio data and samurai oni vector illustration"`

---

### Task 3: AppChrome, Cursor Personalizado e Preloader Katana

**Files:**
- Create: `src/components/chrome/SamuraiLoader.tsx`
- Create: `src/components/chrome/CustomCursor.tsx`
- Create: `src/components/chrome/AppChrome.tsx`
- Create: `src/components/chrome/SmoothScroll.tsx`

- [ ] **Step 1: Implementar `SamuraiLoader.tsx`**
  - Contador `0% → 100%`, feixe de corte diagonal com faíscas e divisão em duas metades com `clip-path` caindo para os lados.
- [ ] **Step 2: Implementar `CustomCursor.tsx`**
  - Ponto de mira com glow vermelho e animação de faíscas ao clicar.
- [ ] **Step 3: Implementar `SmoothScroll.tsx` e `AppChrome.tsx`**
  - Integração do Lenis com GSAP ScrollTrigger ticker.
- [ ] **Step 4: Testar montagem e desmontagem do preloader**
- [ ] **Step 5: Commit**
  - `git add src/components/chrome/ && git commit -m "feat: implement samurai katana preloader and app chrome"`

---

### Task 4: Layout Principal, Navbar e Hero Section

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/hero/Hero.tsx`

- [ ] **Step 1: Configurar estilos globais em `globals.css`**
  - Reset, estilização de scrollbar, classes do cursor e utilitários.
- [ ] **Step 2: Criar `Navbar.tsx`**
  - Barra de navegação fixa com blur escuro, logotipo Renan Xavier e links para seções.
- [ ] **Step 3: Criar `Hero.tsx`**
  - Grid impactante integrando `SamuraiOniIllustration`, headline com animação de reveal e badges.
- [ ] **Step 4: Commit**
  - `git add src/app/ src/components/layout/ src/components/hero/ && git commit -m "feat: implement layout, navbar and samurai hero section"`

---

### Task 5: Seções de Transição — Marquee e Stroke de Katana

**Files:**
- Create: `src/components/sections/Marquee.tsx`
- Create: `src/components/sections/Stroke.tsx`

- [ ] **Step 1: Implementar `Marquee.tsx`**
  - Faixas duplas animadas pelo scroll com palavras-chave técnicas.
- [ ] **Step 2: Implementar `Stroke.tsx`**
  - Seção com sticky scroll onde o traço vermelho de katana se desenha com o scroll progressivo.
- [ ] **Step 3: Commit**
  - `git add src/components/sections/Marquee.tsx src/components/sections/Stroke.tsx && git commit -m "feat: add marquee and katana stroke philosophy sections"`

---

### Task 6: Seção de Trabalho (Accordion com 7 Projetos) e Páginas Dedicadas

**Files:**
- Create: `src/components/sections/Work.tsx`
- Create: `src/app/projetos/[slug]/page.tsx`

- [ ] **Step 1: Criar `Work.tsx`**
  - Lista elegante com numeração `01` a `07`, hover expansível revelando resumo e badges da stack.
- [ ] **Step 2: Criar rota dinâmica `src/app/projetos/[slug]/page.tsx`**
  - Renderização detalhada de Visão Geral, Destaques, Desafio, Resultado, Stack e Próximo Projeto.
- [ ] **Step 3: Commit**
  - `git add src/components/sections/Work.tsx src/app/projetos/ && git commit -m "feat: implement work section and project detail dynamic pages"`

---

### Task 7: Seções Sobre Mim, Stack 3D e Contato com Botão Magnético

**Files:**
- Create: `src/components/sections/About.tsx`
- Create: `src/components/sections/Stack.tsx`
- Create: `src/components/sections/Contact.tsx`
- Create: `src/components/ui/Magnetic.tsx`
- Create: `src/app/page.tsx`

- [ ] **Step 1: Implementar `About.tsx` com contadores estatísticos e grade de 4 quadrantes**
- [ ] **Step 2: Implementar `Stack.tsx` com rotação 3D no scroll**
- [ ] **Step 3: Implementar `Magnetic.tsx` e `Contact.tsx` com botão magnético e dados de contato**
- [ ] **Step 4: Integrar todas as seções em `src/app/page.tsx`**
- [ ] **Step 5: Commit**
  - `git add src/components/sections/ src/components/ui/ src/app/page.tsx && git commit -m "feat: implement about, 3d stack, contact and complete home page"`

---

### Task 8: Verificação, Build e Inicialização do Servidor de Desenvolvimento

**Files:**
- Teste e verificação end-to-end.

- [ ] **Step 1: Executar `npm run build` e validar ausência de erros de tipagem/SSR**
- [ ] **Step 2: Iniciar servidor local com `npm run dev`**
- [ ] **Step 3: Abrir no navegador e fornecer o link para o usuário visualizar a página**
