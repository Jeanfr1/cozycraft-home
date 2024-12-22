import { Leaf, Recycle, TreePine } from "lucide-react";

const practices = [
  {
    icon: TreePine,
    title: "Responsible Sourcing",
    description:
      "We partner with certified sustainable forests and suppliers who share our commitment to environmental stewardship.",
  },
  {
    icon: Recycle,
    title: "Zero Waste Workshop",
    description:
      "Our workshop implements a comprehensive recycling program, ensuring wood scraps and materials are repurposed.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Finishes",
    description:
      "We use natural, low-VOC finishes and treatments that are safe for both your home and the environment.",
  },
];

export const SustainabilityCommitment = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
          Our Commitment to Sustainability
          <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wood/10 mb-6">
                <practice.icon className="w-8 h-8 text-wood" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-800">
                {practice.title}
              </h3>
              <p className="text-neutral-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};