import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-8">
              À propos de nous
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-neutral-800">
              <p className="text-xl font-medium">
                Bienvenue dans l'univers d'Elisabeth Laidin, où la passion pour le bois se transforme en œuvres d'art uniques !
              </p>
              
              <p>
                Après des années passées dans l'administration, à jongler entre dossiers, tableaux Excel et réunions interminables, 
                Elisabeth a décidé de tourner la page et de suivre son cœur (et son marteau). Depuis toujours fascinée par le 
                travail du bois et dotée d'un talent naturel pour transformer des planches ordinaires en meubles extraordinaires, 
                elle a pris un pari audacieux : quitter son bureau pour son atelier.
              </p>
              
              <p>
                Chaque pièce créée par Elisabeth raconte une histoire, mêlant tradition artisanale et design moderne. Ici, pas 
                de production en série ! Chaque meuble est pensé, dessiné et fabriqué avec amour, pour apporter une touche 
                chaleureuse et authentique à votre intérieur.
              </p>
              
              <p>
                Parce qu'il n'est jamais trop tard pour vivre de sa passion, Elisabeth vous invite à découvrir sa collection 
                de meubles artisanaux, où le bois rencontre la créativité, et où chaque détail compte. Rejoignez-nous dans 
                cette aventure et donnez vie à vos espaces avec des pièces uniques, façonnées à la main avec soin et savoir-faire.
              </p>
              
              <p className="text-xl font-medium italic">
                Bienvenue chez Elisabeth Laidin – là où le bois prend vie.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;