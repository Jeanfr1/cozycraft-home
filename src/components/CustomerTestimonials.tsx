import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The attention to detail in our dining table is remarkable. It's become the centerpiece of our home.",
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Their commitment to sustainable practices while maintaining exceptional quality is why we keep coming back.",
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "The vintage-inspired armchair they crafted perfectly captures the essence of our home's style.",
    name: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export const CustomerTestimonials = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
          What Our Clients Say
          <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}'s furniture`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-wood text-wood"
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl italic text-neutral-800">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="font-medium text-neutral-800">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};