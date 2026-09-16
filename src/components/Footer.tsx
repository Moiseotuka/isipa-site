import Image from "next/image";

const nav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#formations", label: "Formations" },
  { href: "#campus", label: "Campus" },
  { href: "#contact", label: "Contact" },
];

const academic = [
  "Gestion Commerciale et Administrative",
  "Sciences de la Santé",
  "Techniques Appliquées",
  "Cycle de Master",
  "Formation OPJ",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Identité */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo_ist.jpg"
                alt="Logo IST de Mbanza-Ngungu"
                width={48}
                height={48}
                className="rounded-none"
              />
              <div>
                <p className="font-extrabold text-sm leading-tight">IST DE MBANZA-NGUNGU</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/45">
                  Institut Supérieur des Techniques
                </p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Science, Morale, Développement.
              <br />
              <span className="text-gold">Former les leaders de demain.</span>
            </p>
            <div className="space-y-2 text-sm text-white/45">
              <a href="tel:+243898349448" className="block hover:text-gold transition-colors">
                +243 898 349 448
              </a>
              <a href="tel:+243892531570" className="block hover:text-gold transition-colors">
                +243 892 531 570
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/65 hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Nos sections
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              {academic.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/65">
              <p>Mbanza-Ngungu</p>
              <p>Province du Kongo-Central</p>
              <p>République Démocratique du Congo</p>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-soft transition-colors"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <p>© {new Date().getFullYear()} IST de Mbanza-Ngungu. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="tel:+243898349448" className="hover:text-gold transition-colors">
              +243 898 349 448
            </a>
            <a href="tel:+243892531570" className="hover:text-gold transition-colors">
              +243 892 531 570
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
