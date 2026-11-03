import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stroke } from "@/components/sections/Stroke";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Stroke />
      <Work />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}
