import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FormSection } from "./custom-order/FormSection";
import { formSchema } from "./custom-order/schema";
import { SubmitButton } from "./custom-order/SubmitButton";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const personalInfoFields = [
  { name: "fullName" as const, label: "Nom complet", type: "input" as const, placeholder: "Jean Dupont" },
  { name: "email" as const, label: "Email", type: "input" as const, placeholder: "jean.dupont@example.com" },
  { name: "phone" as const, label: "Téléphone", type: "input" as const, placeholder: "06 12 34 56 78" },
];

const projectDetailsFields = [
  {
    name: "projectType" as const,
    label: "Type de projet",
    type: "select" as const,
    placeholder: "Sélectionnez un type de projet",
    options: [
      { value: "table", label: "Table" },
      { value: "armoire", label: "Armoire" },
      { value: "bibliotheque", label: "Bibliothèque" },
      { value: "bureau", label: "Bureau" },
      { value: "autre", label: "Autre" },
    ],
  },
  { name: "dimensions" as const, label: "Dimensions souhaitées", type: "input" as const, placeholder: "ex: 120x80x75 cm" },
  {
    name: "woodType" as const,
    label: "Type de bois",
    type: "select" as const,
    placeholder: "Sélectionnez un type de bois",
    options: [
      { value: "chene", label: "Chêne" },
      { value: "noyer", label: "Noyer" },
      { value: "hetre", label: "Hêtre" },
      { value: "pin", label: "Pin" },
      { value: "autre", label: "Autre" },
    ],
  },
  {
    name: "budget" as const,
    label: "Budget",
    type: "select" as const,
    placeholder: "Sélectionnez une gamme de budget",
    options: [
      { value: "500-1000", label: "500€ - 1000€" },
      { value: "1000-2000", label: "1000€ - 2000€" },
      { value: "2000-3000", label: "2000€ - 3000€" },
      { value: "3000+", label: "3000€ +" },
    ],
  },
];

export const CustomOrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      dimensions: "",
      woodType: "",
      budget: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("custom_orders").insert([{
        full_name: values.fullName,
        email: values.email,
        phone: values.phone,
        project_type: values.projectType,
        dimensions: values.dimensions,
        wood_type: values.woodType,
        budget: values.budget,
        description: values.description,
      }]);
      
      if (error) throw error;

      toast.success("Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.", {
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg border border-purple-100"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSection control={form.control} fields={personalInfoFields} />
            <FormSection control={form.control} fields={projectDetailsFields} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description du projet</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez votre projet en détail (style, finitions souhaitées, contraintes particulières...)"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </motion.div>
  );
};