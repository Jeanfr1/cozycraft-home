import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const ProductNavigation = ({ onPrevClick, onNextClick }: ProductNavigationProps) => {
  return (
    <div className="flex justify-end space-x-4 mb-8">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevClick}
        className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300 rounded-full w-12 h-12"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNextClick}
        className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300 rounded-full w-12 h-12"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>
    </div>
  );
};