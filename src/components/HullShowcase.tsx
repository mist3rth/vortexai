import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { FicheProduit } from "./FicheProduit";

export interface Hull {
  id: string;
  name: string;
  tagline: string;
  image: string;
  type: "Generalist" | "High-Velocity" | "Heavy Duty" | "Bio-Mimetic";
  accentColor: string;
  specs: {
    articulation: number; // 0-100
    actuators: number;
    payload: string;
    energyEfficiency: number;
    material: string;
  };
  features: string[];
}

const HULLS_DATA: Hull[] = [
  {
    id: "aegis",
    name: "VORTEX V-1 \"Aegis\" (Majordome Holistique)",
    tagline: "Le Majordome Holistique. Plus qu'un assistant : un intendant qui anticipe les besoins de votre foyer, orchestre vos espaces connectés et gère votre charge mentale avec la déférence et l'esprit des grandes maisons d'autrefois.",
    type: "Generalist",
    accentColor: "#22d3ee", // cyan
    specs: {
      articulation: 88,
      actuators: 64,
      payload: "45 kg",
      energyEfficiency: 92,
      material: "Titane Aérospatial & Alliage Ultra-Léger"
    },
    features: ["Ajustement de posture naturelle sur 5 axes", "Bout des doigts sensoriel ultra-précis", "Double colonne de calcul à refroidissement liquide"],
    image: "/apexV1.webp" // Real custom image loaded
  },
  {
    id: "valkyrie",
    name: "VORTEX S-9 \"Valkyrie\" (Intendant d'Art)",
    tagline: "L'Intendant d'Art & Précision. Conçu pour la dextérité ultime, les gestes raffinés, la gestion d'oeuvres d'art, et la fluidité athlétique grâcieuse dans votre espace de vie.",
    type: "High-Velocity",
    accentColor: "#f43f5e", // red-pink
    specs: {
      articulation: 98,
      actuators: 92,
      payload: "25 kg",
      energyEfficiency: 85,
      material: "Fibre de Carbone tressée Kevlar & Micro-Graphene"
    },
    features: ["Articulations du poignet fluides à entraînement harmonique", "Boucle de rétroaction musculaire en 1.2ms", "Rotules de chevilles omnidirectionnelles légères"],
    image: "/APEX_S-9_.webp" // Real custom image loaded
  },
  {
    id: "spectre",
    name: "VORTEX T-800 \"Spectre\" (Le Gardien du Temps)",
    tagline: "Le Gardien du Temps. Planification invisible et gestion des flux domestiques de grande envergure. Une présence physique rassurante pour s'interfacer avec vos prestataires extérieurs.",
    type: "Heavy Duty",
    accentColor: "#f59e0b", // amber
    specs: {
      articulation: 72,
      actuators: 48,
      payload: "220 kg",
      energyEfficiency: 78,
      material: "Acier au Bore de protection renforcé & Carrosserie d'Armure"
    },
    features: ["Amortisseurs pneumatiques intégrés", "Étanchéité totale IP68 (résiste à la pluie et à l'extérieur)", "Engrenages planétaires à couple de force élevé"],
    image: "/APEX_T-800_.webp" // Real custom image loaded
  },
  {
    id: "hesper",
    name: "VORTEX N-2 \"Hesper\" (Préparateur Mental)",
    tagline: "Le Préparateur Mental & Émotionnel. Un compagnon chaleureux en biopolymère auto-réparateur douillet, dédié à la bienveillance, au soutien psychique de la famille et du quotidien.",
    type: "Bio-Mimetic",
    accentColor: "#a855f7", // purple
    specs: {
      articulation: 85,
      actuators: 78,
      payload: "35 kg",
      energyEfficiency: 95,
      material: "Enveloppe Élastique de Toucher Doux Auto-Régénérante"
    },
    features: ["Musclage facial pour expressions douces", "Servomoteurs silencieux anti-vibrations", "Régulation thermique de température de peau"],
    image: "/APEX_N-2_Hespe.webp" // Real custom image loaded
  }
];

