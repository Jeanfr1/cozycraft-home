import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-neutral-50 to-neutral-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
              Elisabeth Laidin Wood Design
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Crafting timeless furniture pieces that blend artistry with functionality. Each piece tells a unique story of
              craftsmanship and dedication.
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

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/shop" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  About Us
                </a>
              </li>
              <li>
                <a href="/custom" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="/blog" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="/shipping" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/care" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="/faq" className="text-neutral-600 hover:text-[#9b87f5] transition-colors hover-line">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#7E69AB]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-neutral-600">
                <MapPin className="h-5 w-5 text-[#9b87f5]" />
                <span>123 Craftsman Way, Artisan City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-600">
                <Phone className="h-5 w-5 text-[#9b87f5]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-600">
                <Mail className="h-5 w-5 text-[#9b87f5]" />
                <span>info@elisabethlaidin.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
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

        {/* Copyright and Legal */}
        <div className="border-t border-neutral-200 pt-8 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            © {currentYear} Elisabeth Laidin Wood Design. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="/privacy" className="text-neutral-500 hover:text-[#9b87f5] transition-colors hover-line">
              Privacy Policy
            </a>
            <a href="/terms" className="text-neutral-500 hover:text-[#9b87f5] transition-colors hover-line">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};