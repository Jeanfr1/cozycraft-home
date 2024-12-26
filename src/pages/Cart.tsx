import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/cart/useCartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription } from "@/components/ui/alert";

const shippingSchema = z.object({
  fullName: z.string().min(1, "Le nom complet est requis"),
  address: z.string().min(1, "L'adresse est requise"),
  city: z.string().min(1, "La ville est requise"),
  postalCode: z.string().min(5, "Le code postal doit contenir 5 chiffres").max(5),
  phone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [step, setStep] = useState<'cart' | 'shipping'>('cart');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success("Produit retiré du panier");
  };

  const onSubmitShipping = async (data: ShippingFormData) => {
    console.log("Shipping data:", data);
    toast.success("Commande passée avec succès!");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-8 text-[#7E69AB]">Mon Panier</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600 mb-4">Votre panier est vide</p>
            <Button onClick={() => navigate('/shop')} className="bg-[#9b87f5] hover:bg-[#8b76f4]">
              Continuer mes achats
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 'cart' && (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.product_id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="font-medium">Produit {item.product_id}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.product_id, (item.quantity || 1) - 1)}
                            >
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity || 1}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange(item.product_id, (item.quantity || 1) + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.product_id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}

              {step === 'shipping' && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6 text-[#7E69AB]">Informations de livraison</h2>
                  <form onSubmit={handleSubmit(onSubmitShipping)} className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Nom complet</Label>
                      <Input 
                        id="fullName" 
                        {...register('fullName')} 
                        className={errors.fullName ? "border-red-500" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse</Label>
                      <Input 
                        id="address" 
                        {...register('address')}
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Ville</Label>
                        <Input 
                          id="city" 
                          {...register('city')}
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Code postal</Label>
                        <Input 
                          id="postalCode" 
                          {...register('postalCode')}
                          className={errors.postalCode ? "border-red-500" : ""}
                        />
                        {errors.postalCode && (
                          <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        {...register('phone')}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <Alert variant="destructive" className="mt-4">
                        <AlertDescription>
                          Veuillez remplir tous les champs obligatoires correctement.
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="flex gap-4 mt-6">
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => setStep('cart')}
                      >
                        Retour au panier
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-[#9b87f5] hover:bg-[#8b76f4]"
                      >
                        Confirmer la commande
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6 text-[#7E69AB]">Résumé de la commande</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{subtotal} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frais de livraison</span>
                    <span>{shipping} €</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{total} €</span>
                  </div>
                  {step === 'cart' ? (
                    <Button 
                      className="w-full bg-[#9b87f5] hover:bg-[#8b76f4]"
                      onClick={() => setStep('shipping')}
                    >
                      Passer à la livraison
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;