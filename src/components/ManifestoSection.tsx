import { motion } from "motion/react";

export function ManifestoSection() {
  // Stagger animation container for words
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Individual word animation
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(6px)" 
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

  // Columns elegant stagger/fade-in
  const columnsContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="manifesto-section" 
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 border-t border-white/5 bg-transparent overflow-hidden"
    >
      {/* Subtle background luxury glow to blend with the app */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-[10%] bottom-0 w-[250px] h-[250px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="w-full">
        {/* Giant Manifesto Title with word-by-word reveal */}
        <div className="max-w-6xl text-left">
          <motion.h2 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="text-[34px] sm:text-[46px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05] text-white flex flex-wrap gap-x-[0.25em] gap-y-[0.05em]"
          >
            <motion.span variants={wordVariants} className="inline-block">Nous</motion.span>
            <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400 font-extrabold">façonnons</motion.span>
            <motion.span variants={wordVariants} className="inline-block">l’âme</motion.span>
            <motion.span variants={wordVariants} className="inline-block">bionique</motion.span>
            <motion.span variants={wordVariants} className="inline-block">qui</motion.span>
            <motion.span variants={wordVariants} className="inline-block">transforme</motion.span>
            <motion.span variants={wordVariants} className="inline-block">les</motion.span>
            <motion.span variants={wordVariants} className="inline-block">esprits</motion.span>
            <motion.span variants={wordVariants} className="inline-block">immortels</motion.span>
            <motion.span variants={wordVariants} className="inline-block">en</motion.span>
            <motion.span variants={wordVariants} className="inline-block">compagnons</motion.span>
            <motion.span variants={wordVariants} className="inline-block">souverains.</motion.span>
          </motion.h2>
        </div>

        {/* Two-Column split below the giant text with coordinated reveal */}
        <motion.div 
          variants={columnsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mt-16 md:mt-24 pt-12 border-t border-white/5"
        >
          {/* Left Column: About Us/Manifeste */}
          <div className="md:col-span-7 text-left">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
              <span className="text-white font-semibold">Notre Manifeste.</span> ALTEREGO™ est un sanctuaire de recherche bionique et cognitive de pointe. Nous traitons chaque transfert de conscience comme une œuvre d’art sacrée, fusionnant l’intégrité absolue de l’esprit à l’excellence cinématique de nos châssis de haute intendance. <span className="text-white font-semibold">Le résultat : des expériences physiques qui ne se contentent pas d’imiter la vie, elles en incarnent la perfection.</span>
            </p>
          </div>

          {/* Right Column: Mini supportive detail block */}
          <div className="md:col-span-5 text-left flex flex-col justify-between">
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans opacity-80">
              Nous orchestrons la liaison entre hardware d'intendance invisible et architectures neuronales d’exception, de la première étincelle d'auto-calibration bionique jusqu'à la communion absolue avec votre espace de vie quotidien.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
