import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Twitter, Globe, ShieldCheck } from "lucide-react";

interface FooterSectionProps {
  onOpenPrivacy: () => void;
  onOpenSomaticLaws: () => void;
  onNavigate?: (id: string) => void;
}

export default function FooterSection({ onOpenPrivacy, onOpenSomaticLaws, onNavigate }: FooterSectionProps) {
  const handleLinkClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-12 overflow-hidden border-t border-white/5 bg-gradient-to-b from-neutral-950/80 to-black/95">
      {/* Subtle radial glows */}
      <div className="absolute left-1/10 bottom-0 w-[350px] h-[350px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-1/10 top-0 w-[350px] h-[350px] bg-cyan-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5 relative z-10">
          
          {/* Col 1: Brand details (occupies 5 cols on desktop) */}
          <div className="md:col-span-5 space-y-6">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Spinning gear-like emblem */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md group-hover:bg-cyan-400/35 transition-all duration-300" />
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-8 h-8 text-cyan-400 animate-spin-slow group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  style={{ animationDuration: '28s' }}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="10"
                >
                  <circle cx="50" cy="50" r="30" strokeDasharray="30 20" />
                  <path d="M 50 10 L 50 25 M 50 75 L 50 90 M 10 50 L 25 50 M 75 50 L 90 50" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 22 22 L 32 32 M 68 68 L 78 78 M 22 78 L 32 68 M 68 22 L 78 32" strokeWidth="12" strokeLinecap="round" />
                </svg>
                <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>

              {/* Brand Typography */}
              <span className="font-sans font-bold text-xl tracking-[0.08em] uppercase flex items-center">
                <span className="text-white font-extrabold group-hover:text-neutral-200 transition-colors duration-300">VORTEX</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600 font-black relative drop-shadow-[0_2px_4px_rgba(244,63,94,0.3)]">
                  AI
                </span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              La symbiose absolue entre ingénierie biologique, conscience numérique et élégance immortelle. Votre héritage digne d'une éternité bionique.
            </p>

            <div className="flex items-center gap-2 text-neutral-600 text-[11px] font-mono">
              <ShieldCheck size={14} className="text-cyan-500/50" />
              <a 
                href="https://mist3rth.github.io/presentMe/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
              >
                Made by T.THIESSON
              </a>
            </div>
          </div>

          {/* Col 2: Contact (occupies 3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-400">
              <li className="hover:text-white transition-colors duration-200">
                <a href="mailto:conciergerie@vortex-ai.ch" className="cursor-pointer">
                  conciergerie@vortex-ai.ch
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-200">
                <a href="tel:+41227395111" className="cursor-pointer">
                  +41 (0) 22 739 51 11
                </a>
              </li>
              <li className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                Rue du Rhône 12<br />
                1204 Genève<br />
                Suisse
              </li>
            </ul>
          </div>

          {/* Col 3: Pages Navigation (occupies 2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
              PAGES
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li>
                <button 
                  onClick={() => handleLinkClick("manifesto-section")} 
                  className="hover:text-cyan-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("humanoid-vessels")} 
                  className="hover:text-cyan-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  Châssis
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("personality-matrix")} 
                  className="hover:text-cyan-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  Psyché
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("synapse-connections")} 
                  className="hover:text-cyan-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  Synapse
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick("clubs-pricing")} 
                  className="hover:text-cyan-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  Tarifs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links (occupies 2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
              RESEAUX
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 hover:text-rose-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Twitter size={12} className="text-neutral-600 group-hover:text-rose-400" />
                  <span>Twitter</span>
                  <ArrowUpRight size={10} className="text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 hover:text-rose-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Instagram size={12} className="text-neutral-600" />
                  <span>Instagram</span>
                  <ArrowUpRight size={10} className="text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 hover:text-rose-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Facebook size={12} className="text-neutral-600" />
                  <span>Facebook</span>
                  <ArrowUpRight size={10} className="text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 hover:text-rose-400 hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Linkedin size={12} className="text-neutral-600" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={10} className="text-neutral-600" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Banner Area with the copyright details */}
        <div className="relative mt-8 flex flex-col items-center">
          
          {/* Real copyright & fine-print footer row */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-neutral-400 pt-4 border-t border-white/5">
            <div className="text-neutral-400">
              © 2026 VORTEX AI Inc. Élaboration suisse de l'immortalité biologique.
            </div>
            
            <div className="flex gap-6">
              <button 
                onClick={onOpenPrivacy} 
                className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 uppercase tracking-widest cursor-pointer bg-transparent border-0 p-0 font-mono text-[10px]"
              >
                Confidentialité
              </button>
              <button 
                onClick={onOpenSomaticLaws} 
                className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 uppercase tracking-widest cursor-pointer bg-transparent border-0 p-0 font-mono text-[10px]"
              >
                Charte Somatique
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
