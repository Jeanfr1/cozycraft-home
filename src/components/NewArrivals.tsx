import { useRef } from "react";
import { ProductCard } from "./product/ProductCard";
import { ProductNavigation } from "./product/ProductNavigation";
import { ProductSectionHeader } from "./product/ProductSectionHeader";

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
        <ProductSectionHeader />
        <ProductNavigation
          onPrevClick={() => scroll("left")}
          onNextClick={() => scroll("right")}
        />
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};