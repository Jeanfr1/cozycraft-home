import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Vintage Dining Chair",
    price: "$799",
    image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Classic Armchair",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Antique Coffee Table",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Vintage Side Table",
    price: "$649",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Classic Writing Desk",
    price: "$1,899",
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80",
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800">
            Latest Creations
          </h2>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-wood text-wood hover:bg-wood hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-wood text-wood hover:bg-wood hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-72 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <Button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Quick View
                </Button>
              </div>
              <h3 className="text-lg font-medium text-neutral-800 mb-2">
                {product.name}
              </h3>
              <p className="text-wood font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};