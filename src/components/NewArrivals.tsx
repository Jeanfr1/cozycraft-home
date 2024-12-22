import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressiveImg } from "@/components/ui/progressive-img";

const products = [
  {
    id: 1,
    name: "Fauteuil en Velours Sculptural",
    price: "2.499 €",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80",
    description: "Élégance contemporaine",
  },
  {
    id: 2,
    name: "Console en Verre Éthérée",
    price: "1.899 €",
    image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&q=80",
    description: "Sophistication minimaliste",
  },
  {
    id: 3,
    name: "Armoire Artisanale en Bois",
    price: "3.299 €",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
    description: "Artisanat intemporel",
  },
  {
    id: 4,
    name: "Chaise Longue Moderne",
    price: "2.149 €",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80",
    description: "Confort raffiné",
  },
  {
    id: 5,
    name: "Bureau Design",
    price: "2.899 €",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    description: "Espace de travail élégant",
  },
];

export const NewArrivals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-5xl font-light text-neutral-800 mb-4 tracking-wide">
            Dernières Créations
          </h2>
          <div className="w-24 h-0.5 bg-[#9b87f5] mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre nouvelle collection de pièces méticuleusement créées, où l'élégance intemporelle rencontre le design contemporain.
          </p>
        </div>
        
        <div className="flex justify-end space-x-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300 rounded-full w-12 h-12"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300 rounded-full w-12 h-12"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[400px] group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
                <ProgressiveImg
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#9b87f5] hover:text-white"
                >
                  Explore Details
                </Button>
              </div>
              <h3 className="text-xl font-light text-neutral-800 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">{product.description}</p>
              <p className="text-[#9b87f5] font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};