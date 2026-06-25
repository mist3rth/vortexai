import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  focusColor?: "rose" | "cyan";
  label?: string;
}

export const Input = ({
  focusColor = "rose",
  label,
  className = "",
  ...props
}: InputProps) => {
  const baseStyles = "w-full bg-black/60 border border-white/10 hover:border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-1 font-mono transition-all";
  
  const focusStyles = {
    rose: "focus:border-rose-500 focus:ring-rose-500",
    cyan: "focus:border-cyan-500 focus:ring-cyan-500"
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[10px] font-mono font-semibold text-gray-500 tracking-wider uppercase mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${focusStyles[focusColor]} ${className}`}
        {...props}
      />
    </div>
  );
};
