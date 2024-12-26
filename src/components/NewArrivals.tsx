import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressiveImg } from "@/components/ui/progressive-img";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleExploreDetails = (product: typeof products[0]) => {
    // For now, we'll show a toast since the product pages aren't implemented yet
    toast.info(`Découvrez ${product.name}`, {
      description: "Cette page sera bientôt disponible!",
    });
    // When product pages are ready, uncomment:
    // navigate(product.path);
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
                  onClick={() => handleExploreDetails(product)}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-[#9b87f5] hover:text-white"
                >
                  Explorer les Détails
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