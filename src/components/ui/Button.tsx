import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "style"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass" | "rose-gradient" | "outline-cyan";
  className?: string;
  animateProps?: HTMLMotionProps<"button">;
}

export const Button = ({
  children,
  variant = "glass",
  className = "",
  animateProps,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative font-sans tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-between gap-6 md:gap-8 rounded-full border";

  const variants = {
    primary: "h-12 md:h-[52px] pl-6 pr-1.5 py-1.5 bg-transparent hover:bg-white/[0.04] border-white/20 hover:border-white/40 text-neutral-100 hover:text-white text-sm font-medium shadow-lg",
    secondary: "h-10 md:h-11 pl-4 pr-1.5 py-1.5 bg-[#ffffff0a] hover:bg-[#ffffff12] border-[#ffffff14] hover:border-[#ffffff26] text-neutral-200 hover:text-white text-xs md:text-sm font-medium",
    glass: "w-full py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-bold text-white tracking-wider uppercase transition-all duration-300 text-center justify-center",
    "rose-gradient": "w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-xs font-extrabold text-white tracking-wider uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(244,63,94,0.15)] text-center justify-center",
    "outline-cyan": "w-full py-3 rounded-xl bg-white/[0.04] border border-cyan-500/20 hover:border-cyan-500/40 text-xs font-bold text-cyan-400 tracking-wider uppercase transition-all duration-300 text-center justify-center"
  };

  const Component = animateProps ? motion.button : "button";

  return (
    // @ts-ignore
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...animateProps}
      {...props}
    >
      {children}
    </Component>
  );
};
