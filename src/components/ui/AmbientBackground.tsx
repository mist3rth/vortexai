import { motion, AnimatePresence } from "motion/react";

interface AmbientBackgroundProps {
  bgType: "ambient" | "custom_url" | "custom_upload" | "solid";
  customBgUrl: string;
  customBgUpload: string | null;
  overlayOpacity: number;
  blurStrength: number;
  redGlowStrength: number;
  blueGlowStrength: number;
  showReferenceOverlay: boolean;
  referenceOpacity: number;
  scrollY: number;
}

const bgImage = "/Refais_image_en_enlevant_textes_202606222122.webp";

export const AmbientBackground = ({
  bgType,
  customBgUrl,
  customBgUpload,
  overlayOpacity,
  blurStrength,
  redGlowStrength,
  blueGlowStrength,
  showReferenceOverlay,
  referenceOpacity,
  scrollY
}: AmbientBackgroundProps) => {
  return (
    <>
      {/* BACKGROUND IMAGE / GRADIENT SYSTEM */}
      <div className="absolute inset-x-0 top-0 h-screen z-0 pointer-events-none overflow-hidden select-none transition-all duration-700">
        
        {/* Scenario 1: Ambient futuristic Sci-Fi lights matching screenshot (default) */}
        {bgType === "ambient" && (
          <div className="absolute inset-0 overflow-hidden bg-[#030305]">
            {/* The main high-fidelity background video with poster fallback */}
            <video 
              autoPlay
              loop
              muted
              playsInline
              poster={bgImage}
              className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
              style={{ 
                filter: `blur(${blurStrength}px)`,
                transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1.03 + scrollY * 0.00015})`,
                transition: "filter 0.7s, opacity 0.7s"
              }}
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
            </video>
            
            {/* Soft grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Cyan/Blue subtle contrast light for left hand side branding */}
            <div 
              className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full filter blur-[130px] opacity-30 mix-blend-screen"
              style={{
                background: `radial-gradient(circle, rgba(6, 182, 212, ${0.35 * blueGlowStrength}) 0%, rgba(0,0,0,0) 75%)`
              }}
            />
            <div 
              className="absolute right-1/4 bottom-[-10%] w-[600px] h-[400px] rounded-full filter blur-[140px] opacity-15 mix-blend-screen"
              style={{
                background: `radial-gradient(circle, rgba(14, 116, 144, ${0.3 * blueGlowStrength}) 0%, rgba(0,0,0,0) 75%)`
              }}
            />
          </div>
        )}

        {/* Scenario 2: Paste custom image URL */}
        {bgType === "custom_url" && customBgUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${customBgUrl})`,
              filter: `blur(${blurStrength}px)`,
              transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1.03 + scrollY * 0.00015})`,
              transition: "filter 0.7s"
            }}
          />
        )}

        {/* Scenario 3: Upload custom file */}
        {bgType === "custom_upload" && customBgUpload && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${customBgUpload})`,
              filter: `blur(${blurStrength}px)`,
              transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1.03 + scrollY * 0.00015})`,
              transition: "filter 0.7s"
            }}
          />
        )}

        {/* Scenario 4: Simple clean gradient/solid dark */}
        {bgType === "solid" && (
          <div className="absolute inset-0 bg-[#07070a] bg-gradient-to-tr from-[#050508] via-[#0b0c13] to-[#040406]" />
        )}

        {/* Global Dark overlay that dim/brighten the background for optimal text readability */}
        <div 
          className="absolute inset-0 bg-[#050508] transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />

        <div 
          className="absolute inset-0 pointer-events-none mix-blend-screen transition-all duration-300"
          style={{
            background: `radial-gradient(circle at 15% 15%, rgba(6, 182, 212, ${0.3 * blueGlowStrength}) 0%, rgba(0,0,0,0) 65%)`,
          }}
        />
      </div>

      {/* USER SCREENSHOT COMPACT BLENDED REFERENCE SYSTEM (Luxury dev tool) */}
      <AnimatePresence>
        {showReferenceOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: referenceOpacity }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 pointer-events-none mix-blend-lighten select-none"
            style={{
              backgroundImage: "url('https://api.aistudio.google.com/assets/f4112e3f-67be-4395-8167-1ee6b6ef6d62')", // Use custom reference asset key if needed or a transparent mockup holder
              backgroundSize: "cover",
              backgroundPosition: "center",
              imageRendering: "pixelated"
            }}
          >
            {/* Visual alignment aids */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-mono font-bold tracking-widest uppercase shadow-lg">
              Comparison overlay mode active (opacity: {Math.round(referenceOpacity * 100)}%)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