interface HullShowcaseProps {
  onSelectHull?: (name: string, accentColor: string) => void;
}

export default function HullShowcase({ onSelectHull }: HullShowcaseProps) {
  const [selectedFicheHull, setSelectedFicheHull] = useState<Hull | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpenFiche = (hull: Hull) => {
    setSelectedFicheHull(hull);
    if (onSelectHull) {
      onSelectHull(hull.name, hull.accentColor);
    }
  };

  return (
    <div 
      ref={containerRef}
      id="humanoid-vessels"
      className="relative w-full bg-transparent overflow-visible py-1"
    >
      <div
        className="relative w-full bg-neutral-900/50 backdrop-blur-2xl text-white py-20 sm:py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 z-10"
      >
        <div className="max-w-[1440px] mx-auto relative z-20">
          {/* Background ambient glow */}
          <div className="absolute right-10 top-1/3 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
          
          {/* Title block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 mb-16 relative">
            <div className="lg:col-span-8">
              <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tight leading-[0.95] text-white">
                Chassis de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-700 drop-shadow-[0_8px_20px_rgba(239,68,68,0.25)]">
                  Haute Intendance
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-14">
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                Vendez du temps et de la sérénité. Quel service de conciergerie ou compagnon de vie déployez-vous au quotidien ? Sélectionnez un châssis bionique calibré pour une intendance invisible et parfaite de votre domaine.
              </p>
            </div>
          </div>

          {/* 4 CARDS ON 2 ROWS (GRID: 1 col on mobile, 2 cols on table/desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {HULLS_DATA.map((hull, idx) => {
              const friendlyType = 
                hull.type === "Generalist" ? "Polyvalent Domestique" : 
                hull.type === "High-Velocity" ? "Dynamique Fluide" : 
                hull.type === "Heavy Duty" ? "Force & Protection" : 
                "Toucher Naturel";

               return (
                <motion.div
                  key={hull.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "tween", duration: 1, delay: (idx % 2) * 0.15, ease: [0.42, 0, 0.629, 0.854] }}
                  whileHover={{ y: -6 }}
                  className="group relative h-[360px] sm:h-[420px] md:h-[480px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-950 flex flex-col justify-end p-8 sm:p-10 transition-[border-color,box-shadow] duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-neutral-700/60 will-change-[transform,opacity]"
                >
                  {/* HIGH FIDELITY CHASSIS BACKGROUND IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                    style={{ backgroundImage: `url(${hull.image})` }}
                  />
                  
                  {/* Visual glow layer that accentuates individual color */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none"
                    style={{ background: hull.accentColor }}
                  />

                  {/* Dark gradient for high contrast readability of content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500 z-10" />



                  {/* Content Area */}
                  <div className="relative z-20 text-left max-w-full">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-neutral-200 transition-colors">
                      {hull.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300/90 font-light mb-6 line-clamp-2 leading-relaxed">
                      {hull.tagline}
                    </p>

                    {/* CUSTOM CTA BUTTON THAT OPENS FICHE PRODUIT */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.15)"
                      }}
                      whileTap={{ 
                        scale: 0.95
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 450, 
                        damping: 14 
                      }}
                      onClick={() => handleOpenFiche(hull)}
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-black text-xs font-bold tracking-widest font-mono uppercase shadow-md focus:outline-none cursor-pointer"
                    >
                      <span>Fiche Technique</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </motion.button>
                  </div>

                  {/* Bottom colored accent border */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{ background: hull.accentColor, transformOrigin: 'center' }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* FICHE PRODUIT OVERLAY RENDERING WHEN FICHE IS SELECTED */}
          <AnimatePresence>
            {selectedFicheHull && (
              <FicheProduit
                hull={selectedFicheHull}
                onClose={() => setSelectedFicheHull(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
