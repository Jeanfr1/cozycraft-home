import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    title: "Élégance Intemporelle ✨",
    subtitle: "Où le vintage rencontre la sophistication moderne",
    cta: "Explorer la Collection",
    path: "/shop"
  },
  {
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80",
    title: "Design Classique 🎨",
    subtitle: "Des pièces sélectionnées qui racontent des histoires",
    cta: "Découvrir Plus",
    path: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&q=80",
    title: "Création Sur Mesure 🪑",
    subtitle: "Fabriqué selon votre vision",
    cta: "Commencer Votre Projet",
    path: "/custom"
  },
];

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
                {slide.title}
              </h1>
              <p className="text-xl mb-8 opacity-90 font-light">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white transition-all duration-300 relative group"
                onClick={() => handleExplore(slide.path)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {slide.cta}
                  <Sparkles className="w-4 h-4 animate-float" />
                </span>
                <span className="absolute inset-0 blur-md bg-[#9b87f5] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#9b87f5]/20 transition-all duration-300"
        onClick={prevSlide}
      >
        <ArrowLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-[#9b87f5]/20 transition-all duration-300"
        onClick={nextSlide}
      >
        <ArrowRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-[#9b87f5] w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};