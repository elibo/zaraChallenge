"use client";
import { CartContext } from "@/context/CartProvider";
import { ProductCartEntity } from "@/interfaces/ProductList";
import Image from "next/image";
import { useContext } from "react";

export const CartItem = ({
  name,
  id,
  basePrice,
  imageUrl,
  capacity,
  color,
}: ProductCartEntity) => {
  const { cartItems, total } = useContext(CartContext);
  console.log(cartItems, total);
  const { removeFromCart } = useContext(CartContext);
  const deleteFromCart = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div className="w-548px h-324px flex">
      <Image
        className="w-312px h-257px"
        src={imageUrl}
        alt="img"
        width={312}
        height={257}
      />
      <div className="h-100 flex flex-col justify-between pt-12 pr-8 pl-8">
        <div>
          <div className="text-12 font-light">{name.toUpperCase()}</div>
          <div className="text-12 font-light">
            {capacity} GB | {color.toUpperCase()}{" "}
          </div>
          <div className="text-12 font-light pt-6">{basePrice} EUR</div>
        </div>

        <div
          className="pb-12 text-12 font-light text-[#DF0000] cursor-pointer"
          onClick={() => deleteFromCart(id)}
        >
          Eliminar
        </div>
      </div>
    </div>
  );
};
