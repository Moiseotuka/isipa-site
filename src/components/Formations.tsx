"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const sections = [
  {
    title: "Gestion Commerciale et Administrative",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80",
    filieres: [
      "Informatique de gestion",
      "Marketing",
      "Entrepreneuriat et gestion des PME",
      "Banque et Micro-Finance",
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: "Sciences de la Santé",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop&q=80",
    filieres: [
      "Soins généraux",
      "Sage-femme",
      "Management des services de santé",
      "Technique de laboratoire",
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    title: "Techniques Appliquées",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
    filieres: ["Préparatoire", "Électricité", "Mécanique", "Électronique"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
  },
];

export default function Formations() {
  const header = useReveal();
  const cards = useReveal();
  const extra = useReveal();

  return (
    <section id="formations" className="scroll-mt-12 py-10 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-16 reveal-up ${header.visible ? "visible" : ""}`}
        >
          <p className="text-ink-soft text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Formations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-[1.15] mb-5">
            Nos sections d&apos;enseignement
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Trois sections de graduation, un cycle de master et une formation
            spécialisée : choisissez la voie qui correspond à votre projet
            professionnel.
          </p>
        </div>

        {/* Cartes */}
        <div ref={cards.ref} className={`grid md:grid-cols-3 gap-8 mb-10 stagger ${cards.visible ? "visible" : ""}`}>
          {sections.map((section) => (
            <article
              key={section.title}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                {/* Icône sur l'image */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white/95 text-navy flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {section.icon}
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-5 leading-snug">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.filieres.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Master + OPJ */}
        <div ref={extra.ref} className={`grid md:grid-cols-2 gap-8 stagger ${extra.visible ? "visible" : ""}`}>
          <article className="bg-navy text-white rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full group-hover:bg-gold/15 transition-colors duration-500" />
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3 relative">
              Cycle de master
            </p>
            <h3 className="text-xl font-bold mb-4 relative">
              Deux spécialisations de 2 ans
            </h3>
            <ul className="space-y-3 text-white/75 text-sm relative">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                Comptabilité, contrôle et audit
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                Informatique
              </li>
            </ul>
          </article>

          <article className="bg-navy-dark text-white rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full group-hover:bg-white/8 transition-colors duration-500" />
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3 relative">
              Formation OPJ
            </p>
            <h3 className="text-xl font-bold mb-4 relative">
              Officiers de Police Judiciaire
            </h3>
            <p className="text-white/65 text-sm leading-relaxed relative">
              Une formation intensive de 9 mois préparant au corps des
              officiers de police judiciaire.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
