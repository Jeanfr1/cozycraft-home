import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SlideContent } from "./hero/SlideContent";
import { SliderDots } from "./hero/SliderDots";
import { SliderArrows } from "./hero/SliderArrows";
import { slides } from "./hero/slides-data";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleExplore = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto h-full flex items-center">
            <SlideContent
              title={slide.title}
              subtitle={slide.subtitle}
              cta={slide.cta}
              onExplore={() => handleExplore(slide.path)}
            />
          </div>
        </motion.div>
      ))}
      
      <SliderArrows onPrevClick={prevSlide} onNextClick={nextSlide} />
      <SliderDots
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
};