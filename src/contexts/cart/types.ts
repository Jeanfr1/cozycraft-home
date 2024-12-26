export type CartItem = {
  id: string;
  quantity: number;
  product_id: string;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  cartCount: number;
};