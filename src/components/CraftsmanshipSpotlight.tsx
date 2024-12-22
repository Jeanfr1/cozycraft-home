import { Button } from "@/components/ui/button";

export const CraftsmanshipSpotlight = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80"
              alt="Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-neutral-800">Our Craft</h2>
            <p className="text-lg text-neutral-800">
              Every piece of furniture we create is a testament to our dedication to
              quality and sustainability. Our master craftsmen combine traditional
              techniques with modern innovation to create pieces that will be
              cherished for generations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-wood flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Sustainable Materials
                  </h3>
                  <p className="text-neutral-800">
                    Responsibly sourced wood from managed forests
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-wood flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Traditional Techniques
                  </h3>
                  <p className="text-neutral-800">
                    Time-honored joinery and hand-finishing methods
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-wood flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">Quality Guarantee</h3>
                  <p className="text-neutral-800">
                    Each piece inspected to meet our high standards
                  </p>
                </div>
              </li>
            </ul>
            <Button size="lg" className="bg-wood hover:bg-wood-dark text-white">
              About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};