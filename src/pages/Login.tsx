import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { AuthChangeEvent } from "@supabase/supabase-js";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/");
        toast({
          title: "Connexion réussie",
          description: "Bienvenue !",
        });
      }
      if (event === "USER_UPDATED" && session) {
        navigate("/");
      }
      if (event === "SIGNED_UP") {
        toast({
          title: "Inscription réussie",
          description: "Vous pouvez maintenant vous connecter",
        });
      }
      if (event === "SIGNED_OUT") {
        toast({
          title: "Déconnexion réussie",
          description: "À bientôt !",
        });
      }
    });

    // Handle auth errors through the onAuthStateChange event
    const handleAuthChange = supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
      if (event === "USER_DELETED") {
        toast({
          title: "Erreur",
          description: "Cette adresse email est déjà utilisée. Veuillez vous connecter.",
          variant: "destructive",
        });
      }
    });

    return () => {
      subscription.unsubscribe();
      handleAuthChange.data.subscription.unsubscribe();
    };
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-2xl font-marcellus text-center text-[#9b87f5] mb-8">
            Bienvenue chez Elisabeth Laidin Design Bois
          </h1>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#9b87f5',
                    brandAccent: '#8b74f2',
                  },
                },
              },
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Adresse email',
                  password_label: 'Mot de passe',
                  button_label: 'Se connecter',
                },
                sign_up: {
                  email_label: 'Adresse email',
                  password_label: 'Mot de passe',
                  button_label: "S'inscrire",
                },
              },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;