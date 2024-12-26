import React, { createContext, useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { CartContextType, CartItem } from './types';
import { loadCartItems, addCartItem, removeCartItem, updateCartItemQuantity } from './cartOperations';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const initializeCart = async () => {
      const items = await loadCartItems();
      setCartItems(items);
    };
    
    initializeCart();
  }, []);

  useEffect(() => {
    const newCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  const addToCart = async (productId: string) => {
    const existingItem = cartItems.find(item => item.product_id === productId);

    if (existingItem) {
      await updateQuantity(productId, existingItem.quantity + 1);
    } else {
      const newItem = await addCartItem(productId);
      if (newItem) {
        setCartItems(prevItems => [...prevItems, newItem]);
      }
    }
  };

  const removeFromCart = async (productId: string) => {
    await removeCartItem(productId);
    setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    await updateCartItemQuantity(productId, quantity);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product_id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};