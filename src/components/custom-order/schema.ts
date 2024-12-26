import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer votre nom complet"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  dimensions: z.string().min(1, "Veuillez spécifier les dimensions souhaitées"),
  woodType: z.string().min(1, "Veuillez sélectionner un type de bois"),
  budget: z.string().min(1, "Veuillez sélectionner une gamme de budget"),
  description: z.string().min(10, "Veuillez décrire votre projet en détail (minimum 10 caractères)"),
});