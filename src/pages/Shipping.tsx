import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#7E69AB]">
          Informations de Livraison
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Délais de Livraison
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>• France métropolitaine : 2-4 jours ouvrés</li>
              <li>• Europe : 5-7 jours ouvrés</li>
              <li>• International : 7-14 jours ouvrés</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Frais de Livraison
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li>• France métropolitaine : Gratuit à partir de 500€</li>
              <li>• Europe : Calculé en fonction du poids et de la destination</li>
              <li>• International : Sur devis</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Suivi de Commande
            </h2>
            <p className="text-neutral-600">
              Un numéro de suivi vous sera envoyé par email dès que votre commande sera expédiée.
              Vous pourrez suivre votre colis en temps réel sur notre site ou directement sur le site du transporteur.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;