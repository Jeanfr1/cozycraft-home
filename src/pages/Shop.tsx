import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Shop = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-8">
              Notre Boutique
            </h1>
            
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600 mb-8">
                Notre collection sera bientôt disponible.
              </p>
              <p className="text-lg text-neutral-500">
                En attendant, n'hésitez pas à nous contacter pour toute demande spécifique.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;