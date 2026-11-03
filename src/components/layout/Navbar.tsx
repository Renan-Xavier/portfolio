"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-crimson/20 bg-[#070707]/80 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="#top"
          className="cursor-target font-sans text-ink flex items-center gap-3 text-sm font-semibold tracking-tight group"
        >
          <div className="w-6 h-6 rounded-md bg-crimson flex items-center justify-center text-white text-xs font-mono font-bold shadow-[0_0_10px_#dc2626]">
            R
          </div>
          <span className="group-hover:text-crimson-glow transition-colors">
            {profile.shortName}
          </span>
          <span className="text-ink-soft hidden font-normal text-xs md:inline-block">
            / {profile.role.toLowerCase()}
          </span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="#trabalho"
            className="cursor-target text-ink-soft hover:text-white hover:bg-white/5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm transition-all"
          >
            Trabalho
          </Link>
          <Link
            href="#sobre"
            className="cursor-target text-ink-soft hover:text-white hover:bg-white/5 rounded-full px-3.5 py-1.5 text-xs sm:text-sm transition-all"
          >
            Sobre
          </Link>
          <Link
            href="#contato"
            className="cursor-target text-ink-soft hover:text-crimson hover:bg-crimson/10 border border-transparent hover:border-crimson/30 rounded-full px-3.5 py-1.5 text-xs sm:text-sm transition-all"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
