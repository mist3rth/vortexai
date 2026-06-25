import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import TypingMentalHeader from "../TypingMentalHeader";

interface HeroSectionProps {
  scrollY: number;
  setIsGetStartedOpen: (val: boolean) => void;
  setIsConnectingOpen: (val: boolean) => void;
  onNavigate?: (id: string) => void;
}

export const HeroSection = ({
  scrollY,
  setIsGetStartedOpen,
  setIsConnectingOpen,
  onNavigate
}: HeroSectionProps) => {
  return (
    <div 
      className="sticky top-0 w-full h-screen flex flex-col justify-between z-10 pt-24 lg:pt-32"
      style={{
        display: scrollY > 900 ? "none" : "flex"
      }}
    >
      {/* MAIN HERO BODY */}
      <main 
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center will-change-[transform,opacity]"
        style={{
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
          opacity: Math.max(0, 1 - scrollY / 700)
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10">
          
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col align-left text-left">
            {/* TYPOGRAPHY: Mental (white) + IA (gradient red) */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="text-[58px] sm:text-[80px] md:text-[104px] lg:text-[120px] font-bold tracking-[-0.03em] leading-[0.9] select-text text-white"
              >
                <TypingMentalHeader />
              </motion.h1>
            </div>

            {/* DESCRIPTION PARAGRAPH */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 md:mt-8 max-w-[420px] text-gray-400 font-sans font-normal text-[14px] md:text-[15px] leading-[1.6] text-left opacity-85 select-text"
            >
              Implantez un esprit virtuel d'exception dans vos humanoïdes. Personnalisez en quelques instants leur humeur, leurs valeurs morales ou leurs règles de comportement en toute simplicité.
            </motion.p>

            {/* ACTIONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 md:mt-11 flex flex-wrap items-center gap-y-4"
            >
              <Button 
                id="get-started-cta"
                onClick={() => {
                  onNavigate?.("spirit-supremacy");
                }}
                variant="primary"
                animateProps={{
                  whileHover: { 
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0 12px 28px -5px rgba(255, 255, 255, 0.1)"
                  },
                  whileTap: { 
                    scale: 0.96,
                    y: 0 
                  },
                  transition: { 
                    type: "spring", 
                    stiffness: 450, 
                    damping: 14 
                  }
                }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative font-sans tracking-wide">Personnaliser</span>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 group-hover:rotate-45 shadow-[0_4px_12px_rgba(255,255,255,0.25)] group-hover:shadow-[0_4px_16px_rgba(255,255,255,0.45)]">
                  <ArrowUpRight size={16} strokeWidth={2.5} className="text-neutral-900" />
                </div>
              </Button>

              {/* Vertical separator */}
              <div className="h-8 w-px bg-white/15 mx-5 md:mx-6 block" />

              {/* Connected With Us */}
              <motion.div 
                id="connect-cta"
                whileHover={{ 
                  scale: 1.04,
                  x: 3
                }}
                whileTap={{ 
                  scale: 0.96
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 450, 
                  damping: 14 
                }}
                onClick={() => {
                  setIsConnectingOpen(true);
                }}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 bg-cyan-950/20 group-hover:bg-cyan-950/40 opacity-70 group-hover:border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_18px_rgba(6,182,212,0.30)] transition-all duration-300" />
                  
                  <svg viewBox="0 0 100 100" className="w-[18px] h-[18px] text-cyan-400 animate-spin-slow group-hover:text-cyan-300" style={{ animationDuration: '10s' }}>
                    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="8" strokeDasharray="30 25" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                  </svg>
                </div>

                <span className="font-sans font-medium text-sm text-[#cacbcd] group-hover:text-white transition-colors duration-300">
                  Nous Contacter
                </span>
              </motion.div>

            </motion.div>
          </div>

          {/* Right column empty */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 h-[10px]" />
        </div>
      </main>

      {/* BOTTOM FOLD FIRST-STAGE UTILITY BAR */}
      <footer 
        className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-6 md:pb-10 flex flex-wrap gap-y-4 justify-between items-center bg-transparent"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors group"
          onClick={() => {
            document.getElementById("manifesto-section")?.scrollIntoView({ behavior: 'smooth' });
          }}
        >

          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={14} strokeWidth={2.5} className="text-gray-400 group-hover:text-rose-500 transition-colors" />
            </motion.div>
          </div>
          <span className="font-mono text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase">
            Découvrir
          </span>
        </motion.div>

        <div className="flex items-center gap-4 bg-transparent" />
      </footer>
    </div>
  );
};
export default HeroSection;
