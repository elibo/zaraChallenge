"use client";
import { CartContext } from "@/context/CartProvider";
import { ProductCartEntity } from "@/interfaces/ProductList";
import Image from "next/image";
import { FC, useContext } from "react";

interface Props {
  item: ProductCartEntity;
  index: number;
}

export const CartItem: FC<Props> = ({ item, index }) => {
  const { removeFromCart } = useContext(CartContext);
  const { imageUrl, name, price, capacity, color } = item;

  const deleteFromCart = (index: number) => {
    removeFromCart(index);
  };

  return (
    <div className="2xl:w-548px 2xl:h-324px flex">
      <Image
        className="max-[500px]:w-40 max-[500px]:h-40 max-[500px]:pt-6"
        src={imageUrl}
        alt="img"
        width={312}
        height={257}
      />
      <div className="h-100 flex flex-col justify-between 2xl:pt-12 max-[500px]:pt-6 pr-8 pl-8">
        <div>
          <div className="text-12 font-light">{name.toUpperCase()}</div>
          <div className="text-12 font-light">
            {capacity} GB | {color.toUpperCase()}{" "}
          </div>
          <div className="text-12 font-light pt-6">{price} EUR</div>
        </div>

        <div
          className="pb-12 text-12 font-light text-[#DF0000] cursor-pointer"
          onClick={() => deleteFromCart(index)}
        >
          Eliminar
        </div>
      </div>
    </div>
  );
};
