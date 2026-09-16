"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero_1.jpg", alt: "Collation des grades à l'IST de Mbanza-Ngungu" },
  { src: "/images/hero_2.jpg", alt: "Cérémonie officielle de l'IST de Mbanza-Ngungu" },
];

const stats = [
  { value: "5", label: "Sections" },
  { value: "12", label: "Filières" },
  { value: "LMD", label: "Licence — Master" },
  { value: "9 mois", label: "Formation OPJ" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const duration = 6000;

    const tick = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / duration) * 100, 100));
    }, 50);

    const advance = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, duration);

    return () => {
      clearInterval(tick);
      clearTimeout(advance);
    };
  }, [current]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/20" />

      {/* Ligne décorative dorée */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gold/40 hidden lg:block" />

      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em]">
              Institut Supérieur Techniques de MB/NGUNGU
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
            Votre réussite,
            <br />
            <span className="text-gold">notre challenge.</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
            À Mbanza-Ngungu, l&apos;IST forme les professionnels de demain :
            gestion, santé, techniques appliquées et informatique. Un
            enseignement supérieur de qualité, tourné vers la pratique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#formations"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 rounded-xl font-semibold hover:bg-gold-soft transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Découvrir nos formations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              S&apos;inscrire maintenant
            </a>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-gold">{s.value}</p>
              <p className="text-white/45 text-sm uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-gold transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1} : ${slide.alt}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
