# EcoFleet Manager — Full Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma aplicação Full Stack corporativa completa (EcoFleet Manager) com Back-end em Java 21 / Spring Boot 3 e Front-end em Next.js 15 / TypeScript, com testes automatizados, documentação e deploy no GitHub.

**Architecture:** O Back-end expõe uma API RESTful segura com autenticação JWT e regras de negócio para auditoria de consumo e cálculo de carbono (GHG Protocol). O Front-end consome os endpoints através de um dashboard interativo com gráficos, tabela paginada, filtros e exportação CSV.

**Tech Stack:** Java 21, Spring Boot 3.3, Spring Security (JWT), Spring Data JPA, Flyway, H2/PostgreSQL, JUnit 5, Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide Icons, Recharts, Zod.

**Spec:** `docs/superpowers/specs/2026-11-02-ecofleet-fullstack-design.md`

---

## Global Constraints

- **Idioma:** Código e documentação claros em português/inglês idiomático sem jargões de IA.
- **Java:** Versão 21 com Records e Spring Boot 3.3.
- **Front:** Next.js 15 App Router e TypeScript com validação Zod.
- **Sem IA Slop:** Código limpo, sem comentários supérfluos, com decisões técnicas reais de desenvolvedor pleno.

---

## Tasks

- [ ] **Task 1: Estruturar o Back-end Spring Boot (Maven, Dependências e Configuração)**
  - Configurar `pom.xml` com Spring Boot 3.3, Security, JPA, Validation, H2, PostgreSQL, Flyway, JJWT e Lombok/Records.
  - Criar `application.yml` para ambientes de desenvolvimento e teste.
  - Criar migrações Flyway `V1__criar_schema.sql` e `V2__dados_demonstracao.sql`.

- [ ] **Task 2: Modelos de Domínio e Repositórios JPA**
  - Criar entidades: `Usuario`, `Veiculo`, `Abastecimento`, `AlertaDesvio`.
  - Criar repositórios Spring Data JPA com queries de contagem, médias e paginação.

- [ ] **Task 3: Camada de Serviços e Regras de Negócio de Auditoria & ESG**
  - Criar `AuditoriaAbastecimentoService`: cálculo de km/l, validação contra capacidade máxima do tanque, classificação de status (`NORMAL`, `ATENCAO`, `CRITICO`).
  - Criar `CalculoEmissaoService`: conversão de litros de diesel em kg e toneladas de CO₂e usando fator oficial do GHG Protocol (`2.671 kg CO₂e/L`).
  - Criar `DashboardService`: consolidação de KPIs e dados agregados para gráficos.

- [ ] **Task 4: Segurança Stateless JWT e Controladores REST**
  - Implementar `TokenService` (geração e validação de tokens JWT).
  - Implementar `SecurityConfig` com `SecurityFilterChain` e autenticação básica/Bearer.
  - Implementar controllers: `AuthController`, `VeiculoController`, `AbastecimentoController`, `DashboardController`.
  - Implementar `GlobalExceptionHandler` com `ProblemDetail` (RFC 7807).

- [ ] **Task 5: Testes Unitários de Regra de Negócio (JUnit 5 + Mockito)**
  - Escrever testes para validação de excesso de tanque.
  - Escrever testes para cálculo de emissão GHG Protocol.
  - Escrever testes para classificação de anomalias de consumo.

- [ ] **Task 6: Desenvolver o Front-end Next.js 15 (Dashboard Corporativo & Gestão)**
  - Inicializar estrutura Next.js com Tailwind CSS, TypeScript e Lucide Icons.
  - Criar tela de `/dashboard` com KPIs em cards e gráficos de emissões.
  - Criar tela de `/abastecimentos` com tabela, busca por placa, badges de status, modal de lançamento e exportação CSV.
  - Criar tela de `/veiculos` com listagem da frota e métricas.

- [ ] **Task 7: Documentação e Publicação no GitHub**
  - Criar `README.md` corporativo do EcoFleet com arquitetura Mermaid, badges e guia de execução.
  - Inicializar repositório Git em `projetos pessoais para portfolio/ecofleet`.
  - Criar repositório público no GitHub (`Renan-Xavier/ecofleet-telemetria-esg`) e fazer push.

- [ ] **Task 8: Adicionar o EcoFleet ao Portfólio Pessoal (Site Vercel)**
  - Adicionar o projeto EcoFleet em `src/data/portfolio.ts`.
  - Validar build do portfólio (`npm run build`).
  - Commitar e atualizar o site.
