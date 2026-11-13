# Portfólio Renan Xavier — Edição Samurai Oni

Portfólio de alta performance desenvolvido para **Renan Santa Rosa Xavier** (FIAP ADS · RM566997), com foco em desenvolvimento Full Stack (Java 21, Spring Boot 3, React 19, Next.js, Oracle SQL, Docker, Kotlin).

Inspirado na estética japonesa Samurai Oni sombria com paleta preta obsidiana (`#050505`) e carmesim neon (`#dc2626`).

---

## ⚡ Funcionalidades e Efeitos

1. **Preloader Katana Slash (`SamuraiLoader.tsx`)**:
   - Corte de lâmina na horizontal que fatia a tela preta e separa as metades revelando o site.
2. **Máscara Samurai Oni Neon 3D (`SamuraiOniIllustration.tsx`)**:
   - Rastreamento de cursor do mouse em 3D com amortecimento de mola (`useSpring`, damping 20, stiffness 220).
   - Efeito de gás neon 10.000V pulsante e faíscas estocásticas.
   - Gatilho de sobrecarga elétrica com arcos de relâmpago ao clicar.
3. **Cortes de Katana no Scroll (`Stroke.tsx`)**:
   - Cabeçalho fixado no topo com a citação:
     > *"Cortes que seguem o scroll do mouse, entrega de qualidade como aço de uma katana."*
   - 5 cortes incandescentes descendo pela tela escura em sincronia com a rolagem do usuário (de `28vh` até `96vh`).
4. **Ferramentas do Ofício (`Stack.tsx`)**:
   - Plano de fundo de vídeo dinâmico em loop contínuo (`public/videos/tools-bg.mp4`) com overlay gradiente escuro.
   - Cards técnicos flutuantes das 8 principais tecnologias.
5. **7 Projetos Reais FIAP & Autorais (`portfolio.ts` & `/projetos/[slug]`)**:
   - ESG Spring API (Java 21, Spring Boot 3, Oracle SQL, Flyway, Docker)
   - Drawer: Windows Desktop (Electron 35, Node.js, C# Win32 Native)
   - BestSign: Assinador PDF (Kotlin 2.0, Jetpack Compose, Material 3, SQLite)
   - Trivus Bank (Java 17, Spring Boot, React, Oracle JDBC)
   - CAREinho: Jornada do Cuidado (React 18, Vite, Tailwind CSS, Google OAuth)
   - Automação ESG & IoT (Oracle PL/SQL, Triggers, Python, fpdf2)
   - SkillHub: Global Solution (Oracle Data Modeler, SQL 3FN, Figma)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- **Node.js 18+** ou superior
- **npm** ou **yarn** / **pnpm**

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

Abra no navegador em: `http://localhost:3000`

### Build de Produção

```bash
# Compilar versão otimizada
npm run build

# Iniciar servidor de produção
npm run start
```
