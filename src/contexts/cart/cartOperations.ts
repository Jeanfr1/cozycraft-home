import { supabase } from "@/integrations/supabase/client";
import { CartItem } from "./types";

export const loadCartItems = async (): Promise<CartItem[]> => {
  const { data, error } = await supabase
    .from('user_cart')
    .select('*');

  if (error) {
    console.error('Error loading cart:', error);
    return [];
  }

  return data || [];
};

export const addCartItem = async (productId: string): Promise<CartItem | null> => {
  const { data, error } = await supabase
    .from('user_cart')
    .insert([
      {
        product_id: productId,
        quantity: 1
      }
    ])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }

  return data;
};

export const removeCartItem = async (productId: string): Promise<void> => {
  const { error } = await supabase
    .from('user_cart')
    .delete()
    .eq('product_id', productId);

  if (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const updateCartItemQuantity = async (
  productId: string,
  quantity: number
): Promise<void> => {
  const { error } = await supabase
    .from('user_cart')
    .update({ quantity })
    .eq('product_id', productId);

  if (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
};