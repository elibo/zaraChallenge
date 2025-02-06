import "@/app/globals.css";
import { CartContext } from "@/context/CartProvider";
import { ProductContext } from "@/context/ProductProvider";
import { useRouter } from "next/router";
import { FC, useContext } from "react";

interface Props {
  bgColor: string;
  text: string;
  textColor: string;
}

const MyButton: FC<Props> = ({ bgColor, text, textColor }) => {
  const { addToCart } = useContext(CartContext);
  const { selectedProduct } = useContext(ProductContext);
  console.log(selectedProduct);

  const router = useRouter();
  const doAction = () => {
    if (text === "ADD TO CART") {
      addToCart(selectedProduct);
    } else {
      router.push("/");
    }
  };

  return (
    <button
      className="pl-20 pr-20 pt-5 pb-5  border border-black"
      type="button"
      style={{
        backgroundColor: !selectedProduct.id ? "grey" : bgColor,
        color: textColor,
      }}
      disabled={!selectedProduct.id}
      onClick={doAction}
    >
      {text}
    </button>
  );
};

export default MyButton;
