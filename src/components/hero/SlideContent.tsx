import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface SlideContentProps {
  title: string;
  subtitle: string;
  cta: string;
  onExplore: () => void;
}

export const SlideContent = ({ title, subtitle, cta, onExplore }: SlideContentProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-2xl text-white p-8 rounded-xl relative"
    >
      <div className="absolute -left-4 top-1/2 w-1 h-20 bg-[#9b87f5] transform -translate-y-1/2"></div>
      <span className="text-sm uppercase tracking-widest text-[#9b87f5] mb-4 block animate-typewriter">
        Welcome to Excellence
      </span>
      <h1 className="text-6xl font-light mb-4 leading-tight text-gradient">
        {title}
      </h1>
      <p className="text-xl mb-8 opacity-90 font-light">
        {subtitle}
      </p>
      <Button
        size="lg"
        className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white transition-all duration-300 relative group"
        onClick={onExplore}
      >
        <span className="relative z-10 flex items-center gap-2">
          {cta}
          <Sparkles className="w-4 h-4 animate-float" />
        </span>
        <span className="absolute inset-0 blur-md bg-[#9b87f5] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
      </Button>
    </motion.div>
  );
};