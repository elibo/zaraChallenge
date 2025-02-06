"use client";
import { CartContext } from "@/context/CartProvider";

import { useContext } from "react";
import { CartItem } from "./CartItem";

export const CartItems = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="max-[500px]:m-4 xl:ml-24 xl:mt-12 text-24 font-light">
        CART &#40;{cartItems.length}&#41;
      </div>
      {cartItems.map((item, index) => (
        <div key={index} className="flex flex-row xl:ml-24 xl:mt-12 ">
          <CartItem item={item} index={index} />
        </div>
      ))}
    </>
  );
};
