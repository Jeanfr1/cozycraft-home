import { Button } from "@/components/ui/button";

export const CraftsmanshipSpotlight = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://player.vimeo.com/external/483090031.sd.mp4?s=da201474711a10c17ebe82ab8daf7eed70494aee&profile_id=165&oauth2_token_id=57447761"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-neutral-800">Our Craft</h2>
            <p className="text-lg text-neutral-800">
              At Elisabeth Laidin Wood Design, each piece tells a story of
              dedication to timeless craftsmanship. Our artisans blend traditional
              techniques with contemporary design sensibilities, creating furniture
              that becomes a cherished part of your family's legacy.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-wood flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Sustainable Materials
                  </h3>
                  <p className="text-neutral-800">
                    Ethically sourced wood from managed forests
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
                  <h3 className="font-bold text-neutral-800">
                    Artisan Excellence
                  </h3>
                  <p className="text-neutral-800">
                    Each piece crafted with meticulous attention to detail
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