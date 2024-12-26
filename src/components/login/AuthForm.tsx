import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

export const AuthForm = () => {
  return (
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
            loading_button_label: 'Connexion en cours...',
            email_input_placeholder: 'Votre adresse email',
            password_input_placeholder: 'Votre mot de passe',
            link_text: 'Déjà inscrit ? Connectez-vous',
          },
          sign_up: {
            email_label: 'Adresse email',
            password_label: 'Mot de passe',
            button_label: "S'inscrire",
            loading_button_label: 'Inscription en cours...',
            email_input_placeholder: 'Votre adresse email',
            password_input_placeholder: 'Votre mot de passe',
            link_text: 'Pas encore de compte ? Inscrivez-vous',
          },
          forgotten_password: {
            link_text: 'Mot de passe oublié ?',
            button_label: 'Envoyer les instructions',
            loading_button_label: 'Envoi en cours...',
            confirmation_text: 'Vérifiez vos emails pour réinitialiser votre mot de passe',
          },
        },
      }}
      providers={[]}
    />
  );
};