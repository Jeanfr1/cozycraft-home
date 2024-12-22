import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-2xl font-bold text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
              <span className="relative z-10">Elisabeth Laidin Wood Design</span>
              <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-neutral-800 hover:text-[#9b87f5] transition-colors">
                Shop
              </a>
              <a href="#" className="text-neutral-800 hover:text-[#9b87f5] transition-colors">
                Custom Orders
              </a>
              <a href="#" className="text-neutral-800 hover:text-[#9b87f5] transition-colors">
                About
              </a>
              <a href="#" className="text-neutral-800 hover:text-[#9b87f5] transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-[#9b87f5] transition-colors">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#9b87f5] transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#9b87f5] transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};