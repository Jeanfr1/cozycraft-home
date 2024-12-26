import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Check and set initial user state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
      document.removeEventListener("keydown", down);
    };
  }, []);

  const handleAuthClick = async () => {
    if (user) {
      try {
        await supabase.auth.signOut();
        toast({
          title: "Déconnexion réussie",
          description: "À bientôt !",
        });
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de la déconnexion",
          variant: "destructive",
        });
      }
    } else {
      navigate("/login");
    }
  };

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
              <Link to="/" className="text-2xl font-marcellus text-[#9b87f5] transition-all duration-300 hover:text-[#9b87f5]/80 relative group">
                <span className="relative z-10">Elisabeth Laidin Design Bois</span>
                <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link 
                  to="/shop" 
                  className="text-neutral-800 hover:text-[#9b87f5] transition-colors hover-line font-light"
                >
                  Boutique
                </Link>
                <Link 
                  to="/custom" 
                  className="text-neutral-800 hover:text-[#9b87f5] transition-colors hover-line font-light"
                >
                  Commandes sur Mesure
                </Link>
                <Link 
                  to="/about" 
                  className="text-neutral-800 hover:text-[#9b87f5] transition-colors hover-line font-light"
                >
                  À Propos
                </Link>
                <Link 
                  to="/contact" 
                  className="text-neutral-800 hover:text-[#9b87f5] transition-colors hover-line font-light"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#9b87f5] transition-colors relative group"
                onClick={() => setOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#9b87f5] transition-colors relative group"
                onClick={handleAuthClick}
              >
                {user ? <LogOut className="h-5 w-5" /> : <User className="h-5 w-5" />}
                <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#9b87f5] transition-colors relative group"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute inset-0 blur-md bg-[#9b87f5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-2 -right-2 bg-[#9b87f5] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Que recherchez-vous ?" />
        <CommandList>
          <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => navigate("/shop"))}>
              <Search className="mr-2 h-4 w-4" />
              <span>Boutique</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/custom"))}>
              <Search className="mr-2 h-4 w-4" />
              <span>Commandes sur Mesure</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/about"))}>
              <Search className="mr-2 h-4 w-4" />
              <span>À Propos</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/contact"))}>
              <Search className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};