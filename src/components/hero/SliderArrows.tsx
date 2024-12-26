import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SliderArrowsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const SliderArrows = ({ onPrevClick, onNextClick }: SliderArrowsProps) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#9b87f5]/20 transition-all duration-300"
        onClick={onPrevClick}
      >
        <ArrowLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#9b87f5]/20 transition-all duration-300"
        onClick={onNextClick}
      >
        <ArrowRight className="h-8 w-8" />
      </Button>
    </>
  );
};