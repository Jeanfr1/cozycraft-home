interface SliderDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export const SliderDots = ({ totalSlides, currentSlide, onDotClick }: SliderDotsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            index === currentSlide ? "bg-[#9b87f5] w-8" : "bg-white/50"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};