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
          },
          sign_up: {
            email_label: 'Adresse email',
            password_label: 'Mot de passe',
            button_label: "S'inscrire",
          },
        },
      }}
    />
  );
};