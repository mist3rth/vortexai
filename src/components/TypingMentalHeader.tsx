import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function TypingMentalHeader() {
  const [text, setText] = useState("");
  const [showIA, setShowIA] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const fullText = "Mental";
    let index = 0;
    
    // Slight initial delay to coordinate with the parent reveal animation
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setShowIA(true);
          // Fade cursor after completed
          setCursorVisible(false);
        }
      }, 150); // elegant and readable pace

      return () => clearInterval(interval);
    }, 450);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <span className="inline-flex items-center flex-wrap">
      <span className="text-white relative">
        {text}
        {cursorVisible && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="inline-block ml-1 text-cyan-400 font-light"
          >
            |
          </motion.span>
        )}
      </span>
      
      <AnimatePresence>
        {showIA && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7, x: -10, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.7, x: -10 }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 12,
              mass: 0.8
            }}
            className="ml-3 sm:ml-4 inline-flex items-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-700 drop-shadow-[0_8px_20px_rgba(239,68,68,0.35)] inline-block">
              AI
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
