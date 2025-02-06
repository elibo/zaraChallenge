import "@/app/globals.css";
import { CartContext } from "@/context/CartProvider";
import { DetailContext } from "@/context/DetailProvider";
import { useRouter } from "next/router";
import { FC, useContext } from "react";

interface Props {
  bgColor: string;
  text: string;
  textColor: string;
}

const MyButton: FC<Props> = ({ bgColor, text, textColor }) => {
  const { addToCart } = useContext(CartContext);
  const { product, selectedColor, selectedStorage } = useContext(DetailContext);

  const router = useRouter();
  const doAction = () => {
    if (text === "ADD TO CART") {
      const cartItem = {
        id: product.id,
        capacity: selectedStorage.capacity,
        name: product.name,
        price: selectedStorage.price,
        color: selectedColor.name,
        imageUrl: selectedColor.imageUrl,
      };
      addToCart(cartItem);
    } else {
      router.push("/");
    }
  };

  return (
    <button
      className="pl-20 pr-20 pt-5 pb-5  border border-black"
      type="button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={doAction}
    >
      {text}
    </button>
  );
};

export default MyButton;
