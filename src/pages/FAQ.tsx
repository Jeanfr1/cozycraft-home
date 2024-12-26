import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#7E69AB]">
          Foire Aux Questions
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:text-[#9b87f5]">
                Combien de temps faut-il pour fabriquer un meuble sur mesure ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-600">
                Le délai de fabrication varie en fonction de la complexité du projet, généralement entre 4 et 8 semaines.
                Nous vous fournirons un calendrier détaillé lors de la validation de votre commande.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:text-[#9b87f5]">
                Quels types de bois utilisez-vous ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-600">
                Nous travaillons principalement avec du chêne, du noyer, du hêtre et du frêne,
                tous issus de forêts gérées durablement. Nous pouvons également travailler avec d'autres essences sur demande.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:text-[#9b87f5]">
                Proposez-vous un service de livraison et d'installation ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-600">
                Oui, nous proposons un service de livraison et d'installation pour tous nos meubles.
                Les frais varient en fonction de votre localisation et de la complexité de l'installation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md">
              <AccordionTrigger className="px-6 py-4 hover:text-[#9b87f5]">
                Quelle est la garantie sur vos meubles ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-neutral-600">
                Tous nos meubles sont garantis 2 ans contre les défauts de fabrication.
                Cette garantie couvre les problèmes structurels et les finitions, dans le cadre d'une utilisation normale.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;