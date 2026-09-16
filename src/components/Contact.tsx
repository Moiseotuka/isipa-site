"use client";

import { useReveal } from "@/hooks/useReveal";

const phones = [
  { number: "+243 898 349 448", tel: "+243898349448" },
  { number: "+243 892 531 570", tel: "+243892531570" },
];

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="scroll-mt-12 py-10 lg:py-20 bg-navy relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />
      {/* Ligne dorée */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold/20 hidden lg:block" />

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 text-center reveal-up ${visible ? "visible" : ""}`}
      >
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          Inscriptions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-6">
          Prêt à rejoindre l&apos;IST de Mbanza-Ngungu ?
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
          Contactez notre administration pour connaître les conditions
          d&apos;admission, les frais académiques et les dates de rentrée.
        </p>

        {/* Téléphones */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
          {phones.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="group flex items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-7 hover:bg-gold/10 hover:border-gold/30 transition-all duration-500"
            >
              <span className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-white font-semibold text-lg group-hover:text-gold transition-colors duration-300">
                {p.number}
              </span>
            </a>
          ))}
        </div>

        <p className="text-white/35 text-sm">
          Mbanza-Ngungu, Province du Kongo-Central — République Démocratique du Congo
        </p>
      </div>
    </section>
  );
}
