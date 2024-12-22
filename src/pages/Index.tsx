import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { CraftsmanshipSpotlight } from "@/components/CraftsmanshipSpotlight";
import { NewArrivals } from "@/components/NewArrivals";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";
import { SustainabilityCommitment } from "@/components/SustainabilityCommitment";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedCollections />
        <CraftsmanshipSpotlight />
        <NewArrivals />
        <CustomerTestimonials />
        <SustainabilityCommitment />
      </main>
    </div>
  );
};

export default Index;