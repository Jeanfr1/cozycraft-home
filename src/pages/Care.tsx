import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Care = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#7E69AB]">
          Instructions d'Entretien
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Entretien Quotidien
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>• Dépoussiérez régulièrement avec un chiffon doux et sec</li>
              <li>• Évitez l'exposition directe au soleil</li>
              <li>• Maintenez une température et une humidité constantes</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Nettoyage Approfondi
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>• Utilisez des produits spécifiques pour le bois</li>
              <li>• Testez toujours le produit sur une zone peu visible</li>
              <li>• Évitez les produits abrasifs</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Précautions
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>• Protégez la surface des liquides</li>
              <li>• Utilisez des dessous de verre et des sets de table</li>
              <li>• Évitez de placer des objets chauds directement sur le bois</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Care;