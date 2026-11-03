"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Stroke() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // =========================================================================
  // OS CORTES DESCENDO PELA PÁGINA (Abaixo do cabeçalho no topo)
  // O texto fica fixado no topo (top ~15-20%) e os cortes viajam de 28vh até 95vh!
  // =========================================================================

  // 1. CORTE 1: Logo abaixo do cabeçalho, descendo (28vh -> 44vh) [0.03 -> 0.28]
  const slash1Y = useTransform(scrollYProgress, [0.03, 0.28], ["28vh", "44vh"]);
  const slash1X = useTransform(scrollYProgress, [0.03, 0.28], ["180px", "-160px"]);
  const slash1Rotate = useTransform(scrollYProgress, [0.03, 0.28], [-25, -5]);
  const slash1Scale = useTransform(scrollYProgress, [0.03, 0.15, 0.28], [0.8, 1.3, 0.85]);
  const slash1Opacity = useTransform(scrollYProgress, [0.02, 0.08, 0.24, 0.30], [0, 1, 1, 0]);

  // 2. CORTE 2: Golpe Médio-Superior Descendente (40vh -> 58vh) [0.22 -> 0.52]
  const slash2Y = useTransform(scrollYProgress, [0.22, 0.50], ["38vh", "58vh"]);
  const slash2X = useTransform(scrollYProgress, [0.22, 0.50], ["-200px", "160px"]);
  const slash2Rotate = useTransform(scrollYProgress, [0.22, 0.50], [25, 55]);
  const slash2Scale = useTransform(scrollYProgress, [0.22, 0.36, 0.50], [0.8, 1.35, 0.9]);
  const slash2Opacity = useTransform(scrollYProgress, [0.20, 0.28, 0.46, 0.52], [0, 1, 1, 0]);

  // 3. CORTE 3: O GRANDE CORTE CIRCULAR (A 3ª Imagem) (50vh -> 72vh) [0.42 -> 0.76]
  const slash3Y = useTransform(scrollYProgress, [0.42, 0.74], ["48vh", "72vh"]);
  const slash3Rotate = useTransform(scrollYProgress, [0.42, 0.74], [-35, 35]);
  const slash3Scale = useTransform(scrollYProgress, [0.42, 0.58, 0.74], [0.95, 1.6, 1.1]);
  const slash3Opacity = useTransform(scrollYProgress, [0.40, 0.48, 0.68, 0.76], [0, 1, 1, 0]);

  // 4. CORTE 4: Golpe Duplo Cruzado em X Descendo (62vh -> 84vh) [0.65 -> 0.90]
  const slash4Y = useTransform(scrollYProgress, [0.65, 0.88], ["60vh", "84vh"]);
  const slash4Scale = useTransform(scrollYProgress, [0.65, 0.76, 0.88], [0.8, 1.45, 0.95]);
  const slash4Opacity = useTransform(scrollYProgress, [0.63, 0.70, 0.84, 0.90], [0, 1, 1, 0]);

  // 5. CORTE 5: Golpe Final Descendente (75vh -> 96vh) [0.78 -> 1.0]
  const slash5Y = useTransform(scrollYProgress, [0.78, 0.98], ["74vh", "96vh"]);
  const slash5Scale = useTransform(scrollYProgress, [0.78, 0.88, 0.98], [0.85, 1.5, 1.2]);
  const slash5Opacity = useTransform(scrollYProgress, [0.76, 0.84, 0.95, 1.0], [0, 1, 1, 0.2]);

  // =========================================================================
  // FEIXE VERTICAL INCANDESCENTE QUE CORTA DE CIMA A BAIXO
  // =========================================================================
  const verticalBeamHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);
  const verticalSparkTop = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);
  const beamGlow = useTransform(scrollYProgress, [0.05, 0.5, 0.95], [0.3, 0.9, 0.4]);

  // Fissura horizontal logo abaixo do cabeçalho que se abre conforme o scroll
  const seamWidth = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  // Aura carmesim dinâmica que desce acompanhando a lâmina
  const auraY = useTransform(scrollYProgress, [0, 1], ["30vh", "85vh"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#050505] select-none"
    >
      {/* 
        Container Sticky: Trava a tela (100vh) enquanto o usuário desce pelos 320vh de scroll.
        O TEXTO FICA NO TOPO e os CORTES DESCEM ocupando toda a tela escura abaixo!
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden">
        
        {/* --- 1. CABEÇALHO FIXADO NO TOPO --- */}
        <div className="relative z-30 w-full max-w-5xl mx-auto pt-8 sm:pt-10 px-6 text-center pointer-events-none">
          <span className="inline-block font-mono text-crimson text-xs uppercase tracking-[0.3em] font-semibold bg-crimson/10 px-4 py-1 rounded-full border border-crimson/25 backdrop-blur-sm">
            ( Arte da Lâmina · Filosofia )
          </span>

          <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight mt-3">
            Cortes que seguem o scroll do mouse, <br className="hidden sm:inline" />
            entrega de qualidade como <span className="text-crimson drop-shadow-[0_0_25px_rgba(220,38,38,0.85)]">aço de uma katana</span>.
          </h2>

          <p className="font-sans text-ink-soft max-w-lg mx-auto mt-2 text-xs sm:text-sm">
            Cada golpe é calculado. Continue rolando para testemunhar a lâmina descendo pela página.
          </p>

          {/* Fissura horizontal incandescente logo abaixo do texto */}
          <div className="relative w-full max-w-md mx-auto h-[2px] mt-4 bg-paper-border overflow-hidden rounded-full">
            <motion.div
              style={{ width: seamWidth }}
              className="h-full bg-gradient-to-r from-transparent via-crimson to-white shadow-[0_0_15px_#ef4444]"
            />
          </div>
        </div>

        {/* --- 2. AURA CARMESIM QUE ACOMPANHA OS CORTES DESCENDO --- */}
        <motion.div
          style={{ y: auraY }}
          className="absolute w-[500px] sm:w-[850px] h-[500px] rounded-full bg-crimson/15 blur-[120px] pointer-events-none z-0"
        />

        {/* Kanji caligráfico de fundo (斩 - Zan / Corte) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none opacity-[0.035]">
          <span className="font-serif text-[45vw] text-crimson leading-none font-black translate-y-[15vh]">
            斬
          </span>
        </div>

        {/* --- 3. LINHA GUIA VERTICAL DE CORTE (A lâmina riscando a página para baixo) --- */}
        <div className="absolute top-[26vh] bottom-0 left-1/2 -translate-x-1/2 w-[2px] pointer-events-none z-10">
          <div className="w-full h-full bg-crimson/10" />
          
          <motion.div
            style={{ height: verticalBeamHeight, opacity: beamGlow }}
            className="w-full bg-gradient-to-b from-transparent via-crimson to-white shadow-[0_0_20px_#ef4444]"
          />

          <motion.div
            style={{ top: verticalSparkTop }}
            className="absolute -left-[5px] -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#ef4444]"
          />
        </div>

        {/* --- 4. OS CORTES DE SAMURAI DESCENDO PELA PÁGINA --- */}
        <div className="absolute inset-0 pointer-events-none z-10">
          
          {/* CORTE 1: Superior (Descendo de 28vh para 44vh) */}
          <motion.div
            style={{
              top: slash1Y,
              left: "50%",
              x: slash1X,
              translateX: "-50%",
              rotate: slash1Rotate,
              scale: slash1Scale,
              opacity: slash1Opacity,
            }}
            className="absolute w-[550px] sm:w-[800px] md:w-[1000px] h-[260px] sm:h-[380px]"
          >
            <Image
              src="/images/katana-slash.png"
              alt="Corte Superior Katana"
              fill
              className="object-contain filter drop-shadow-[0_0_35px_rgba(220,38,38,0.9)]"
            />
          </motion.div>

          {/* CORTE 2: Médio-Alto (Descendo de 38vh para 58vh) */}
          <motion.div
            style={{
              top: slash2Y,
              left: "50%",
              x: slash2X,
              translateX: "-50%",
              rotate: slash2Rotate,
              scale: slash2Scale,
              opacity: slash2Opacity,
            }}
            className="absolute w-[600px] sm:w-[850px] md:w-[1100px] h-[280px] sm:h-[400px] -scale-x-100"
          >
            <Image
              src="/images/katana-slash.png"
              alt="Corte Médio Katana"
              fill
              className="object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,0.95)]"
            />
          </motion.div>

          {/* CORTE 3: O GRANDE CORTE CIRCULAR (A 3ª Imagem) (Descendo de 48vh para 72vh) */}
          <motion.div
            style={{
              top: slash3Y,
              left: "50%",
              translateX: "-50%",
              rotate: slash3Rotate,
              scale: slash3Scale,
              opacity: slash3Opacity,
            }}
            className="absolute w-[700px] sm:w-[1000px] md:w-[1250px] h-[340px] sm:h-[500px]"
          >
            <Image
              src="/images/katana-slash.png"
              alt="Corte Circular Amplo de Katana"
              fill
              className="object-contain filter contrast-125 drop-shadow-[0_0_55px_rgba(220,38,38,1)] brightness-110"
            />
          </motion.div>

          {/* CORTE 4: Golpe Inferior Duplo em X (Descendo de 60vh para 84vh) */}
          <motion.div
            style={{
              top: slash4Y,
              left: "50%",
              translateX: "-50%",
              scale: slash4Scale,
              opacity: slash4Opacity,
            }}
            className="absolute w-[650px] sm:w-[900px] md:w-[1150px] h-[300px] sm:h-[440px]"
          >
            <div className="absolute inset-0 rotate-[-25deg]">
              <Image
                src="/images/katana-slash.png"
                alt="Corte em X - Esquerda"
                fill
                className="object-contain filter drop-shadow-[0_0_35px_rgba(220,38,38,0.85)]"
              />
            </div>
            <div className="absolute inset-0 rotate-[35deg] -scale-x-100">
              <Image
                src="/images/katana-slash.png"
                alt="Corte em X - Direita"
                fill
                className="object-contain filter drop-shadow-[0_0_35px_rgba(239,68,68,0.85)]"
              />
            </div>
          </motion.div>

          {/* CORTE 5: Golpe Final Descendente (Descendo de 74vh para 96vh) */}
          <motion.div
            style={{
              top: slash5Y,
              left: "50%",
              translateX: "-50%",
              scale: slash5Scale,
              opacity: slash5Opacity,
            }}
            className="absolute w-[750px] sm:w-[1050px] md:w-[1300px] h-[360px] sm:h-[500px] rotate-[80deg]"
          >
            <Image
              src="/images/katana-slash.png"
              alt="Corte Final Vertical Katana"
              fill
              className="object-contain filter drop-shadow-[0_0_55px_rgba(220,38,38,1)]"
            />
          </motion.div>
        </div>

        {/* --- 5. INDICADOR LATERAL "KATANA SCROLL" --- */}
        <div className="hidden lg:flex flex-col items-center gap-3 absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <span className="font-mono text-[10px] tracking-widest text-crimson uppercase">
            KATANA
          </span>
          <div className="w-[2px] h-36 bg-paper-border relative overflow-hidden rounded-full">
            <motion.div
              style={{ height: verticalBeamHeight }}
              className="w-full bg-crimson shadow-[0_0_8px_#ef4444]"
            />
          </div>
          <span className="font-mono text-[9px] text-ink-muted">
            SCROLL
          </span>
        </div>

      </div>
    </section>
  );
}
