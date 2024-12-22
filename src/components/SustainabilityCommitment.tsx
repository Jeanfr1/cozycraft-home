import { Leaf, Recycle, TreePine } from "lucide-react";

const practices = [
  {
    icon: TreePine,
    title: "Approvisionnement Responsable",
    description:
      "Nous collaborons avec des forêts certifiées et des fournisseurs qui partagent notre engagement envers la protection de l'environnement.",
  },
  {
    icon: Recycle,
    title: "Atelier Zéro Déchet",
    description:
      "Notre atelier met en œuvre un programme de recyclage complet, assurant que les chutes de bois et les matériaux sont réutilisés.",
  },
  {
    icon: Leaf,
    title: "Finitions Écologiques",
    description:
      "Nous utilisons des finitions naturelles à faible COV qui sont sûres pour votre maison et l'environnement.",
  },
];

export const SustainabilityCommitment = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
          Notre Engagement pour la Durabilité
          <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#9b87f5]/10 mb-6 group transition-all duration-300 hover:bg-[#9b87f5]/20 animate-float">
                <practice.icon className="w-8 h-8 text-[#9b87f5] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-800 transition-colors duration-300 group-hover:text-[#9b87f5]">
                {practice.title}
              </h3>
              <p className="text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};