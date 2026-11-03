export interface Project {
  slug: string;
  index: string;
  title: string;
  client?: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  overview: string;
  stack: string[];
  highlights: string[];
  challenge: string;
  outcome: string;
  githubUrl?: string;
  videoUrl?: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  roleLong: string;
  location: string;
  available: boolean;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tagline: string[];
  intro: string;
  aboutStatement: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  items: string;
}

export const profile: Profile = {
  name: "Renan Santa Rosa Xavier",
  shortName: "Renan Xavier",
  role: "Desenvolvedor Full Stack",
  roleLong: "Full Stack · Back-end Java & Spring · Arquitetura & Dados",
  location: "Belford Roxo, Rio de Janeiro - RJ",
  available: true,
  email: "rsrx14@gmail.com",
  phone: "(21) 98569-2631",
  github: "https://github.com/Renan-Xavier",
  linkedin: "https://linkedin.com/in/renan-xavier",
  tagline: [
    "Construo sistemas",
    "full stack",
    "do banco ao pixel"
  ],
  intro: "Estudante de Análise e Desenvolvimento de Sistemas na FIAP (RM566997). Experiência prática na criação de APIs resilientes com Spring Boot, aplicações web reativas, ferramentas desktop nativas e automações inteligentes em banco de dados.",
  aboutStatement: "Desenvolvo produtos e sistemas full stack com foco em robustez técnica, arquitetura limpa e clareza: do modelo relacional e triggers no Oracle ao código de interface, passando por autenticação segura, testes e orquestração de microsserviços."
};

export const stats: Stat[] = [
  { value: 8, suffix: "", label: "projetos autorais & acadêmicos" },
  { value: 16, suffix: "+", label: "tecnologias & frameworks" },
  { value: 4, suffix: "", label: "áreas de especialização" }
];

export const skills: SkillCategory[] = [
  {
    title: "Back-end & Dados",
    items: "Java 21, Spring Boot 3, APIs RESTful, Oracle SQL, PL/SQL, Flyway, PostgreSQL, Prisma, Spring Security, Hibernate, JDBC."
  },
  {
    title: "Front-end & Mobile",
    items: "React 19/18, Next.js 15, TypeScript, JavaScript, Tailwind CSS, Kotlin 2.0, Jetpack Compose, Material 3, Vite, UI/UX Design."
  },
  {
    title: "Desktop & Automação",
    items: "Electron 35, C# Win32 Native Helper, Python 3, Playwright, BeautifulSoup, FFmpeg, Bash, Automação IoT."
  },
  {
    title: "DevOps & Ferramentas",
    items: "Git, GitHub, Docker, Docker Compose, Postman, Oracle Data Modeler, Android Studio, VS Code, Linux."
  }
];

