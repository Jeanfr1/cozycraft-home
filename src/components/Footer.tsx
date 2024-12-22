import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-wood">Elisabeth Laidin Wood Design</h3>
            <p className="text-neutral-800">
              Crafting timeless furniture pieces that blend artistry with functionality. Each piece tells a unique story of
              craftsmanship and dedication.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-wood">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-wood">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-wood">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="text-neutral-800 hover:text-wood transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-800 hover:text-wood transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/custom" className="text-neutral-800 hover:text-wood transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="/blog" className="text-neutral-800 hover:text-wood transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-800">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shipping" className="text-neutral-800 hover:text-wood transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="text-neutral-800 hover:text-wood transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/care" className="text-neutral-800 hover:text-wood transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="/faq" className="text-neutral-800 hover:text-wood transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-wood" />
                <span>123 Craftsman Way, Artisan City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-wood" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-wood" />
                <span>info@elisabethlaidin.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-neutral-200 pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/visa.svg" alt="Visa" className="h-8" loading="lazy" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8" loading="lazy" />
            <img src="/amex.svg" alt="American Express" className="h-8" loading="lazy" />
            <img src="/paypal.svg" alt="PayPal" className="h-8" loading="lazy" />
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-neutral-200 pt-8 text-center">
          <p className="text-sm text-neutral-800 mb-4">
            © {currentYear} Elisabeth Laidin Wood Design. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="/privacy" className="text-neutral-800 hover:text-wood transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-neutral-800 hover:text-wood transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};