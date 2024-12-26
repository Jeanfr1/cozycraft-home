import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

type CartItem = {
  id: string;
  quantity: number;
  product_id: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    const newCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  const loadCartItems = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const { data, error } = await supabase
        .from('user_cart')
        .select('*')
        .eq('user_id', session.user.id);

      if (error) {
        console.error('Error loading cart:', error);
        return;
      }

      setCartItems(data || []);
    }
  };

  const addToCart = async (productId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      console.error('User must be logged in to add items to cart');
      return;
    }

    const existingItem = cartItems.find(item => item.product_id === productId);

    if (existingItem) {
      await updateQuantity(productId, existingItem.quantity + 1);
    } else {
      const { data, error } = await supabase
        .from('user_cart')
        .insert([
          {
            user_id: session.user.id,
            product_id: productId,
            quantity: 1
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error adding to cart:', error);
        return;
      }

      setCartItems([...cartItems, data]);
    }
  };

  const removeFromCart = async (productId: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    const { error } = await supabase
      .from('user_cart')
      .delete()
      .eq('user_id', session.user.id)
      .eq('product_id', productId);

    if (error) {
      console.error('Error removing from cart:', error);
      return;
    }

    setCartItems(cartItems.filter(item => item.product_id !== productId));
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return;

    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    const { error } = await supabase
      .from('user_cart')
      .update({ quantity })
      .eq('user_id', session.user.id)
      .eq('product_id', productId);

    if (error) {
      console.error('Error updating quantity:', error);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.product_id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};