# Especificação de Design — EcoFleet Manager (Plataforma Full Stack)

**Data:** 2026-11-02  
**Autor:** Renan Santa Rosa Xavier (FIAP ADS · RM566997)  
**Projeto:** EcoFleet Manager — Telemetria de Combustível, Prevenção de Fraudes e Carbono ESG (Escopo 3)  
**Localização:** `projetos pessoais para portfolio/ecofleet`

---

## 1. Contexto e Dor de Negócio

No setor de transporte rodoviário de cargas no Brasil, o óleo diesel representa entre **40% e 50% de todos os custos operacionais**. As transportadoras enfrentam dois desafios críticos:
1. **Perdas Financeiras e Fraudes Ocultas:** Desvios de combustível, abastecimentos superfaturados (onde a quantidade de litros cobrada excede a capacidade volumétrica do tanque) e veículos desregulados operando com rendimento abaixo do padrão. Esses problemas normalmente só são notados semanas depois pelo fechamento contábil.
2. **Exigência ESG por Grandes Embarcadores (Escopo 3):** Clientes corporativos e indústrias contratantes exigem inventários auditáveis de emissão de gases de efeito estufa para renovar contratos de transporte e conceder bonificações de sustentabilidade.

---

## 2. A Solução: EcoFleet Manager

O **EcoFleet Manager** é uma plataforma corporativa Full Stack que audita cada abastecimento no momento do lançamento, gerando alertas instantâneos de desvio e calculando automaticamente as emissões de carbono em conformidade com o **Programa Brasileiro GHG Protocol**.

### Regras de Negócio e Cálculos:
* **Fator de Emissão Oficial (GHG Protocol Brasil):**
  * Para o Diesel B S-10 (com mistura obrigatória de biodiesel): `2.671 kg CO₂e por litro consumido` (ou `0.002671 tCO₂e/L`).
* **Auditoria de Capacidade Volumétrica:**
  * Cada veículo possui uma capacidade de tanque cadastrada (ex: Toco = 300L, Truck = 600L, Carreta = 1000L).
  * Se `litrosAbastecidos > capacidadeTanque`, o sistema bloqueia ou sinaliza um alerta crítico de inconsistência de nota fiscal / capacidade.
* **Cálculo de Rendimento e Classificação:**
  * `kmRodado = kmAtual - kmAnterior`
  * `consumoMedio = kmRodado / litrosAbastecidos`
  * Se `consumoMedio < metaConsumo * 0.70`, classifica como `CRITICO` (possível desvio ou vazamento).
  * Se `consumoMedio` entre `70%` e `85%` da meta, classifica como `ATENCAO`.
  * Se `consumoMedio >= 85%` da meta, classifica como `NORMAL`.

---

## 3. Arquitetura do Sistema

### 3.1 Back-end (Java 21 + Spring Boot 3.3)
* **Estrutura de Pacotes:**
  * `com.ecofleet.controller`: REST Controllers para autenticação, veículos, abastecimentos e métricas do dashboard.
  * `com.ecofleet.service`: Regras de negócio, auditoria de abastecimento, cálculo de emissão e estatísticas.
  * `com.ecofleet.repository`: Interfaces Spring Data JPA com paginação e queries personalizadas.
  * `com.ecofleet.model`: Entidades JPA (`Usuario`, `Veiculo`, `Abastecimento`, `AlertaDesvio`).
  * `com.ecofleet.dto`: Java Records para requests e responses, validados com Bean Validation (`@Valid`).
  * `com.ecofleet.security`: Configuração stateless do Spring Security 6 com JWT.
  * `com.ecofleet.exception`: Tratamento global de exceções RFC 7807 (`ProblemDetail`).
* **Banco de Dados & Migrações:**
  * Flyway com `V1__criar_schema_ecofleet.sql` e `V2__popular_dados_demonstracao.sql`.
  * H2 em memória para testes automatizados rápidos; compatível com PostgreSQL em produção.

### 3.2 Front-end (Next.js 15 App Router + TypeScript + Tailwind CSS)
* **Páginas & Rotas:**
  * `/login` e `/cadastro`: Formulários de autenticação tipados com Zod.
  * `/dashboard`: Visão executiva com cards de KPIs (Km rodados, Litros, Custo, Emissões tCO₂e) e gráficos Recharts de tendência.
  * `/abastecimentos`: Tabela paginada com busca por placa, filtros de período/status, modal de cadastro com prévia instantânea de km/l e emissão, e exportação CSV.
  * `/veiculos`: Listagem da frota cadastrada com capacidade e metas.
* **Componentes:**
  * Cards de métricas com indicadores visuais.
  * Tabela de dados corporativa com paginação e badges de status.
  * Modal interativo com feedback otimista e toasts.

---

## 4. Testes e Validação
* **Back-end:** Testes unitários com JUnit 5 e Mockito cobrindo:
  1. Cálculo de km/l e detecção de anomalia de rendimento.
  2. Bloqueio quando litros > capacidade do tanque.
  3. Cálculo de emissões de CO₂e no padrão GHG Protocol.
  4. Respostas de DTOs e validações de campos obrigatórios.
* **Front-end:** Build estático/SSR do Next.js sem erros de compilação ou TypeScript.
