import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { X, Activity, Cpu, Sparkles } from "lucide-react";
import { Hull } from "./HullShowcase";

interface FicheProduitProps {
  hull: Hull;
  onClose: () => void;
}

export function FicheProduit({ hull, onClose }: FicheProduitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOrdered, setIsOrdered] = useState(false);

  // Focus on mount
  useEffect(() => {
    if (ref.current) {
      // Small timeout to let the entrance animation start before scrolling
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [hull.id]);

  return (
    <motion.div
      ref={ref}
      id="fiche-produit-inline"
      initial={{ opacity: 0, height: 0, marginTop: 0, y: 80 }}
      animate={{ opacity: 1, height: "auto", marginTop: 48, y: 0 }}
      exit={{ opacity: 0, height: 0, marginTop: 0, y: 80 }}
      transition={{ 
        height: { type: "spring", stiffness: 100, damping: 22 },
        marginTop: { type: "spring", stiffness: 100, damping: 22 },
        opacity: { duration: 0.25 },
        y: { type: "spring", stiffness: 100, damping: 22 }
      }}
      className="w-full bg-[#09090e] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 scroll-mt-28"
    >

      {/* BACKGROUND IMAGE OF THE CHASSIS - FULL COVER (Takes left half on desktop) */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-auto min-h-[380px] overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 saturate-[1.1] hover:scale-105"
          style={{ backgroundImage: `url(${hull.image})` }}
        />
        {/* Subtle dark layout gradients to guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-[#09090e]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#09090e] hidden md:block z-10" />
        
        {/* Top category label floating badge */}
        <div className="absolute top-6 left-6 z-20">
          <span 
            className="px-4 py-1.5 rounded-full text-[10px] font-mono uppercase font-bold text-white border backdrop-blur-md"
            style={{ 
              borderColor: `${hull.accentColor}40`,
              background: `${hull.accentColor}15`,
            }}
          >
            {hull.type === "Generalist" ? "Polyvalent" : hull.type === "High-Velocity" ? "Fluidité Spatiale" : hull.type === "Heavy Duty" ? "Garde de Sécurité" : "Mimétique Organique"}
          </span>
        </div>

        {/* Model info text watermark at bottom left for mobile */}
        <div className="absolute bottom-6 left-6 z-20 block md:hidden">
          <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest">DOSSIER TECHNIQUE VORTEX_</h4>
          <h2 className="text-2xl font-bold text-white tracking-tight">{hull.name.split('"')[1] || hull.name}</h2>
        </div>
      </div>

      {/* TECHNICAL DETAILS SIDE PANEL (Right on desktop) */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-between text-left relative z-20 bg-[#09090e]">
        
        {/* Absolute Close button */}
        <div className="absolute top-6 right-6 z-30">
          <button
            onClick={() => {
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300 focus:outline-none cursor-pointer"
            title="Fermer la fiche"
          >
            <X size={18} />
          </button>
        </div>

        <div>
          {/* Header info */}
          <div className="mb-8 pr-12">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] font-bold block mb-1">
              Fiche Spécification — VORTEX
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              {hull.name}
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
              {hull.tagline}
            </p>
          </div>

          {/* Technical grid stats */}
          <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5 mb-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Capacité utile</span>
              <span className="text-sm text-neutral-200 font-bold">{hull.specs.payload}</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Moteurs Articulaires</span>
              <span className="text-sm text-neutral-200 font-bold">{hull.specs.actuators} Servo-actuateurs</span>
            </div>
            <div className="col-span-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Composition structurelle</span>
              <span className="text-xs text-neutral-300 font-medium leading-normal">{hull.specs.material}</span>
            </div>
          </div>

          {/* Interactive radar coordinate visualizer */}
          <div className="w-full p-4 rounded-xl bg-black/40 border border-white/5 mb-6 flex items-center gap-4 relative overflow-hidden">
            <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/5 rounded-lg relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <circle cx="50" cy="50" r="45" fill="none" stroke={hull.accentColor} strokeWidth="1" strokeDasharray="3, 3" className="animate-spin-slow" />
                <circle cx="50" cy="50" r="20" fill="none" stroke={hull.accentColor} strokeWidth="1.5" />
                <circle cx="50" cy="50" r="5" fill="#ffffff" />
                <line x1="50" y1="0" x2="50" y2="100" stroke={hull.accentColor} strokeWidth="0.5" opacity="0.3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke={hull.accentColor} strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-white/50 tracking-wide uppercase">
                <Activity size={11} className="text-emerald-400 animate-pulse" /> Diagnostique Synaptique
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Noyau actif autonome, étalonnage de l'impulsion motrice à <span className="text-white font-semibold">99.98%</span> d'efficacité.
              </p>
            </div>
          </div>

          {/* Micro progress-bars */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between items-center text-xs text-neutral-400 mb-1">
                <span className="font-sans">Fluidité spatiale globale :</span>
                <span className="font-mono text-white font-bold">{hull.specs.articulation}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${hull.specs.articulation}%`,
                    backgroundColor: hull.accentColor 
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-neutral-400 mb-1">
                <span className="font-sans">Rendement de batterie synaptique :</span>
                <span className="font-mono text-white font-bold">{hull.specs.energyEfficiency}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${hull.specs.energyEfficiency}%`,
                    backgroundColor: hull.accentColor 
                  }}
                />
              </div>
            </div>
          </div>

          {/* Technologies list */}
          <div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-2.5">
              Technologies de Pointe d'évaluation technique
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {hull.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" 
                    style={{ backgroundColor: hull.accentColor }} 
                  />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Footer Call-to-action */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-neutral-500">
            CODE : EXP-{hull.id.toUpperCase()}-2026
          </div>
          
          {isOrdered ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Activity size={12} className="animate-pulse" /> Demande Envoyée
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ 
                scale: 0.95
              }}
              transition={{ 
                type: "spring", 
                stiffness: 450, 
                damping: 14 
              }}
              onClick={() => {
                setIsOrdered(true);
              }}
              className="px-5 py-2.5 rounded-full font-mono text-[11px] font-bold text-black tracking-wider uppercase flex items-center gap-1.5 cursor-pointer"
              style={{ backgroundColor: "#ffffff" }}
            >
              Commander l'Intégration <Sparkles size={11} />
            </motion.button>
          )}
        </div>

      </div>
    </motion.div>
  );
}
