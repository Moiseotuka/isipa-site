"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#formations", label: "Formations" },
  { href: "#campus", label: "Campus" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      {/* Barre supérieure */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          scrolled ? "h-0" : "h-10 bg-navy-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs">
          {/* Gauche : localisation */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/60">
              <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Mbanza-Ngungu, RDC
            </span>
            <span className="hidden sm:block w-px h-3 bg-white/15" />
            <span className="hidden sm:flex items-center gap-1.5 text-white/50 italic">
              Science, Morale, Développement
            </span>
          </div>

          {/* Droite : téléphones + réseaux */}
          <div className="flex items-center gap-5">
            <a href="tel:+243898349448" className="flex items-center gap-1.5 text-white/60 hover:text-gold transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">+243 898 349 448</span>
              <span className="sm:hidden">089 349 448</span>
            </a>
            <span className="w-px h-3 bg-white/15" />
            <a href="tel:+243892531570" className="hidden sm:flex items-center gap-1.5 text-white/60 hover:text-gold transition-colors">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">Ou</span>
              +243 892 531 570
            </a>
            <span className="hidden md:block w-px h-3 bg-white/15" />
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors" aria-label="WhatsApp">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo sans background */}
        <button
          onClick={() => go("#accueil")}
          className="flex items-center gap-2 group shrink-0"
          aria-label="Accueil IST de Mbanza-Ngungu"
        >
          <Image
            src="/images/logo_ist.jpg"
            alt="Logo IST de Mbanza-Ngungu"
            width={44}
            height={44}
            className="shrink-0"
            priority
          />
          <div className="leading-tight min-w-0">
            <span
              className={`block font-extrabold text-[14px] md:text-[15px] tracking-tight transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              IST DE MBANZA-NGUNGU
            </span>
            <span
              className={`block text-[9px] md:text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                scrolled ? "text-ink-soft" : "text-white/50"
              }`}
            >
              Institut Supérieur des Techniques
            </span>
          </div>
        </button>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                scrolled
                  ? "text-ink-soft hover:text-navy hover:bg-navy/5"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-6" />
            </button>
          ))}

          {/* Lien externe : Voir résultats */}
          <a
            href="https://omnia-lmd.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
              scrolled
                ? "text-ink-soft hover:text-navy hover:bg-navy/5"
                : "text-white/75 hover:text-white hover:bg-white/10"
            }`}
          >
            Résultats
            <svg className="w-3 h-3 ml-1 inline-block opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-6" />
          </a>

          <button
            onClick={() => go("#contact")}
            className={`ml-3 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-light shadow-sm hover:shadow-md"
                : "bg-gold text-navy hover:bg-gold-soft shadow-sm hover:shadow-md"
            }`}
          >
            S&apos;inscrire
          </button>
        </nav>

        {/* Bouton mobile */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2.5 rounded-lg transition-colors ${
            scrolled ? "text-navy hover:bg-navy/5" : "text-white hover:bg-white/10"
          }`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t border-border px-4 py-4 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="block w-full text-left px-4 py-3 text-ink-soft hover:text-navy hover:bg-navy/5 rounded-lg font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://omnia-lmd.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left px-4 py-3 text-ink-soft hover:text-navy hover:bg-navy/5 rounded-lg font-medium transition-colors"
          >
            Résultats
            <svg className="w-3 h-3 ml-1 inline-block opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button
            onClick={() => go("#contact")}
            className="mt-3 w-full bg-gold text-navy py-3 rounded-lg font-semibold hover:bg-gold-soft transition-colors"
          >
            S&apos;inscrire
          </button>
        </nav>
      </div>
    </header>
  );
}
