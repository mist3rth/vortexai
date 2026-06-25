import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenuDrawer = ({
  isOpen,
  onClose
}: MobileMenuDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#000000a0] backdrop-blur-[10px] flex justify-end"
        >
          {/* Soft transparent close block */}
          <div className="flex-1" onClick={() => { onClose(); }} />

          {/* Realistic neon glassmorphic slider panel */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="w-full max-w-[420px] h-full bg-[#07070a] border-l border-white/10 p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(244,63,94,0.15)] relative text-left"
          >
            {/* Top drawer control */}
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className="font-mono text-xs tracking-widest text-[#a1a1aa] uppercase font-bold">Menu de Navigation</span>
                <button 
                  onClick={() => { onClose(); }}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-500/20 text-neutral-300 hover:text-white border border-white/10 hover:border-rose-500/30 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Simulated list links */}
              <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight text-white mb-10 pl-2">
                <a href="#humanoid-vessels" onClick={() => { onClose(); }} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">01.</span> Votre Humanoïde
                </a>
                <a href="#cognitive-sync" onClick={() => { onClose(); }} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">02.</span> Dessiner son Âme
                </a>
                <a href="#synapse-connections" onClick={() => { onClose(); }} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">03.</span> Liaison Neuronale
                </a>
                <a href="#clubs-pricing" onClick={() => { onClose(); }} className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">04.</span> Tarifs Membres
                </a>
              </div>
            </div>

            {/* Bottom drawer system logs */}
            <div className="border-t border-white/10 pt-6">
              <div className="text-xs font-mono text-gray-500 space-y-1">
                <div className="flex justify-between"><span>SERVICES COMPORTEMENTAUX:</span> <span className="text-emerald-400">ACTIFS</span></div>
                <div className="flex justify-between"><span>MOTEUR GENERAL:</span> <span className="text-cyan-400">HYBRID_LLM_v4</span></div>
                <div className="flex justify-between"><span>FREQUENCE NEURONALE:</span> <span>92.4 GHZ</span></div>
              </div>
              <div className="mt-4 text-[10px] text-gray-600 font-mono text-center">
                © 2026 VORTEX AI Inc. Tous droits réservés.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenuDrawer;
