import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { CraftsmanshipSpotlight } from "@/components/CraftsmanshipSpotlight";
import { NewArrivals } from "@/components/NewArrivals";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedCollections />
        <CraftsmanshipSpotlight />
        <NewArrivals />
      </main>
    </div>
  );
};

export default Index;