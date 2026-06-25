import { motion } from "motion/react";
import { ArrowLeft, Shield } from "lucide-react";

interface PrivacyViewProps {
  onBack: () => void;
}

export const PrivacyView = ({ onBack }: PrivacyViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 relative z-10 text-left min-h-[70vh]"
    >
      {/* Background glowing effects */}
      <div className="absolute left-1/4 top-20 w-[400px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-20 w-[400px] h-[400px] bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border border-white/10 hover:border-white/20 rounded-full px-5 py-2.5 hover:bg-white/5"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Retour à l'accueil
        </button>

        {/* Title Area */}
        <div className="border-b border-white/10 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <Shield className="text-rose-500 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 drop-shadow-[0_2px_10px_rgba(244,63,94,0.25)] font-black">Confidentialité</span>
            </h1>
          </div>
          <p className="mt-2 text-xs text-neutral-500 font-mono">
            Dernière révision : 25 juin 2026 — Version 2.0.4-Hermetic
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans">
          
          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-rose-500">01.</span> Souveraineté Synaptique Locale
            </h2>
            <p>
              Chez Vertex AI, la protection de votre intégrité mentale et de la sphère privée de votre domaine est absolue. Toutes nos architectures bioniques sont régies par le principe de <strong className="text-white">Souveraineté Synaptique Locale</strong>.
            </p>
            <p className="mt-2">
              Chaque trait d'esprit, souvenir partagé ou routine comportementale implanté dans un humanoïde de type VORTEX est chiffré et confiné dans le stockage physique de l'automate. Aucune information bionique ne transite ni n'est stockée sur des serveurs distants.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-rose-500">02.</span> Traitement des Données Cognitives
            </h2>
            <p>
              Nos modèles d'intelligence artificielle (GPT-4o, Claude 3.5, Gemini 1.5, Llama 3) traitent les requêtes uniquement pour adapter la dialectique et la motricité de l'humanoïde en temps réel.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-neutral-400">
              <li><strong className="text-white">Zéro Télémétrie :</strong> Aucun log d'interaction vocale ou gestuelle n'est transmis à nos serveurs.</li>
              <li><strong className="text-white">Stockage Éphémère :</strong> Les variables d'états d'humeur sont stockées temporairement dans le noyau volatil et s'effacent lors de la mise hors tension.</li>
              <li><strong className="text-white">Chiffrement Hermétique :</strong> Le disque dur synaptique intègre une puce de sécurité HSM (Hardware Security Module) interdisant toute extraction physique de données.</li>
            </ul>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="text-rose-500">03.</span> Droits d'Accès et de Réinitialisation
            </h2>
            <p>
              Conformément à la Charte d'usage d'esprit virtuel de 2026, vous conservez un droit inaliénable et immédiat de purge.
            </p>
            <p className="mt-2">
              L'utilisateur dispose d'un bouton physique d'urgence d'effacement de mémoire ("Total Reset") situé sous le volet occipital du châssis. Ce bouton procède à une démagnétisation complète des couches synaptiques en moins de 3 secondes, ramenant l'humanoïde à son état d'usine neutre et vierge de tout souvenir.
            </p>
          </section>

        </div>

      </div>
    </motion.div>
  );
};

export default PrivacyView;
