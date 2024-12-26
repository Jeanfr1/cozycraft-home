import { useRef, useState } from "react";
import { ProductCard } from "./product/ProductCard";
import { ProductSectionHeader } from "./product/ProductSectionHeader";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Table Basse Minimaliste",
    price: "1.299 €",
    image: "/lovable-uploads/59a6153c-1bb8-40c8-bb1e-61e1ac016e5e.png",
    description: "Design épuré et fonctionnel",
    path: "/shop/table-basse-minimaliste",
  },
  {
    id: 2,
    name: "Table à Manger Contemporaine",
    price: "2.899 €",
    image: "/lovable-uploads/e3c3f426-4295-44b7-bff2-e8e22ff22316.png",
    description: "Élégance moderne et raffinée",
    path: "/shop/table-manger-contemporaine",
  },
  {
    id: 3,
    name: "Décoration Murale Artisanale",
    price: "399 €",
    image: "/lovable-uploads/906bf6e0-b455-4bb9-bbbf-a6a189cdf626.png",
    description: "Artisanat authentique",
    path: "/shop/decoration-murale",
  },
  {
    id: 4,
    name: "Bureau Design Naturel",
    price: "1.599 €",
    image: "/lovable-uploads/7d420449-6857-4ab3-a507-03ae2a679b96.png",
    description: "Espace de travail zen",
    path: "/shop/bureau-design",
  },
  {
    id: 5,
    name: "Décoration Vintage",
    price: "249 €",
    image: "/lovable-uploads/8ef2baf5-99c5-4c3b-9888-5707674e6b7e.png",
    description: "Charme intemporel",
    path: "/shop/decoration-vintage",
  },
];

export const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);
  const additionalProductsRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setShowAll(true);
    setTimeout(() => {
      additionalProductsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="container mx-auto px-4">
        <ProductSectionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              ref={additionalProductsRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.slice(3).map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.2
                    }}
                  >
                    <ProductCard {...product} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showAll && products.length > 3 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button
              onClick={handleShowMore}
              className="bg-[#9b87f5] text-white hover:bg-[#8b76f4] px-8 group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Voir plus
              </span>
              <motion.div
                className="absolute inset-0 bg-[#8b76f4]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};