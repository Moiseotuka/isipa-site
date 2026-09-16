"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const strengths = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Enseignement de qualité",
    desc: "Programmes adaptés au marché, encadrement par des enseignants qualifiés.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Formation pratique",
    desc: "Travaux dirigés, stages et laboratoires au cœur de la pédagogie.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Diplômes reconnus",
    desc: "Système LMD, diplômes homologués par le Ministère de l&apos;Enseignement Supérieur.",
  },
];

const stats = [
  { n: "5", t: "Sections\nde graduation" },
  { n: "12", t: "Filières\nau total" },
  { n: "9 mois", t: "Formation\nOPJ" },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="apropos" className="scroll-mt-12 py-10 lg:py-20 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 reveal-up ${visible ? "visible" : ""}`}>
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-[1.15] max-w-2xl mx-auto">
            Une institution d&apos;enseignement supérieur{" "}
            <span className="text-gold">de référence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,27,46,0.3)]">
              <Image
                src="/images/NOUVEAU_BATIMENT_2.jpg"
                alt="Bâtiment principal de l'IST de Mbanza-Ngungu"
                width={640}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay navy léger */}
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
              {/* Dégradé du bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
              {/* Ligne dorée en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
            </div>

            {/* Badge flottant LMD */}
            <div className="absolute -bottom-5 right-4 lg:-right-5 bg-white rounded-2xl shadow-xl px-6 py-4 border border-border/50">
              <p className="text-3xl font-extrabold text-navy leading-none">LMD</p>
              <p className="text-[10px] text-ink-soft uppercase tracking-[0.15em] mt-1">Licence — Master</p>
            </div>
          </div>

          {/* Contenu */}
          <div>
            <p className="text-ink-soft leading-relaxed mb-4 text-[15px]">
              L&apos;Institut Supérieur Techniques de MB/NGUNGU forme des professionnels compétents et
              responsables, capables de répondre aux exigences du marché du travail moderne à
              Mbanza-Ngungu et en République Démocratique du Congo.
            </p>
            <p className="text-ink-soft leading-relaxed mb-10 text-[15px]">
              Sous la devise{" "}
              <strong className="text-navy font-semibold">« Science, Morale, Développement »</strong>,
              l&apos;institution allie rigueur académique, encadrement qualifié et formation pratique
              pour préparer ses diplômés au monde professionnel.
            </p>

            {/* Atouts */}
            <div className="space-y-4 mb-10">
              {strengths.map((s) => (
                <div key={s.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{s.title}</p>
                    <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.n} className="text-center p-4 rounded-xl bg-surface border border-border/50">
                  <p className="text-2xl md:text-3xl font-extrabold text-gold">{s.n}</p>
                  <p className="text-[10px] md:text-xs text-ink-soft mt-1 whitespace-pre-line leading-tight uppercase tracking-wider">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
