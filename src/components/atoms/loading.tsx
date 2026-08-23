import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-2 text-highlight">
      <motion.span
        className="h-4 w-4 rounded-full border-2 border-highlight/40 border-t-highlight"
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <span className="font-bold">sending...</span>
    </div>
  );
}