import { supabase } from "@/integrations/supabase/client";
import { CartItem } from "./types";

export const loadCartItems = async (): Promise<CartItem[]> => {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user) {
    const { data, error } = await supabase
      .from('user_cart')
      .select('*')
      .eq('user_id', session.user.id);

    if (error) {
      console.error('Error loading cart:', error);
      return [];
    }

    return data || [];
  }
  return [];
};

export const addCartItem = async (userId: string, productId: string): Promise<CartItem | null> => {
  const { data, error } = await supabase
    .from('user_cart')
    .insert([
      {
        user_id: userId,
        product_id: productId,
        quantity: 1
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }

  return data;
};

export const removeCartItem = async (userId: string, productId: string): Promise<void> => {
  const { error } = await supabase
    .from('user_cart')
    .delete()
    .eq('user_id', userId)
    .eq('product_id', productId);

  if (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const updateCartItemQuantity = async (
  userId: string,
  productId: string,
  quantity: number
): Promise<void> => {
  const { error } = await supabase
    .from('user_cart')
    .update({ quantity })
    .eq('user_id', userId)
    .eq('product_id', productId);

  if (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
};