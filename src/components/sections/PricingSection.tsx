import { motion } from "motion/react";
import { Button } from "../ui/Button";
import LinearReveal from "../LinearReveal";

interface PricingSectionProps {
  isDesktop: boolean;
  setIsGetStartedOpen: (val: boolean) => void;
  setIsConnectingOpen: (val: boolean) => void;
}

export const PricingSection = ({
  isDesktop,
  setIsGetStartedOpen,
  setIsConnectingOpen
}: PricingSectionProps) => {
  return (
    <section id="clubs-pricing" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Background glowing sphere */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />

        {/* Title block inspired by "Sérénité Absolue" block layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 mb-16 relative">
          <div className="lg:col-span-8">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tight leading-[0.95] text-white flex flex-wrap gap-x-4">
              <LinearReveal Text="Les Cercles" as="span" />
              <LinearReveal 
                Text="d'Accès" 
                as="span" 
                colorClass="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-cyan-400 drop-shadow-[0_8px_20px_rgba(244,63,94,0.25)] font-extrabold pb-4" 
                delay={0.4} 
              />
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Prenez part à l'exclusivité cognitive absolue. Choisissez l'intensité de votre intégration bionique à travers nos cercles certifiés ALTEREGO™.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative overflow-visible">
          
          {/* Tier 1: Echo */}
          <motion.div 
            initial={{ 
              opacity: 0, 
              x: isDesktop ? "108%" : 0, 
              y: isDesktop ? 0 : 50 
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring", 
              stiffness: 65, 
              damping: 15, 
              delay: isDesktop ? 0.6 : 0.2 
            }}
            className="relative z-10 p-8 rounded-2xl bg-[#09090c] border border-white/5 flex flex-col justify-between text-left transition-colors hover:border-white/10 duration-300 shadow-2xl"
          >
            <div>
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-1">Cercle Standard</span>
              <h3 className="text-2xl font-bold text-white mb-2">"Écho"</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Intégration d'une conscience quotidienne au choix parmi nos agents utilitaires. Accès vocal standard crypté.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-extrabold text-white">49€</span>
                <span className="text-xs text-gray-500 uppercase font-mono">/ mois</span>
              </div>
            </div>
            <Button
              onClick={() => { setIsGetStartedOpen(true); }}
              variant="glass"
            >
              Réclamer mon empreinte
            </Button>
          </motion.div>

          {/* Tier 2: Resonance */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: isDesktop ? 0.95 : 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: 0.1
            }}
            className="relative overflow-hidden z-20 p-8 rounded-2xl bg-[#0d0912] border border-rose-500/30 flex flex-col justify-between text-left transition-colors shadow-[0_0_35px_rgba(244,63,94,0.15)] duration-300"
          >
            {/* Rain lines background animation */}
            <div className="lines-premium">
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
              <div className="line-premium"></div>
            </div>

            {/* Premium glow banner */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full text-[9px] font-mono font-bold uppercase text-black tracking-widest shadow-md z-20">
              Recommandé
            </div>
            
            <div className="relative z-10">
              <span className="font-mono text-xs text-rose-400 uppercase tracking-widest block mb-1">Cercle Premium</span>
              <h3 className="text-2xl font-bold text-white mb-2">"Résonance"</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Accès illimité au Panthéon Historique (Einstein, César, Cléopâtre, Marc Aurèle). Personnalisation complète des traits émotionnels & intégration domotique avancée.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-extrabold text-white">199€</span>
                <span className="text-xs text-rose-400 uppercase font-mono">/ mois</span>
              </div>
            </div>
            <Button
              onClick={() => { setIsGetStartedOpen(true); }}
              variant="rose-gradient"
            >
              Invoquer mon ALTEREGO
            </Button>
          </motion.div>

          {/* Tier 3: Total Recall */}
          <motion.div 
            initial={{ 
              opacity: 0, 
              x: isDesktop ? "-108%" : 0, 
              y: isDesktop ? 0 : 50 
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 65,
              damping: 15,
              delay: isDesktop ? 0.7 : 0.3
            }}
            className="relative z-10 p-8 rounded-2xl bg-[#090b0f] border border-cyan-500/20 flex flex-col justify-between text-left transition-colors hover:border-cyan-500/40 duration-300 shadow-2xl"
          >
            <div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">Cercle Privé</span>
              <h3 className="text-2xl font-bold text-white mb-2">"Total Recall"</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Création d'une conscience sur-mesure basée sur vos propres archives de vie ou celles d'un proche. Concierge bionique dédié disponible 24/7.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-extrabold text-white">Sur Mesure</span>
              </div>
            </div>
            <Button
              onClick={() => { setIsConnectingOpen(true); }}
              variant="outline-cyan"
            >
              Ouvrir le canal privé
            </Button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
export default PricingSection;
