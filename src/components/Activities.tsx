"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const activities = [
  {
    src: "/images/COLLATION DE GRADE_1.jpg",
    alt: "Cérémonie de collation des grades à l'IST de Mbanza-Ngungu",
    title: "Collation des grades",
    desc: "Remise des diplômes aux promotionnaires.",
  },
  {
    src: "/images/COLLATION_2.jpg",
    alt: "Cérémonie de remise de diplômes",
    title: "Remise de diplômes",
    desc: "Une cérémonie solennelle en présence des familles.",
  },
  {
    src: "/images/DEFENCE.jpg",
    alt: "Soutenance à l'IST de Mbanza-Ngungu",
    title: "Soutenances",
    desc: "Les étudiants défendent leurs travaux devant le jury.",
  },
  {
    src: "/images/INOGURATION_NOUVEAU BATIMENT.jpg",
    alt: "Inauguration du nouveau bâtiment",
    title: "Inaugurations",
    desc: "Mise en service des nouvelles infrastructures.",
  },
  {
    src: "/images/IST_FAMILLE.jpg",
    alt: "Vie étudiante à l'IST de Mbanza-Ngungu",
    title: "Vie étudiante",
    desc: "Un cadre de vie convivial pour les étudiants.",
  },
];

export default function Activities() {
  const header = useReveal();
  const grid = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="activites" className="scroll-mt-12 py-10 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-16 reveal-up ${header.visible ? "visible" : ""}`}
        >
          <p className="text-ink-soft text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Activités
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-[1.15] mb-5">
            La vie de notre institution
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Découvrez les cérémonies, soutenances et moments de vie étudiante
            qui font l&apos;identité de l&apos;IST de Mbanza-Ngungu.
          </p>
        </div>

        {/* Carrousel */}
        <div ref={grid.ref} className={`relative stagger ${grid.visible ? "visible" : ""}`}>
          {/* Flèches */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-navy hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-border flex items-center justify-center text-navy hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {activities.map((item) => (
              <article
                key={item.title}
                className="group snap-start shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(33.333%-1rem)] rounded-2xl overflow-hidden bg-white border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 85vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
