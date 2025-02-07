'use client';
import {ProductCartEntity} from '@/interfaces/ProductList';
import {createContext, useEffect, useState} from 'react';

interface CartContextType {
  cartItems: ProductCartEntity[];
  total: number;
  addToCart: (item: ProductCartEntity) => void;
  removeFromCart: (idx: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  total: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<ProductCartEntity[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item: ProductCartEntity) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (idx: number) => {
    const updatedCart = cartItems.filter((item: ProductCartEntity, index) => index !== idx);
    if (updatedCart.length === 0) localStorage.removeItem('cartItems');
    setCartItems(updatedCart);
  };

  const getCartTotal = () => {
    const priceTotal = cartItems.reduce((total, item) => total + item.price, 0);
    setTotal(priceTotal);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    getCartTotal();
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return <CartContext.Provider value={{cartItems, total, addToCart, removeFromCart}}>{children}</CartContext.Provider>;
};
