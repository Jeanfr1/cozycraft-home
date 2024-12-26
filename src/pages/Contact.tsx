import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { FloatingElements } from "@/components/FloatingElements";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-marcellus text-center mb-6 text-[#7E69AB]">
            Contactez-nous
          </h1>
          <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter
            pour plus d'informations sur nos services ou pour discuter de votre projet.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#9b87f5] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Notre Atelier</h3>
                  <p className="text-neutral-600">
                    123 Rue de l'Artisan<br />
                    Ville Artisanale, 75001<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#9b87f5] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                  <p className="text-neutral-600">01 23 45 67 89</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Du lundi au vendredi, 9h-18h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#9b87f5] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-neutral-600">contact@elisabethlaidin.fr</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Nous répondons sous 24-48h
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647856687320!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Contact;