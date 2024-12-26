import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
              Elisabeth Laidin Design Bois
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Création de meubles intemporels alliant art et fonctionnalité. Chaque pièce raconte une histoire unique
              d'artisanat et de dévouement.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-[#9b87f5]/10 hover:text-[#9b87f5] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-[#9b87f5]/10 hover:text-[#9b87f5] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-[#9b87f5]/10 hover:text-[#9b87f5] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Commandes Sur Mesure
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Service Client</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Informations de Livraison
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Retours & Échanges
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Instructions d'Entretien
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-neutral-600">
                <MapPin className="h-5 w-5 text-[#9b87f5]" />
                <span>123 Rue de l'Artisan, Ville Artisanale, 75001</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-600">
                <Phone className="h-5 w-5 text-[#9b87f5]" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-600">
                <Mail className="h-5 w-5 text-[#9b87f5]" />
                <span>contact@elisabethlaidin.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 pb-6">
          <div className="flex flex-wrap justify-center gap-6">
            <img 
              src="/visa.svg" 
              alt="Visa" 
              className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" 
              loading="lazy" 
            />
            <img 
              src="/mastercard.svg" 
              alt="Mastercard" 
              className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" 
              loading="lazy" 
            />
            <img 
              src="/amex.svg" 
              alt="American Express" 
              className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" 
              loading="lazy" 
            />
            <img 
              src="/paypal.svg" 
              alt="PayPal" 
              className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" 
              loading="lazy" 
            />
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            © {currentYear} Elisabeth Laidin Design Bois. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/privacy" className="text-neutral-500 hover:text-[#9b87f5] transition-colors hover-line">
              Politique de Confidentialité
            </a>
            <a href="/terms" className="text-neutral-500 hover:text-[#9b87f5] transition-colors hover-line">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
