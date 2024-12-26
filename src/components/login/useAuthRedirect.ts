import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AuthError, Session, AuthChangeEvent } from "@supabase/supabase-js";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session: Session) => {
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

    // Handle auth errors through the auth state change event
    const handleAuthError = (error: AuthError) => {
      if (error.message.includes("Email not confirmed")) {
        toast({
          title: "Email non confirmé",
          description: "Veuillez vérifier votre boîte mail pour confirmer votre email",
          variant: "destructive",
        });
      } else if (error.message.includes("Invalid login credentials")) {
        toast({
          title: "Erreur de connexion",
          description: "Email ou mot de passe incorrect",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive",
        });
      }
    };

    // Subscribe to auth state changes
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // Handle any auth errors that might occur during state changes
      if (event === "SIGNED_IN" && !session) {
        const error = new AuthError("Invalid login credentials");
        handleAuthError(error);
      }
    });

    return () => {
      subscription.unsubscribe();
      authSubscription.unsubscribe();
    };
  }, [navigate, toast]);
};