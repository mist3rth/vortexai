import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X, Send } from "lucide-react";
import { Input } from "../ui/Input";

interface PrivateExchangeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateExchangeDrawer = ({
  isOpen,
  onClose
}: PrivateExchangeDrawerProps) => {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "ai"; text: string; time: string }>>([
    { role: "ai", text: "Bienvenue chez Vortex AI. Comment notre équipe d'architectes cognitifs peut-elle personnaliser votre humanoïde aujourd'hui ?", time: "À l'instant" }
  ]);

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { 
      role: "user" as const, 
      text: chatInput, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput("");

    // Simulated responses based on keyword answers
    setTimeout(() => {
      let aiResponseText = "Votre message a bien été reçu par notre équipe d'architectes cognitifs. Un conseiller va prendre contact avec vous sur votre fréquence sécurisée très rapidement.";
      const lower = chatInput.toLowerCase();
      if (lower.includes("price") || lower.includes("pricing") || lower.includes("cout") || lower.includes("tarif") || lower.includes("prix")) {
        aiResponseText = "Notre service de personnalisation mentale s'adapte à vos besoins. Nous proposons un forfait découverte à partir de 49€/mois pour configurer un tempérament simple sur votre robot de maison.";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("bonjour") || lower.includes("hey")) {
        aiResponseText = "Bonjour à vous ! N'hésitez pas à nous poser des questions sur les options disponibles pour éduquer l'esprit de votre humanoïde (humour, religion, règles de politesse).";
      } else if (lower.includes("model") || lower.includes("ia") || lower.includes("intelligence") || lower.includes("cerveau")) {
        aiResponseText = "Nous travaillons avec les modèles d'AI les plus performants du marché (GPT-4o, Claude 3.5, Gemini 1.5). Chacun apporte un style d'esprit unique à votre compagnon physique.";
      }
      
      setChatMessages(prev => [...prev, {
        role: "ai" as const,
        text: aiResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-[10px] flex justify-end"
        >
          {/* Clear shield backdrop */}
          <div className="flex-1" onClick={() => { onClose(); }} />

          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="w-full max-w-[460px] h-full bg-[#060609] border-l border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(6,182,212,0.15)] relative text-left"
          >
            {/* Header inside connections panel */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                  <span className="font-mono text-xs font-bold tracking-widest text-[#a1a1aa] uppercase">Canal d'Échange Privé</span>
                </div>
                <button 
                  onClick={() => { onClose(); }}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-500/20 text-neutral-300 hover:text-white border border-white/10 hover:border-rose-500/30 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="py-6 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                   Échangez avec nos experts
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Vous souhaitez des traits de caractère spécifiques, une religion particulière pour votre humanoïde, ou planifier une séance d'intégration ? Échangez en direct avec l'équipe VORTEX.
                </p>
              </div>

              {/* Simulated AI chat box inside side drawer */}
              <div className="bg-black/60 border border-white/10 rounded-xl p-4 h-[280px] overflow-y-auto space-y-4 scrollbar-thin flex flex-col justify-end">
                <div className="overflow-y-auto space-y-3 pr-1">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${msg.role === 'user' ? 'bg-rose-500/20 text-white border border-rose-500/35 rounded-tr-none' : 'bg-white/5 text-[#d4d4d8] border border-white/5 rounded-tl-none'}`}>
                        {msg.text}
                      </div>
                      <span className="text-[8px] text-gray-500 font-mono mt-1 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Chat Form */}
              <div className="mt-3 flex gap-2">
                <Input
                  type="text"
                  placeholder="Posez vos questions sur les profils, tarifs..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
                  focusColor="cyan"
                  className="flex-1"
                />
                <button
                  onClick={sendChatMessage}
                  className="bg-cyan-600 hover:bg-cyan-700 text-black font-semibold text-xs rounded-lg px-4 py-2.5 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send size={13} />
                </button>
              </div>
            </div>

            {/* Bottom connect specifications */}
            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block uppercase">Adresse de Liaison</span>
                  <span className="text-white font-medium">contact@vortexai.com</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block uppercase">Délai de Réponse</span>
                  <span className="text-white font-medium">&lt; 15 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default PrivateExchangeDrawer;
