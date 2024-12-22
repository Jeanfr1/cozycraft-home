import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Artisan Leather Armchair",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&q=80",
    description: "Hand-crafted Italian leather",
  },
  {
    id: 2,
    name: "Modern Sculptural Table",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80",
    description: "Minimalist design statement",
  },
  {
    id: 3,
    name: "Crystal Glass Cabinet",
    price: "$3,299",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80",
    description: "Timeless display piece",
  },
  {
    id: 4,
    name: "Architectural Lounge Chair",
    price: "$2,149",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80",
    description: "Contemporary comfort",
  },
  {
    id: 5,
    name: "Modernist Writing Desk",
    price: "$2,899",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80",
    description: "Sophisticated workspace",
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
    <section className="py-32 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-5xl font-light text-neutral-800 mb-4">
            Latest Creations
          </h2>
          <div className="w-24 h-0.5 bg-wood mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover our newest collection of meticulously crafted pieces, where timeless elegance meets contemporary design.
          </p>
        </div>
        
        <div className="flex justify-end space-x-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide pb-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-80 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <Button
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                >
                  View Details
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