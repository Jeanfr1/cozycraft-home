import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Modern Dining Chair",
    price: "$599",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Leather Lounge Chair",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Wooden Coffee Table",
    price: "$899",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Bedside Table",
    price: "$449",
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Office Desk",
    price: "$1,199",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80",
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