export const projects: Project[] = [
  {
    slug: "ecofleet-telemetria-esg",
    index: "01",
    title: "EcoFleet: Telemetria & Carbono ESG",
    client: "Plataforma SaaS Corporativa",
    category: "SaaS Full Stack · Auditoria de Frotas & Carbono",
    year: "2026",
    role: "Full Stack · Spring Boot 3 · Next.js 15",
    summary: "Plataforma corporativa full stack para telemetria de frotas pesadas, detecção de desvios e fraudes de diesel em tempo real e cálculo de emissões de Escopo 3 pelo GHG Protocol Brasil.",
    overview: "Aplicação corporativa ponta a ponta desenvolvida para resolver uma dor crítica de transportadoras e operadores logísticos: o desvio de combustível e a exigência de governança de carbono por grandes embarcadores. O sistema audita fisicamente cada abastecimento cruzando litragem com a capacidade volumétrica do tanque (Toco 300L, Truck 600L, Carreta 1050L), calcula o rendimento real (km/l), gera alertas automáticos quando o consumo cai abaixo de 70% da meta operacional e converte o volume consumido em emissões de CO₂e oficiais do GHG Protocol Brasil (2,671 kg CO₂e/L).",
    stack: ["Java 21", "Spring Boot 3", "Next.js 15", "React 19", "PostgreSQL", "Flyway", "Spring Security", "JWT", "TypeScript", "Tailwind CSS", "Recharts", "Docker"],
    highlights: [
      "Back-end em Spring Boot 3 com Spring Security 6, JWT stateless e tratamento global de erros RFC 7807 (ProblemDetail).",
      "Motor de auditoria física com validação de capacidade volumétrica de tanque e detecção automática de anomalias operacionais.",
      "Cálculo oficial de pegada de carbono móvel alinhado aos fatores de emissão do Programa Brasileiro GHG Protocol (2,671 kg CO₂e/L).",
      "Front-end em Next.js 15 (App Router) com paginação no servidor, ordenação dinâmica, exportação de relatórios em CSV e gráficos analíticos interativos via Recharts.",
      "Suporte a Live Demo com telemetria simulada resiliente e containerização completa via Docker Compose."
    ],
    challenge: "Garantir a integridade física dos registros de abastecimento, tratando desde inconsistências cadastrais de motoristas e frotas até o cálculo fidedigno de emissões e taxas de desvio em tempo real.",
    outcome: "Plataforma full stack de alto impacto operacional, com suíte de testes unitários no JUnit 5 (100% de cobertura das regras críticas), arquitetura limpa em camadas e interface fluida e responsiva.",
    githubUrl: "https://github.com/Renan-Xavier/ecofleet-telemetria-esg"
  },
  {
    slug: "esg-spring-api",
    index: "02",
    title: "ESG Spring API",
    client: "FIAP ESG Track",
    category: "Controle de Cadeia de Suprimentos & Carbono",
    year: "2026",
    role: "Back-end · Arquitetura · Docker",
    summary: "API RESTful em Java 21 & Spring Boot 3 para rastreamento de emissões de carbono de Escopo 3 e auditoria ESG.",
    overview: "Solução corporativa robusta desenvolvida para monitorar e auditar metas de sustentabilidade na cadeia de suprimentos. Permite cadastrar fornecedores, coletar relatórios de emissões de carbono e calcular automaticamente o diagnóstico de conformidade com padrões ESG.",
    stack: ["Java 21", "Spring Boot 3", "Oracle SQL", "Flyway", "Docker", "Docker Compose", "Spring Security", "Bean Validation"],
    highlights: [
      "Arquitetura em camadas desacopladas (controller, service, repository, DTO, model, exception e security).",
      "Versionamento automático de banco de dados com migrações Flyway (V1 criação e V2 seed de dados).",
      "Segurança com Spring Security e autenticação HTTP Basic protegendo endpoints críticos.",
      "Validação robusta de payloads e tratamento global de exceções RFC 7807 (ProblemDetail).",
      "Containerização completa com Dockerfile multi-stage e Docker Compose."
    ],
    challenge: "Garantir o cálculo fidedigno e auditável de metas de carbono de fornecedores com regras de validação estritas e isolamento em containers.",
    outcome: "Uma API resiliente, totalmente testada via Maven e integrada a painéis interativos de simulação em tempo real.",
    githubUrl: "https://github.com/Renan-Xavier/ESG-Spring-API"
  },
  {
    slug: "drawer-windows-organizer",
    index: "03",
    title: "Drawer: Windows Desktop",
    client: "Projeto Autoral",
    category: "Organizador de Atalhos Estilo Discord",
    year: "2026",
    role: "Desktop · Sistemas · C# Win32",
    summary: "Organizador de área de trabalho moderno para Windows inspirado em gavetas de servidores do Discord.",
    overview: "Aplicativo desktop que transforma a desordem de ícones soltos na Área de Trabalho em gavetas azuis arredondadas inteligentes. Possui autoajuste geométrico de grade (1x1 a 4x2), detecção de bordas da tela e integração nativa profunda com a shell do Windows.",
    stack: ["Electron 35", "JavaScript", "Node.js", "C# Win32 Native", "CSS3 Moderno", "NSIS"],
    highlights: [
      "Integração nativa com Windows em C# (Win32Helper) mantendo o app ancorado ao nível da área de trabalho (mesmo com Win + D).",
      "Extração de ícones de alta resolução de binários (.exe), atalhos (.lnk) e jogos da Steam (.url).",
      "Comportamento inteligente de abertura em hover e clique com autoajuste de orientação (direita, baixo, esquerda).",
      "Interação suave com física de animação cubic-bezier e suporte a drag & drop bidirecional."
    ],
    challenge: "Integrar o processo Electron com as APIs Win32 não gerenciadas para ancoragem em camada inferior e extração precisa de ícones.",
    outcome: "Uma ferramenta de produtividade fluida e empacotada em instalador nativo (.exe NSIS) para Windows.",
    githubUrl: "https://github.com/Renan-Xavier/Drawer-Windows-Organizer"
  },
  {
    slug: "bestsign-android",
    index: "04",
    title: "BestSign: Assinador PDF",
    client: "Mobile Security",
    category: "Assinatura Eletrônica & Biometria Nativa",
    year: "2026",
    role: "Android · Kotlin · Jetpack Compose",
    summary: "Aplicativo nativo Android para posicionamento e assinatura eletrônica de contratos PDF com biometria.",
    overview: "Aplicativo nativo voltado a eliminar a burocracia e a insegurança na assinatura de documentos PDF. Oferece visualização fiel do contrato, posicionamento proporcional de campos para múltiplos signatários, desenho manual em Canvas e autenticação biométrica do aparelho.",
    stack: ["Kotlin 2.0", "Jetpack Compose", "Material 3", "Android API 24+", "SQLite", "PDFBox-Android", "BiometricPrompt"],
    highlights: [
      "Autenticação biométrica nativa via BiometricPrompt gerando carimbo cursivo autenticado.",
      "Quadro de desenho manual em Canvas com controle de espessura de traço e suavização.",
      "Manipulação de PDF com PDFBox-Android aplicando assinaturas diretamente nas coordenadas exatas.",
      "Banco de dados SQLite com arquitetura limpa (Repository Pattern e DAOs dedicados).",
      "Trilha de auditoria completa com registro de data, hora e signatários envolvidos."
    ],
    challenge: "Proporcionar uma experiência acessível e descomplicada para públicos com baixa alfabetização digital sem abrir mão de validade técnica.",
    outcome: "Fluxo intuitivo de 4 passos com suporte a múltiplos papéis (Contratante, Contratado e Testemunha).",
    githubUrl: "https://github.com/Renan-Xavier/BestSign",
    videoUrl: "https://www.youtube.com/watch?v=xK8ZsPvU6fY"
  },
  {
    slug: "trivus-bank",
    index: "05",
    title: "Trivus Bank",
    client: "Fintech Educativa FIAP",
    category: "Plataforma Bancária Acessível & Inclusiva",
    year: "2025",
    role: "Full-stack · Java · React",
    summary: "Ecossistema bancário digital focado em inclusão financeira e usabilidade para idosos.",
    overview: "Fintech inspirada em 'Três Virtudes': Segurança, Simplicidade e Transparência. Com tipografia ampliada em 50%, alto contraste e fluxos simplificados, o projeto integra landing page educativa, domínio Java orientado a objetos, persistência em Oracle JDBC e aplicação full stack com backend Spring Boot e front-end React.",
    stack: ["Java 17", "Spring Boot", "React", "Oracle JDBC", "Bootstrap 5.3", "Node.js", "SQL"],
    highlights: [
      "Landing page de acessibilidade avançada com Dark Mode e contrastes específicos para legibilidade.",
      "Modelagem orientada a objetos com herança e polimorfismo para contas, cartões e transações Pix.",
      "Camada de dados robusta com persistência em Oracle Database via driver JDBC oficial (ojdbc8).",
      "Painel administrativo e simulação de transações financeiras em tempo real."
    ],
    challenge: "Harmonizar conformidade bancária rigorosa com uma interface desprovida de termos técnicos confusos para a terceira idade.",
    outcome: "Ecossistema completo de 4 módulos cobrindo da landing page ao backend transacional integrado.",
    githubUrl: "https://github.com/Renan-Xavier/Projeto-Trivus-Bank"
  },
  {
    slug: "careinho-jornada-do-cuidado",
    index: "06",
    title: "CAREinho: Jornada do Cuidado",
    client: "Challenge FIAP",
    category: "Saúde Digital & Redução de No-Show",
    year: "2025",
    role: "Front-end · React · UX Gamificada",
    summary: "Plataforma digital para combate ao absenteísmo em consultas e tratamentos médicos.",
    overview: "Desenvolvido para o Challenge FIAP, o CAREinho inova ao tratar o problema do no-show médico através do reforço positivo e gamificação. Em vez de penalidades, a plataforma guia o paciente por uma jornada de cuidado com acompanhamento contínuo, lembretes empáticos e recompensas.",
    stack: ["React 18", "Vite", "Tailwind CSS", "Google OAuth", "Oracle Data Modeler", "Figma"],
    highlights: [
      "Interface acolhedora desenvolvida em React 18 e estilizada com Tailwind CSS.",
      "Autenticação social simplificada com Google OAuth para acesso rápido de pacientes.",
      "Modelagem lógica relacional completa (MER) no Oracle SQL Developer Data Modeler.",
      "Trilha interativa com etapas de pré-consulta, orientações e confirmação de presença."
    ],
    challenge: "Transformar um processo tradicionalmente burocrático de agendamento hospitalar em uma experiência leve e estimulante.",
    outcome: "Protótipo funcional de alta fidelidade e arquitetura relacional preparada para escala institucional.",
    githubUrl: "https://github.com/Renan-Xavier/Jornada-do-Cuidado-Challenge"
  },
  {
    slug: "automacao-esg-plsql",
    index: "07",
    title: "Automação ESG & IoT",
    client: "Eficiência Energética Corporativa",
    category: "Triggers & Banco de Dados Oracle",
    year: "2026",
    role: "Database · PL/SQL · Python",
    summary: "Automações inteligentes em Oracle PL/SQL para monitoramento de consumo energético predial.",
    overview: "Solução que transfere regras de negócio críticas diretamente para a camada de banco de dados por meio de Triggers inteligentes. Processa fluxos de medições enviadas por sensores IoT, calcula o acúmulo de kWh, atualiza status de equipamentos e gera alertas automáticos de desperdício.",
    stack: ["Oracle Database", "PL/SQL", "Triggers", "Python", "fpdf2", "Data Modeler"],
    highlights: [
      "Trigger consolidada TRG_AUTOMACAO_ESG_COMPLETA executando 4 rotinas automáticas por inserção.",
      "Detecção instantânea de desvios de consumo com abertura e fechamento automático de chamados.",
      "Acúmulo consolidado em tempo real sem a necessidade de queries de agregação custosas.",
      "Script em Python gerador de documentação técnica e relatórios executivos em PDF."
    ],
    challenge: "Processar leituras de telemetria IoT em alta frequência mantendo integridade transacional sem gargalos de concorrência.",
    outcome: "Redução drástica do overhead de aplicação, transferindo a inteligência analítica para o próprio motor Oracle.",
    githubUrl: "https://github.com/Renan-Xavier/Automacao-ESG-PLSQL"
  },
  {
    slug: "skillhub-fiap",
    index: "08",
    title: "SkillHub: Global Solution",
    client: "Global Solution FIAP",
    category: "Capacitação & Mapeamento de Talentos",
    year: "2025",
    role: "Modelagem Relacional · UI/UX",
    summary: "Plataforma de mapeamento de competências e conexão entre talentos e empresas parceiras.",
    overview: "Projeto premiado na Global Solution FIAP dedicado a mapear gaps de conhecimento profissional e orientar trilhas de aprendizagem personalizadas. Acompanha modelagem de dados completa e interfaces navegáveis de alta fidelidade.",
    stack: ["Oracle Data Modeler", "SQL", "Figma", "UI/UX Prototyping", "Design System"],
    highlights: [
      "Modelagem Lógica e Física relacional detalhada com mais de 10 entidades mapeadas.",
      "Definição de regras de integridade referencial, domínios e dicionário de dados corporativo.",
      "Protótipos navegáveis cobrindo trilhas de aprendizado, testes práticos e painéis de empresas parceiras.",
      "Apresentação executiva e estudo de viabilidade mercadológica."
    ],
    challenge: "Estruturar um modelo de dados flexível o suficiente para suportar múltiplos tipos de avaliações, trilhas adaptativas e métricas de RH.",
    outcome: "Projeto validado pela banca acadêmica da FIAP com nota máxima em arquitetura de dados.",
    githubUrl: "https://github.com/Renan-Xavier/Projeto-SkillHub",
    videoUrl: "https://www.youtube.com/watch?v=YsNf0N--3XQ"
  }
];

export const marqueeTexts = [
  "JAVA · SPRING BOOT · REACT · ORACLE SQL · DOCKER · TYPESCRIPT · KOTLIN · NEXT.JS ·",
  "ARQUITETURA · SEGURANÇA · DESEMPENHO · PRODUTO · AUTOMAÇÃO · BANCO AO PIXEL ·"
];
