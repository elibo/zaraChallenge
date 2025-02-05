import "@/app/globals.css";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  bgColor: string;
  text: string;
  textColor: string;
}

const MyButton: FC<Props> = ({ bgColor, text, textColor }) => {
  const router = useRouter();
  const doAction = () => {
    if (text === "ADD TO CART") {
      console.log("add");
    } else {
      router.push("/");
    }
  };

  return (
    <button
      className="pl-20 pr-20 pt-5 pb-5  border border-black"
      type="button"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={doAction}
    >
      {text}
    </button>
  );
};

export default MyButton;
