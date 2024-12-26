import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#7E69AB]">
          Retours & Échanges
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Politique de Retour
            </h2>
            <p className="text-neutral-600 mb-4">
              Nous acceptons les retours dans les 14 jours suivant la réception de votre commande.
              Les articles doivent être retournés dans leur état d'origine, non utilisés et dans leur emballage d'origine.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Procédure de Retour
            </h2>
            <ol className="space-y-4 text-neutral-600 list-decimal pl-4">
              <li>Contactez notre service client pour obtenir un numéro de retour</li>
              <li>Emballez soigneusement l'article avec tous les documents originaux</li>
              <li>Envoyez le colis à l'adresse indiquée</li>
              <li>Le remboursement sera effectué sous 14 jours après réception</li>
            </ol>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#9b87f5]">
              Échanges
            </h2>
            <p className="text-neutral-600">
              Pour les échanges, veuillez suivre la même procédure que pour les retours.
              Une fois l'article retourné, nous vous enverrons le nouvel article choisi.
              Des frais de livraison supplémentaires peuvent s'appliquer.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;