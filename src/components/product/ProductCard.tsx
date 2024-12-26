import { Button } from "@/components/ui/button";
import { ProgressiveImg } from "@/components/ui/progressive-img";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  path: string;
}

export const ProductCard = ({ id, name, price, image, description, path }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleExploreDetails = () => {
    // For now, show a toast since product pages aren't implemented
    toast.info(`Découvrez ${name}`, {
      description: "Cette page sera bientôt disponible!",
    });
    // When product pages are ready, uncomment:
    // navigate(path);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(id.toString());
      toast.success("Produit ajouté au panier", {
        description: `${name} a été ajouté à votre panier`,
      });
    } catch (error) {
      toast.error("Erreur", {
        description: "Veuillez vous connecter pour ajouter des produits au panier",
      });
    }
  };

  return (
    <div className="flex-none w-[400px] group" style={{ scrollSnapAlign: "start" }}>
      <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
        <ProgressiveImg
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-2 w-[80%] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Button
            onClick={handleExploreDetails}
            className="w-full bg-white text-neutral-800 hover:bg-[#9b87f5] hover:text-white"
          >
            Explorer les Détails
          </Button>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-[#9b87f5] text-white hover:bg-[#8b76f4]"
          >
            Ajouter au Panier
          </Button>
        </div>
      </div>
      <h3 className="text-xl font-light text-neutral-800 mb-2">{name}</h3>
      <p className="text-sm text-neutral-600 mb-3">{description}</p>
      <p className="text-[#9b87f5] font-medium">{price}</p>
    </div>
  );
};