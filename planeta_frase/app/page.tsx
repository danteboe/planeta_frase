"use client";

import { useState } from "react";
import Link from "next/link";
import StarBackground from "./components/StarBackground";
import CreditsModal from "./components/CreditsModal";

export default function Home() {
  const [creditsOpen, setCreditsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <StarBackground />

      {/* Decorative planets */}
      <div
        className="planet planet-cyan animate-float"
        style={{ width: 90, height: 90, top: "10%", left: "5%", opacity: 0.5 }}
      />
      <div
        className="planet planet-purple animate-float-slow"
        style={{ width: 60, height: 60, top: "20%", right: "8%", opacity: 0.4 }}
      />
      <div
        className="planet planet-gold animate-float"
        style={{ width: 40, height: 40, bottom: "15%", left: "12%", opacity: 0.45 }}
      />
      <div
        className="planet planet-cyan animate-float-slow"
        style={{ width: 30, height: 30, bottom: "25%", right: "15%", opacity: 0.35 }}
      />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Logo / Title */}
        <div className="mb-3">
          <span className="text-5xl">&#x1FA90;</span>
        </div>
        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight mb-3 glow-text"
          style={{ color: "var(--cyan)" }}
        >
          Planeta Frase
        </h1>
        <p
          className="text-lg sm:text-xl mb-2 font-medium glow-text-purple"
          style={{ color: "var(--purple)" }}
        >
          La estructura de la oraci&oacute;n
        </p>
        <p className="text-sm text-white/50 mb-10 max-w-md">
          Explora el universo de la gram&aacute;tica: aprende qu&eacute; es una
          oraci&oacute;n, identifica sus partes y pon a prueba tus conocimientos
          en una misi&oacute;n espacial.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <Link href="/explicacion" className="btn-primary flex-1 text-center">
            <span>&#x1F4DA;</span> Explicaci&oacute;n
          </Link>
          <Link href="/juego" className="btn-primary flex-1 text-center">
            <span>&#x1F680;</span> Jugar
          </Link>
        </div>

        {/* Credits button */}
        <button
          onClick={() => setCreditsOpen(true)}
          className="btn-secondary mt-6 text-sm"
        >
          <span>&#x2139;&#xFE0F;</span> Cr&eacute;ditos e informaci&oacute;n
        </button>
      </main>

      <CreditsModal
        isOpen={creditsOpen}
        onClose={() => setCreditsOpen(false)}
      />
    </div>
  );
}
