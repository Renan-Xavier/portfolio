import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppChrome } from "@/components/chrome/AppChrome";
import { profile } from "@/data/portfolio";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.shortName} — ${profile.role}`,
  description: profile.intro,
  keywords: [
    profile.name,
    "Desenvolvedor Full Stack",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Oracle SQL",
    "FIAP ADS",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} — ${profile.role}`,
    description: profile.intro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakartaSans.variable} ${geistMono.variable} dark antialiased`}>
      <body className="bg-paper text-ink min-h-screen selection:bg-crimson selection:text-white">
        <AppChrome>
          {children}
        </AppChrome>
      </body>
    </html>
  );
}
