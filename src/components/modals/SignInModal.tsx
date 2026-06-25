import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X, Shield, Cpu, LogOut, RefreshCw, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSignedIn: boolean;
  setIsSignedIn: (val: boolean) => void;
  userEmail: string;
  setUserEmail: (email: string) => void;
}

export const SignInModal = ({
  isOpen,
  onClose,
  isSignedIn,
  setIsSignedIn,
  userEmail,
  setUserEmail
}: SignInModalProps) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [emailInput, setEmailInput] = useState(userEmail);

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
            className="glassmorphism-dark w-full max-w-[390px] p-6 rounded-2xl relative border border-white/15 shadow-[0_10px_50px_rgba(244,63,94,0.2)] text-left"
          >
            {/* Close Button */}
            <button 
              onClick={() => { onClose(); }}
              aria-label="Fermer"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-rose-500/30 border border-white/10 hover:border-rose-500/50 transition-all cursor-pointer"
            >
              <X size={14} />
            </button>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield size={18} className="text-rose-500" /> Portail Sécurisé VORTEX
              </h3>
              <p className="text-xs text-gray-400 mt-1">Accédez à votre compte pour configurer vos configurations mentales.</p>
            </div>

            {isSignedIn ? (
              <div className="space-y-4 py-4 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(244,63,94,0.2)] animate-pulse">
                  <Cpu size={28} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Connecté en tant que <span className="text-rose-400 font-bold">{userEmail}</span></p>
                  <p className="text-xs text-neutral-500 mt-1">Accès : Administrateur Humanoïde</p>
                </div>
                <button
                  onClick={() => {
                    setIsSignedIn(false);
                    setUserEmail("");
                    onClose();
                  }}
                  className="w-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-lg py-2.5 text-xs font-mono font-medium tracking-wide transition-all uppercase flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut size={13} /> Se Déconnecter
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!emailInput) return;
                  setIsSigningIn(true);
                  
                  setTimeout(() => {
                    setIsSignedIn(true);
                    setUserEmail(emailInput);
                    setIsSigningIn(false);
                    onClose();
                  }, 1200);
                }}
                className="space-y-4"
              >
                <Input
                  required
                  type="email"
                  label="Adresse e-mail"
                  placeholder="exemple : contact@monhumanoide.fr"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  focusColor="rose"
                />

                <div>
                  <Input
                    required
                    type="password"
                    label="Clé de sécurité (Mot de passe)"
                    placeholder="••••••••••••"
                    focusColor="rose"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSigningIn}
                  variant="rose-gradient"
                  className="mt-2"
                >
                  {isSigningIn ? (
                    <>
                      <RefreshCw size={13} className="animate-spin" /> Connexion en cours...
                    </>
                  ) : (
                    <>
                      S'identifier <ArrowUpRight size={13} />
                    </>
                  )}
                </Button>

                <div className="text-[10px] text-gray-500 text-center font-mono">
                  Sécurisé par le protocole de chiffrement VORTEX.
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SignInModal;
