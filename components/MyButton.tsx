import "@/app/globals.css";
import { ProductContext } from "@/context/ProductProvider";
import { useContext, FC } from "react";

interface Props {
  bgColor: string;
  text: string;
  textColor: string;
}

const MyButton: FC<Props> = ({ bgColor, text, textColor }) => {
  const { setCartItems } = useContext(ProductContext);

  const doAction = () => {
    console.log("do action");
  };

  return (
    <div className="w-260">
      <button
        className={`pl-10 pr-10 pt-5 pb-5  border border-black bg-${bgColor} text-${textColor}`}
        type="button"
        onClick={doAction}
      >
        {text}
      </button>
    </div>
  );
};

export default MyButton;
