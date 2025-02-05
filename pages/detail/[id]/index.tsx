import ColorPicker from "@/components/ColorPicker";
import StoragePicker from "@/components/StoragePicker";
import Image from "next/image";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import MyButton from "@/components/MyButton";

const Page = () => {
  return (
    <div className="mt-8 ml-24 mr-24">
      <Header />
      <div className="w-3xl flex flex-row justify-center items-center gap-[12vw]">
        <Image
          className="w-312px h-257px"
          src="/phone.png"
          alt="img"
          width={510}
          height={630}
        />
        <div className="w-3xl h-380px flex flex-col">
          <div className="h-32px mb-2 text-24 font-light text-[#000000]">
            GALAXY S24 ULTRA
          </div>
          <div className="h-32px mb-20 text-20 font-light text-[#000000]">
            1199 EUR
          </div>
          <div className="mb-20">
            <StoragePicker />
          </div>
          <div className="mb-10">
            <ColorPicker />
          </div>
          <MyButton bgColor="black" text="anadir" textColor="white" />
        </div>
      </div>
    </div>
  );
};

export default Page;
