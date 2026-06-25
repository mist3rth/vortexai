import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (id: string) => void;
}

export const MobileMenuDrawer = ({
  isOpen,
  onClose,
  onNavigate
}: MobileMenuDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-[#000000a0] backdrop-blur-[10px] flex justify-end"
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

              {/* Navigation list buttons */}
              <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight text-white mb-10 pl-2">
                <button 
                  onClick={() => {
                    onClose();
                    onNavigate?.("humanoid-vessels");
                  }} 
                  className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer text-white font-bold text-2xl font-sans"
                >
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">01.</span> Votre Humanoïde
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onNavigate?.("cognitive-sync");
                  }} 
                  className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer text-white font-bold text-2xl font-sans"
                >
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">02.</span> Dessiner son Âme
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onNavigate?.("synapse-connections");
                  }} 
                  className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer text-white font-bold text-2xl font-sans"
                >
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">03.</span> Liaison Neuronale
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onNavigate?.("clubs-pricing");
                  }} 
                  className="hover:text-rose-400 hover:translate-x-1 duration-200 transition-all flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer text-white font-bold text-2xl font-sans"
                >
                  <span className="text-gray-600 text-sm font-mono tracking-wider font-medium mr-2">04.</span> Tarifs Membres
                </button>
              </div>
            </div>

            <div />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenuDrawer;
