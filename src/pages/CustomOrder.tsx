import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CustomOrderForm } from "@/components/CustomOrderForm";

const CustomOrder = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-8 text-center">
              Commandes sur Mesure
            </h1>
            <p className="text-lg text-neutral-600 mb-12 text-center">
              Créons ensemble le meuble de vos rêves. Partagez votre vision, et nous la transformerons en réalité.
            </p>
            <CustomOrderForm />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomOrder;