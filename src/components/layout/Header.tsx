import { motion } from "motion/react";
import { User, Menu, Cpu } from "lucide-react";
import { Button } from "../ui/Button";

interface HeaderProps {
  scrollY: number;
  isSignedIn: boolean;
  userEmail: string;
  setIsSignModalOpen: (val: boolean) => void;
  setIsMenuOpen: (val: boolean) => void;
  onNavigate?: (id: string) => void;
  onGoHome?: () => void;
}

export const Header = ({
  scrollY,
  isSignedIn,
  userEmail,
  setIsSignModalOpen,
  setIsMenuOpen,
  onNavigate,
  onGoHome
}: HeaderProps) => {
  const triggerLogoEasterEgg = () => {
    // Logo effect (sound removed)
  };

  const handleLogoClick = () => {
    triggerLogoEasterEgg();
    onGoHome?.();
  };

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-[padding,background-color,border-color,box-shadow] duration-300 ease-out border-b bg-black/10 backdrop-blur-[24px] ${
      scrollY > 2 
        ? "bg-black/30 border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-2" 
        : "border-transparent py-4 lg:py-6"
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO: VORTEXAI */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={handleLogoClick}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md group-hover:bg-cyan-400/35 transition-all duration-300" />
            
            <svg 
              viewBox="0 0 100 100" 
              className="w-8 h-8 text-cyan-400 animate-spin-slow group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              style={{ animationDuration: '24s' }}
              fill="none" 
              stroke="currentColor" 
              strokeWidth="10"
            >
              <circle cx="50" cy="50" r="30" strokeDasharray="30 20" />
              <path d="M 50 10 L 50 25 M 50 75 L 50 90 M 10 50 L 25 50 M 75 50 L 90 50" strokeWidth="12" strokeLinecap="round" />
              <path d="M 22 22 L 32 32 M 68 68 L 78 78 M 22 78 L 32 68 M 68 22 L 78 32" strokeWidth="12" strokeLinecap="round" />
            </svg>
            
            <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>

          <span className="font-sans font-bold text-base md:text-xl tracking-[0.08em] uppercase flex items-center">
            <span className="text-white font-extrabold group-hover:text-neutral-200 transition-colors duration-300">VORTEX</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600 font-black relative drop-shadow-[0_2px_4px_rgba(244,63,94,0.3)]">
              AI
            </span>
          </span>
        </motion.div>

        {/* CLASSIC DESKTOP HORIZONTAL MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick("manifesto-section")}
            className="text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
          >
            VISION
          </button>
          <button 
            onClick={() => handleNavClick("humanoid-vessels")}
            className="text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
          >
            CHÂSSIS
          </button>
          <button 
            onClick={() => handleNavClick("personality-matrix")}
            className="text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
          >
            PSYCHÉ
          </button>
          <button 
            onClick={() => handleNavClick("synapse-connections")}
            className="text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
          >
            SYNAPSE
          </button>
          <button 
            onClick={() => handleNavClick("clubs-pricing")}
            className="text-xs font-mono font-medium tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-0"
          >
            TARIFS
          </button>
        </nav>

        {/* RIGHT SIDE OPTIONS */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          {/* Sign In button */}
          <Button 
            id="signin-btn"
            onClick={() => {
              setIsSignModalOpen(true);
            }}
            variant="secondary"
            className="p-2 md:pl-4 md:pr-1.5 md:py-1.5 gap-0 md:gap-3 bg-transparent border-transparent md:bg-[#ffffff0a] md:border-[#ffffff14]"
          >
            {isSignedIn ? (
              <>
                <span className="hidden md:inline max-w-[80px] md:max-w-[120px] truncate text-rose-300 font-semibold">{userEmail.split('@')[0]}</span>
                <div className="flex items-center justify-center text-rose-400 md:w-8 md:h-8 md:rounded-full md:bg-rose-500/20 md:border md:border-rose-500/30">
                  <Cpu size={16} className="animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <span className="hidden md:inline font-sans tracking-wider text-xs md:text-sm text-neutral-300">S'identifier</span>
                <div className="flex items-center justify-center text-white md:w-8 md:h-8 md:rounded-full md:bg-[#ffffff15] md:group-hover:bg-[#ffffff20] md:border md:border-white/10 md:shadow-inner transition-colors">
                  <User size={16} className="md:size-4" />
                </div>
              </>
            )}
          </Button>

          {/* Menu button (Mobile) */}
          <Button 
            id="menu-btn"
            onClick={() => {
              setIsMenuOpen(true);
            }}
            variant="secondary"
            className="lg:hidden"
          >
            <span className="font-sans tracking-wider text-xs md:text-sm text-neutral-300">Menu</span>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#ffffff15] text-white flex items-center justify-center border border-white/10">
              <Menu size={13} className="md:size-4" />
            </div>
          </Button>
        </motion.div>
      </div>
    </header>
  );

};
export default Header;
