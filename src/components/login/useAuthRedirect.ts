import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AuthChangeEvent } from "@supabase/supabase-js";

export const useAuthRedirect = () => {
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
};