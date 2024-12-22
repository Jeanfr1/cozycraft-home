import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
    description: "Comfort meets elegance",
  },
  {
    title: "Dining Room",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80",
    description: "Gather in style",
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
    description: "Peaceful retreats",
  },
  {
    title: "Home Office",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80",
    description: "Inspiring workspaces",
  },
];

export const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-neutral-800">
          Our Collections
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
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-neutral-800"
                  >
                    Explore
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