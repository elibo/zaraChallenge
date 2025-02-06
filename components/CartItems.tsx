"use client";
import { CartContext } from "@/context/CartProvider";

import { useContext } from "react";
import { CartItem } from "./CartItem";

export const CartItems = () => {
  const { cartItems, total } = useContext(CartContext);
  console.log(cartItems, total);

  return (
    <>
      <div className="ml-24 mt-12 text-24 font-light">
        CART &#40;{cartItems.length}&#41;
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className="flex flex-row ml-24 mt-12 ">
          <CartItem {...item} />
        </div>
      ))}
    </>
  );
};
