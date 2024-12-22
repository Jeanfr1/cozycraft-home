import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Salon",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80",
    description: "Confort et style intemporels",
  },
  {
    title: "Salle à Manger",
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80",
    description: "Expériences culinaires élégantes",
  },
  {
    title: "Chambre",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
    description: "Refuges vintage sereins",
  },
  {
    title: "Bureau",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    description: "Design d'espace de travail classique",
  },
];

export const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
          Our Collections
          <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="mb-4">{collection.description}</p>
                  <Button
                    className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">Explore</span>
                    <span className="absolute inset-0 blur-md bg-[#9b87f5] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};