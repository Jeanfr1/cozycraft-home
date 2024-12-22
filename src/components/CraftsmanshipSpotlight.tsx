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
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
              Notre Savoir-faire
              <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </h2>
            <p className="text-lg text-neutral-800">
              Chez Elisabeth Laidin Design Bois, chaque pièce raconte une histoire
              de dévouement à l'artisanat intemporel. Nos artisans mêlent techniques
              traditionnelles et sensibilités design contemporaines, créant des meubles
              qui deviennent un héritage précieux pour votre famille.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#9b87f5] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Matériaux Durables
                  </h3>
                  <p className="text-neutral-800">
                    Bois sourcé éthiquement de forêts gérées
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#9b87f5] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Techniques Traditionnelles
                  </h3>
                  <p className="text-neutral-800">
                    Méthodes d'assemblage et finition à la main ancestrales
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#9b87f5] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-neutral-800">
                    Excellence Artisanale
                  </h3>
                  <p className="text-neutral-800">
                    Chaque pièce créée avec une attention méticuleuse aux détails
                  </p>
                </div>
              </li>
            </ul>
            <Button className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white transition-all duration-300 relative group">
              <span className="relative z-10">À Propos de Notre Processus</span>
              <span className="absolute inset-0 blur-md bg-[#9b87f5] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};