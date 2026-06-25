import { motion } from "motion/react";
import { Shield, Sparkles, Heart, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import LinearReveal from "./LinearReveal";

interface SynapseHubProps {
  selectedHullName?: string;
  selectedHullAccent?: string;
}

const PREMIUM_ADVANTAGES = [
  {
    id: "discretion",
    num: "01",
    title: "L'Intendance Invisible",
    subtitle: "Harmonie d'Usage",
    description: "Votre compagnon anticipe vos rituels et gère votre domaine sans jamais s'imposer. Une présence parfaitement fluide, discrète et dévouée au quotidien.",
    feature: "Gain de temps estimé : 15h par semaine",
    icon: Sparkles,
    color: "from-purple-500/20 to-indigo-500/5",
    accent: "#a855f7"
  },
  {
    id: "security",
    num: "02",
    title: "Une Confidentialité Souveraine",
    subtitle: "Sécurité Hermétique",
    description: "Vos données et vos habitudes ne quittent jamais l'enceinte de votre propriété. Un protocole fermé, local et chiffré garantit un secret absolu.",
    feature: "Technologie 100% hors-ligne localisée",
    icon: Shield,
    color: "from-indigo-500/20 to-blue-500/5",
    accent: "#6366f1"
  },
  {
    id: "whiteglove",
    num: "03",
    title: "Installation Gants Blancs",
    subtitle: "Simplicité Clé en Main",
    description: "Nos spécialistes livrent, calibrent et configurent l'intégralité du châssis physique et de la conscience bionique à votre domaine. Zéro manipulation technique de votre part.",
    feature: "Prise en main guidée sous 2h",
    icon: Clock,
    color: "from-pink-500/20 to-purple-500/5",
    accent: "#ec4899"
  },
  {
    id: "symbiosis",
    num: "04",
    title: "Une Symbiose Organique",
    subtitle: "Fluidité Instinctive",
    description: "L'intelligence bionique s'accorde instantanément avec l'empreinte de votre personnalité. L'interaction devient aussi naturelle et authentique qu'un échange humain.",
    feature: "Calibrage synaptique haute fidélité",
    icon: Heart,
    color: "from-rose-500/20 to-pink-500/5",
    accent: "#f43f5e"
  }
];

export default function SynapseHub({ selectedHullName = 'VORTEX V-1 "Aegis"', selectedHullAccent = '#22d3ee' }: SynapseHubProps) {
  return (
    <section id="synapse-connections" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-b border-white/5 bg-[#050508]">
      {/* Delicate background element */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Title Block resembling Sections 1 and 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 mb-16 relative">
          <div className="lg:col-span-8">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tight leading-[0.95] text-white flex flex-wrap gap-x-4">
              <LinearReveal Text="Sérénité" as="span" />
              <LinearReveal 
                Text="Absolue" 
                as="span" 
                colorClass="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 drop-shadow-[0_8px_20px_rgba(34,211,238,0.25)] pb-4" 
                delay={0.4} 
              />
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-14">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Une mise en service exclusive d'excellence, pensée pour votre confort. Aucun jargon technique ni paramétrage fastidieux. Nos experts de protocole s'occupent de toute l'installation cognitive directement chez vous.
            </p>
          </div>
        </div>

        {/* Bento Grid layout for premium marketing propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PREMIUM_ADVANTAGES.map((adv, idx) => {
            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "tween", duration: 0.5, delay: idx * 0.08, ease: "linear" }}
                className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-neutral-950/90 to-neutral-950/30 p-8 sm:p-10 flex flex-col justify-start overflow-hidden min-h-[280px] transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] will-change-[transform,opacity]"
              >
                {/* Large Ambient Glow on Hover to illuminate half the card with site colors */}
                <div 
                  className="absolute -right-24 -top-24 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full opacity-0 group-hover:opacity-[0.28] transition-all duration-700 ease-out blur-[75px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${adv.accent} 0%, transparent 70%)` }}
                />

                <div className="relative z-10 pt-4">
                  <span className="text-xs font-semibold text-white/50 tracking-wide uppercase block mb-1">
                    {adv.subtitle}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-neutral-100 transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
