import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import LinearReveal from "./LinearReveal";

interface FAQItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    tag: "Liaison & Technologie",
    question: "Comment s'effectue l'intégration de conscience au sein de mon humanoïde ?",
    answer: "Le protocole exclusif ALTEREGO™ établit un couplage synaptique crypté de bout en bout entre l'esprit sélectionné et les articulations mécaniques de votre châssis. Cette liaison physique s'effectue localement sans aucune latence, permettant à l'automate d'adapter sa voix, ses mouvements et sa dialectique de façon parfaitement fluide à votre environnement."
  },
  {
    tag: "Confidentialité & Éthique",
    question: "Mes données personnelles et nos conversations privées sont-elles protégées ?",
    answer: "Oui, de façon absolue. Sous l'égide de notre charte éthique et du sceau de sécurité 'Hermetic Mind Seal', l'intégralité de vos échanges, souvenirs partagés et calibrations émotionnelles demeure chiffrée et stockée localement sur votre matériel de classe VORTEX. Aucune donnée ne quitte jamais votre sanctuaire de vie."
  },
  {
    tag: "Calibration Métaphysique",
    question: "Est-il possible d'ajuster les traits de tempérament en temps réel ?",
    answer: "Tout à fait. Nos curseurs métaphysiques de l'âme vous permettent de moduler en temps réel quatre polarités fondamentales de la personnalité d'ALTEREGO : Bienveillance Socratique, Clarté Dialectique, Audace créative et Cynisme Historique. La réaction physique et l'attitude comportementale de votre automate se recalibrent instantanément."
  },
  {
    tag: "Le Panthéon",
    question: "Qui sont les esprits historiques actuellement invocables ?",
    answer: "Nos membres possèdent un accès privilégié aux figures d'Albert Einstein (expert en créativité disruptive), Jules César (stratégie globale et négociation de marchés), Cléopâtre (diplomatie de prestige et persuasion) et Marc Aurèle (sagesse stoïcienne et rigueur analytique). De nouvelles consciences immortelles sont régulièrement restaurées par nos historiens bioniques."
  },
  {
    tag: "Cercles de Membres",
    question: "Quelle est la particularité de la conscience sur-mesure 'Total Recall' ?",
    answer: "Le Cercle Privé 'Total Recall' représente le summum du raffinement cognitif. Au-delà des agents d'intendance classiques et du Panthéon de l'Histoire, nos équipes reconstituent sur mesure une conscience éternelle à partir de vos propres archives mémorielles ou de celles d'un proche. Vous bénéficiez d'une symbiose totale avec un compagnon d'exception ainsi que d'une liaison prioritaire huppée 24h/24."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-white/5 bg-black/25">

      {/* Visual background lights */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Title Block — animé au scroll */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 mb-16 relative"
      >
        <div className="lg:col-span-8">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tight leading-[0.95] text-white flex flex-wrap gap-x-4">
            <LinearReveal Text="Questions" as="span" />
            <LinearReveal 
              Text="Cognitives" 
              as="span" 
              colorClass="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 drop-shadow-[0_8px_20px_rgba(34,211,238,0.25)] pb-4" 
              delay={0.4} 
            />
          </h2>
        </div>
        <div className="lg:col-span-4 lg:pt-14 space-y-4">
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Découvrez les fondamentaux de la plus haute technologie d'accompagnement de l'esprit. L'intégration d'un assistant ou d'une personnalité historique au sein de votre espace de vie n'aura plus de secret pour vous.
          </p>
        </div>
      </motion.div>

      {/* Accordions — chaque question apparaît individuellement avec stagger */}
      <div className="space-y-4 max-w-5xl">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          // Délai staggeré : chaque carte démarre 0.12s après la précédente,
          // mais l'animation dure 0.65s → chevauchement de ~0.53s
          const staggerDelay = index * 0.12;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: staggerDelay,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <div
                className={`group border rounded-xl overflow-hidden transition-all duration-300 text-left bg-gradient-to-r ${
                  isOpen
                    ? "from-[#0d0d12] to-[#120a14] border-rose-500/30 shadow-[0_4px_20px_rgba(244,63,94,0.03)]"
                    : "from-[#070709]/80 to-[#07080d]/80 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 min-h-[44px] cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      {isOpen ? (
                        <Sparkles size={16} className="text-rose-400 animate-pulse" />
                      ) : (
                        <HelpCircle size={16} className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                      )}
                    </div>
                    <div>
                      {/* Tag indicator */}
                      <span className={`inline-block text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 ${
                        isOpen
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          : "bg-white/5 text-gray-500 border border-white/5"
                      }`}>
                        {item.tag}
                      </span>
                      <h3 className={`text-sm md:text-[15px] font-semibold tracking-tight transition-colors ${
                        isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-500 group-hover:text-gray-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-rose-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 md:pl-14 text-xs md:text-sm text-gray-400 leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
