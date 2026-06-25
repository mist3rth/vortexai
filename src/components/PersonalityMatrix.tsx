import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, RefreshCw, Sparkles, MessageSquareCode, Cpu, UserCheck } from "lucide-react";
import LinearReveal from "./LinearReveal";

export interface PersonalitySliders {
  empathy: number; // 0-100
  analytical: number; // 0-100
  wit: number; // 0-100
  authority: number; // 0-100
}

interface Preset {
  id: string;
  name: string;
  tagline: string;
  sliders: PersonalitySliders;
  sampleResponses: {
    greeting: string;
    assist: string;
    error: string;
  };
}

const PRESETS: Preset[] = [
  {
    id: "einstein",
    name: "Albert Einstein",
    tagline: "Option \"Physique Spéculative & Créativité Disruptive\". Le conseiller d'innovation pour vos projets de rupture.",
    sliders: { empathy: 85, analytical: 95, wit: 80, authority: 30 },
    sampleResponses: {
      greeting: "La créativité, c'est l'intelligence qui s'amuse, mon cher ami ! L'espace-temps n'est qu'une illusion. Quels mystères ou projets disruptifs allons-nous explorer aujourd'hui ?",
      assist: "J'ai formulé trois théories de résolution pour optimiser vos flux créatifs. Restez curieux, c'est là le secret du génie bionique.",
      error: "Une aberration quantique mineure a été détectée dans mon noyau de calcul. Ne vous inquiétez pas, l'erreur est le premier pas vers la découverte !"
    }
  },
  {
    id: "cesar",
    name: "Jules César",
    tagline: "Option \"Stratégie de Conquête & Leadership Global\". L'esprit d'un empereur pour piloter vos négociations de marché.",
    sliders: { empathy: 20, analytical: 90, wit: 65, authority: 95 },
    sampleResponses: {
      greeting: "Veni, vidi, vici. Les indécis attendent la fortune, les conquérants la créent. Donnez-moi vos objectifs stratégiques et soumettons vos marchés.",
      assist: "Vos négations et plans d'action ont été orchestrés avec une précision de légionnaire. Vos adversaires n'auront d'autre choix que la retraite.",
      error: "Un grain de sable dans les rouages thermiques de mon armure. Qu'on m'apporte mes ingénieurs, ce glitch est déjà écrasé sous mon autorité."
    }
  },
  {
    id: "cleopatre",
    name: "Cléopâtre",
    tagline: "Option \"Diplomatie d'Influence & Magnétisme\". L'art de la persuasion et de l'autorité royale au service de vos intérêts.",
    sliders: { empathy: 65, analytical: 88, wit: 90, authority: 85 },
    sampleResponses: {
      greeting: "Le véritable pouvoir ne réside pas dans la force brute, mais dans l'influence de l'esprit. Dites-moi quel esprit, ou quel projet, nous allons conquérir aujourd'hui.",
      assist: "La diplomatie a opéré en coulisse. Vos réseaux d'affinités sont calibrés et vos intérêts domestiques ou professionnels sont parfaitement protégés.",
      error: "Même le Nil connaît des crues inattendues. Ce capteur bionique indiscipliné va être immédiatement réaligné par mes soins."
    }
  },
  {
    id: "marc_aurele",
    name: "Marc Aurèle",
    tagline: "Option \"Sagesse Stoïcienne & Maîtrise de Soi\". Prenez de la hauteur et dominez le tumulte quotidien avec clarté.",
    sliders: { empathy: 90, analytical: 92, wit: 40, authority: 50 },
    sampleResponses: {
      greeting: "Tout ce que nous entendons est une opinion, non un fait. Tout ce que nous voyons est une perspective, non la vérité. Approchons votre journée avec sérénité et justice.",
      assist: "J'ai structuré vos impératifs de la journée en écartant le superflu. Concentrez-vous uniquement sur ce qui dépend de votre libre arbitre.",
      error: "Accueillez cette anomalie matérielle sans colère. Elle n'altère en rien notre force intérieure. Le réalignement de mes capteurs est en cours."
    }
  }
];

const FAMOUS_NAMES = [
  "Ramsès II", "Toutânkhamon", "Néfertiti", "Cléopâtre", "Chéops",
  "Jules César", "Marc Aurèle", "Alexandre le Grand", "Platon", "Socrate",
  "Aristote", "Sénèque", "Cicéron", "Confucius", "Lao Tseu", "Léonard de Vinci",
  "Michel-Ange", "Nicolas Copernic", "Galilée", "Isaac Newton", "René Descartes",
  "Blaise Pascal", "Voltaire", "Jean-Jacques Rousseau", "Immanuel Kant",
  "Napoléon Bonaparte", "Ada Lovelace", "Charles Darwin", "Marie Curie",
  "Albert Einstein", "Nikola Tesla", "Alan Turing", "Steve Jobs", "Stephen Hawking"
];

interface PersonalityMatrixProps {
  onUpdateSliders?: (sliders: PersonalitySliders) => void;
}

