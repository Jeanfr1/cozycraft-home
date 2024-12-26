import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AuthError, Session, AuthChangeEvent } from "@supabase/supabase-js";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session: Session | null) => {
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
      if (event === "SIGNED_OUT") {
        navigate("/login");
        toast({
          title: "Déconnexion réussie",
          description: "À bientôt !",
        });
      }
      if (event === "PASSWORD_RECOVERY") {
        toast({
          title: "Réinitialisation du mot de passe",
          description: "Veuillez vérifier votre boîte mail",
        });
      }
    });

    // Handle auth errors
    const handleAuthError = (error: AuthError) => {
      let title = "Erreur";
      let description = "Une erreur est survenue";

      switch (error.message) {
        case "Email not confirmed":
          title = "Email non confirmé";
          description = "Veuillez vérifier votre boîte mail pour confirmer votre email";
          break;
        case "Invalid login credentials":
          title = "Erreur de connexion";
          description = "Email ou mot de passe incorrect";
          break;
        default:
          description = error.message;
      }

      toast({
        title,
        description,
        variant: "destructive",
      });
    };

    // Subscribe to auth state changes and handle errors
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && !session) {
        const error = new AuthError(400, "Invalid login credentials");
        handleAuthError(error);
      }
    });

    return () => {
      subscription.unsubscribe();
      authSubscription.unsubscribe();
    };
  }, [navigate, toast]);
};