import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X, Sparkles, Check, RefreshCw, Zap, Cpu, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface GetStartedWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedWizard = ({
  isOpen,
  onClose
}: GetStartedWizardProps) => {
  const [wizardStep, setWizardStep] = useState(1);
  const [orgName, setOrgName] = useState("");
  const [selectedLLMs, setSelectedLLMs] = useState<string[]>(["gpt4", "claude3", "gemini"]);
  const [brainStatus, setBrainStatus] = useState<"idle" | "configuring" | "synthetic_training" | "active">("idle");
  const [trainingLog, setTrainingLog] = useState<string[]>([]);

  // Trigger synth train sequence
  const startBrainCreation = () => {
    setBrainStatus("configuring");
    setTrainingLog(["Initialisation de l'architecture cognitive...", "Cartographie des paramètres d'humeur..."]);

    setTimeout(() => {
      setBrainStatus("synthetic_training");
      setTrainingLog(prev => [...prev, "Injection des valeurs éthiques...", "Connexion au module de dialogue...", "Liaison des règles de comportement...", "Optimisation des filtres d'expression..."]);
    }, 1500);

    setTimeout(() => {
      setTrainingLog(prev => [...prev, "Compilation des traits de caractère...", "Synchronisation neuronale terminée...", "Esprit Virtuel Opérationnel ! ✅"]);
      setBrainStatus("active");
    }, 3800);
  };

  const handleClose = () => {
    onClose();
    setWizardStep(1);
    setBrainStatus("idle");
    setOrgName("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-[12px] flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="glassmorphism-dark w-full max-w-[460px] p-6 rounded-2xl relative border border-white/15 shadow-[0_10px_50px_rgba(6,182,212,0.15)] text-left"
          >
            {/* Close helper */}
            <button 
              onClick={handleClose}
              aria-label="Fermer"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-rose-500/30 border border-white/10 hover:border-rose-500/50 transition-all cursor-pointer"
            >
              <X size={14} />
            </button>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">Paramétrer l'Esprit</h3>
                <div className="flex gap-1.5 mt-1">
                  <span className={`w-3 h-1 rounded-full ${wizardStep >= 1 ? 'bg-rose-500' : 'bg-white/10'} transition-all`} />
                  <span className={`w-3 h-1 rounded-full ${wizardStep >= 2 ? 'bg-rose-500' : 'bg-white/10'} transition-all`} />
                  <span className={`w-3 h-1 rounded-full ${wizardStep >= 3 ? 'bg-rose-500' : 'bg-white/10'} transition-all`} />
                </div>
              </div>
            </div>

            {wizardStep === 1 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-neutral-200">Donnez un nom à cette personnalité</h4>
                <p className="text-xs text-neutral-400">Nous construisons un profil d'intelligence sur mesure. Vos données restent entièrement privées et cryptées localement.</p>
                <Input
                  type="text"
                  placeholder="Ex : Alfred l'Intendant"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  focusColor="cyan"
                />
                <Button
                  onClick={() => {
                    if (!orgName.trim()) return;
                    setWizardStep(2);
                  }}
                  variant="glass"
                  className="mt-2 text-white bg-rose-600 hover:bg-rose-700 hover:border-transparent py-2.5 flex justify-center"
                >
                  <span className="flex items-center gap-1">
                    Sélectionner le Socle <ArrowUpRight size={13} />
                  </span>
                </Button>
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-neutral-200">Sélectionnez le fond d'esprit de base</h4>
                <p className="text-xs text-neutral-400">Choisissez l'algorithme fondamental qui servira de socle à la pensée de l'humanoïde.</p>
                
                <div className="space-y-2">
                  {[
                    { id: "gpt4", name: "Esprit Créatif & Social", desc: "Précision littéraire et relationnelle d'exception" },
                    { id: "claude3", name: "Esprit Analytique & Logique", desc: "Idéal pour l'aide aux tâches domestiques complexes" },
                    { id: "gemini", name: "Esprit Polyvalent", desc: "Apprentissage ultra-rapide au quotidien" },
                    { id: "llama3", name: "Esprit Intime & Local", desc: "Sécurité maximale avec traitement hors-ligne" }
                  ].map(llm => {
                    const isSelected = selectedLLMs.includes(llm.id);
                    return (
                      <div 
                        key={llm.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedLLMs(selectedLLMs.filter(p => p !== llm.id));
                          } else {
                            setSelectedLLMs([...selectedLLMs, llm.id]);
                          }
                        }}
                        className={`p-3 rounded-lg border-2 transition-all cursor-pointer flex items-center justify-between ${isSelected ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-black/40 border-white/5 hover:border-white/15'}`}
                      >
                        <div>
                          <span className="text-xs font-semibold text-white block">{llm.name}</span>
                          <span className="text-[10px] text-gray-500 font-mono">{llm.desc}</span>
                        </div>
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-cyan-500 text-black flex items-center justify-center">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-white/20" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => { setWizardStep(1); }}
                    className="w-1/3 bg-white/5 hover:bg-white/10 text-neutral-300 font-semibold text-xs tracking-wider rounded-lg py-2.5 uppercase transition-all cursor-pointer"
                  >
                    Retour
                  </button>
                  <button
                    disabled={selectedLLMs.length === 0}
                    onClick={() => {
                      setWizardStep(3);
                      startBrainCreation();
                    }}
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs tracking-wider rounded-lg py-2.5 uppercase transition-all flex items-center justify-center gap-1 disabled:opacity-50 cursor-pointer"
                  >
                    Générer la Conscience <Zap size={12} className="animate-bounce" />
                  </button>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-neutral-200">Génération Neuronale de l'Esprit</h4>
                
                {/* Virtual compilation terminal */}
                <div className="bg-black/80 border border-white/10 p-3.5 rounded-lg h-[150px] overflow-y-auto font-mono text-[9px] text-green-400 space-y-1 scrollbar-thin">
                  <div className="text-rose-400 font-bold">SYSTEM OVERLORD INIT: STARTING ROUTE STACK</div>
                  {trainingLog.map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-gray-500">[{i}]</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  {brainStatus === "synthetic_training" && (
                    <div className="text-cyan-400 animate-pulse flex items-center gap-1.5 mt-2">
                      <RefreshCw size={10} className="animate-spin" /> Cartographie des modules comportementaux...
                    </div>
                  )}
                </div>

                <div className="border border-white/5 bg-[#ffffff02] p-3 rounded-lg overflow-hidden flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 animate-pulse flex items-center justify-center">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Nom du Profil d'AI</span>
                    <span className="text-xs text-white font-semibold">{orgName || "Humanoïde sans nom"}</span>
                  </div>
                </div>

                <button
                  disabled={brainStatus !== "active"}
                  onClick={() => {
                    onClose();
                    setWizardStep(1);
                    setBrainStatus("idle");
                  }}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-neutral-800 disabled:text-neutral-500 text-black disabled:border-transparent font-semibold text-xs tracking-wider rounded-lg py-3 uppercase transition-all flex items-center justify-center gap-1 shadow-lg cursor-pointer"
                >
                  {brainStatus === "active" ? "Injecter l'esprit dans l'humanoïde ↗" : "Calcul comportemental... veuillez patienter"}
                </button>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default GetStartedWizard;