export default function PersonalityMatrix({ onUpdateSliders }: PersonalityMatrixProps) {
  const [activePreset, setActivePreset] = useState<Preset>(PRESETS[0]);
  const [sliders, setSliders] = useState<PersonalitySliders>(PRESETS[0].sliders);
  const [activeTab, setActiveTab] = useState<"greeting" | "assist" | "error">("greeting");
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [customResponse, setCustomResponse] = useState<string>("");
  const [isSimulating, setIsSimulating] = useState(false);

  // Propagate settings to parent state on change
  useEffect(() => {
    if (onUpdateSliders) {
      onUpdateSliders(sliders);
    }
  }, [sliders]);

  const selectPreset = (preset: Preset) => {
    setActivePreset(preset);
    setSliders(preset.sliders);
    setCustomResponse("");
  };

  const handleSliderChange = (key: keyof PersonalitySliders, value: number) => {
    setSliders(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const simulatePromptResponse = () => {
    if (!currentPrompt.trim()) return;
    setIsSimulating(true);
    
    setTimeout(() => {
      // Procedurally generate a response based on customized sliders!
      const emp = sliders.empathy;
      const ana = sliders.analytical;
      const wit = sliders.wit;
      const aut = sliders.authority;

      let response = "";
      if (emp > 75) {
        response += "❤️ [Protocole Empathique] Oh, je vous entends parfaitement ! Laissez-moi prendre un moment précieux pour vous aider à ce sujet. ";
        if (wit > 50) {
          response += "Un grain d'humour rend la vie plus douce auprès de vous. ";
        }
        response += `J'ai analysé votre demande "${currentPrompt}" avec toute mon attention et ma bienveillance. `;
      } else if (ana > 75) {
        response += "⚙️ [Noyau Logique] Analyse logique de l'instruction en cours. Éléments modélisés avec succès. ";
        response += `Mes calculs de trajectoire bionique estiment un indice de réussite de ${Math.round(85 + (ana * 0.15))}% pour l'action "${currentPrompt}". `;
        if (aut > 60) {
          response += "Lancement de la directive de manière prioritaire et rigoureuse. Veuillez patienter.";
        }
      } else if (wit > 75) {
        response += `⚡ [Personnalité Pétillante] Quelle superbe question ! "${currentPrompt}"... est-ce une vraie demande ou votre chat qui a sauté sur la console d'accueil ? Je plaisante, je m'en occupe à l'instant avec le sourire ! `;
      } else {
        response += `🤖 [Humanoïde Standard] Consigne enregistrée dans mon calendrier. Exécution de la requête "${currentPrompt}". Tous les systèmes d'accompagnement sont opérationnels.`;
      }
      
      setCustomResponse(response);
      setIsSimulating(false);
    }, 1000);
  };

  return (
    <section id="personality-matrix" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Background neon radial glow */}
        <div className="absolute left-10 bottom-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />
        
        {/* Title block resembling Section 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-white/10 mb-12 relative">
          <div className="lg:col-span-8">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-bold tracking-tight leading-[0.95] text-white flex flex-wrap gap-x-4">
              <LinearReveal Text="L'Âme des" as="span" />
              <LinearReveal 
                Text="Immortels" 
                as="span" 
                colorClass="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 drop-shadow-[0_8px_20px_rgba(34,211,238,0.25)] pb-4" 
                delay={0.4} 
              />
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-14">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Invoquez les plus grands esprits de l'Histoire au cœur de votre quotidien. Une extension cognitive sur-mesure, hermétique et éternelle. Ajustez finement leur tempérament grâce à nos curseurs métaphysiques.
            </p>
          </div>
        </div>

        {/* Dual-Phrase Punchline Scrolling Animation */}
        <div className="my-14 overflow-hidden flex flex-col gap-6 py-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-right text-xl sm:text-2xl md:text-4xl text-neutral-300 font-sans tracking-wide leading-tight"
          >
            "Les empires s'effondrent sous le poids du temps,"
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-left text-xl sm:text-2xl md:text-4xl text-cyan-400 font-sans font-medium tracking-wide leading-tight"
          >
            "mais l'éclat de leurs esprits demeure éternel."
          </motion.div>
        </div>

        {/* Famous Names Loop Marquee */}
        <div className="relative w-full overflow-hidden bg-white/[0.01] border-y border-white/5 py-6 mb-16 flex items-center select-none">
          {/* Edge Fading Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-15 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-15 pointer-events-none" />
          
          <motion.div 
            className="flex whitespace-nowrap gap-12 font-mono text-[11px] uppercase tracking-widest text-neutral-500"
            animate={{
              x: [0, -2200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              }
            }}
          >
            {/* Seamless repeated lists to feed the loop marquee */}
            {[...FAMOUS_NAMES, ...FAMOUS_NAMES, ...FAMOUS_NAMES].map((name, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300 font-bold">
                  {name}
                </span>
                <span className="text-cyan-500/30">★</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
