import { motion } from "motion/react";

interface ColorSweepSectionProps {}

export default function ColorSweepSection({}: ColorSweepSectionProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Individual word fade-up and blur clear
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(8px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 overflow-hidden border-t border-b border-white/5 bg-[#030305]">
      {/* Subtle Grid overlay for high-tech premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Colorful sweeping accent lights in the background */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 top-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Framing Headline with the Word-by-Word Stagger Reveal and Color Sweep */}
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[32px] sm:text-[46px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05] text-white max-w-4xl flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]"
        >
          <motion.span variants={wordVariants} className="inline-block">L'intimité</motion.span>
          <motion.span variants={wordVariants} className="inline-block">d'une</motion.span>
          <motion.span variants={wordVariants} className="inline-block">présence.</motion.span>
          
          {/* Force newline on screens larger than mobile */}
          <span className="w-full hidden sm:block" />

          <motion.span variants={wordVariants} className="inline-block">L'évidence</motion.span>
          <motion.span variants={wordVariants} className="inline-block">de</motion.span>
          
          <motion.span variants={wordVariants} className="relative inline-block">
            {/* Color sweep word utilizing the exact cyan-to-rose cognitive sync gradient with smooth infinite looping sweep */}
            <span 
              className="text-transparent bg-clip-text font-extrabold"
              style={{
                backgroundImage: "linear-gradient(120deg, #22d3ee, #60a5fa, #fb7185, #22d3ee)",
                backgroundSize: "200% auto",
                animation: "colorSweep 4s linear infinite",
              }}
            >
              l'immortalité
            </span>
            {/* Soft backdrop glow to enhance contrast */}
            <span 
              className="absolute inset-0 text-transparent bg-clip-text blur-[15px] select-none font-extrabold opacity-40"
              style={{
                backgroundImage: "linear-gradient(120deg, #22d3ee, #60a5fa, #fb7185, #22d3ee)",
                backgroundSize: "200% auto",
                animation: "colorSweep 4s linear infinite",
              }}
            >
              l'immortalité
            </span>
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block">.</motion.span>
        </motion.h2>

      </div>

      {/* Embedded CSS animation for color sweep effect */}
      <style>{`
        @keyframes colorSweep {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
}
