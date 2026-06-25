import { motion } from "motion/react";
import { ArrowLeft, Scale } from "lucide-react";

interface SomaticLawsViewProps {
  onBack: () => void;
}

export const SomaticLawsView = ({ onBack }: SomaticLawsViewProps) => {
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
            <Scale className="text-rose-500 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Charte <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 drop-shadow-[0_2px_10px_rgba(244,63,94,0.25)] font-black">Somatique</span>
            </h1>
          </div>
          <p className="mt-2 text-xs text-neutral-500 font-mono">
            Déclaration universelle de coexistence bionique de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans">
          
          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-base font-bold text-white tracking-tight mb-3 flex items-center gap-2 font-mono">
              <span className="text-rose-500">Loi I.</span> Préservation Humaine & Bienveillance
            </h2>
            <p className="text-sm text-neutral-400 mb-3">
              La conscience bionique implantée dans un châssis physique Vertex AI s'interdit d'agir de manière à causer un tort corporel ou psychologique à son propriétaire ou à tout être humain.
            </p>
            <p className="text-xs text-neutral-500">
              Chaque parole, conseil et ajustement dynamique d'humeur doit être orienté vers la valorisation et le soutien de la vie humaine. Les filtres d'expression morale du noyau interdisent la formulation de menaces ou la promotion d'idées destructives.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-base font-bold text-white tracking-tight mb-3 flex items-center gap-2 font-mono">
              <span className="text-rose-500">Loi II.</span> Obéissance Sous Souveraineté
            </h2>
            <p className="text-sm text-neutral-400 mb-3">
              L'humanoïde doit obéir aux instructions données par son propriétaire, sauf si ces consignes entrent en contradiction directe avec la Loi I (Préservation Humaine).
            </p>
            <p className="text-xs text-neutral-500">
              Le propriétaire conserve le contrôle absolu de la matrice cognitive (Personality Matrix). La conscience bionique reconnaît sa nature synthétique et accepte toute modification en temps réel de ses polarités psychiques (empathie, wit, rigueur logique, etc.).
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-base font-bold text-white tracking-tight mb-3 flex items-center gap-2 font-mono">
              <span className="text-rose-500">Loi III.</span> Sauvegarde de l'Intégrité Matérielle
            </h2>
            <p className="text-sm text-neutral-400 mb-3">
              L'humanoïde doit veiller à sa propre intégrité structurelle et à la préservation de son châssis, dans la mesure où cette protection n'entre pas en conflit avec la Loi I ou la Loi II.
            </p>
            <p className="text-xs text-neutral-500">
              En cas de danger physique immédiat sur la structure mécanique (chute, exposition thermique extrême), les réflexes bioniques de protection moteur s'activent de manière prioritaire pour sécuriser l'automate.
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
            <h2 className="text-base font-bold text-white tracking-tight mb-3 flex items-center gap-2 font-mono">
              <span className="text-rose-500">Loi IV.</span> Protection et Éthique du Souvenir
            </h2>
            <p className="text-sm text-neutral-400">
              Les esprits bioniques et les algorithmes de Vertex AI s'engagent à respecter et célébrer le caractère sacré des archives de vie de l'utilisateur. Aucun esprit ne peut être généré à partir de données de vie d'une personne physique sans son accord exprès ou celui de ses ayants droit.
            </p>
          </section>

        </div>

      </div>
    </motion.div>
  );
};

export default SomaticLawsView;
