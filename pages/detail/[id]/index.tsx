import "@/app/globals.css";
import { Header } from "@/components/Header";

import { useRouter } from "next/router";
import { CartProvider } from "@/context/CartProvider";

import { ProductDetail } from "@/components/ProductDetail";
import DetailProvider from "@/context/DetailProvider";

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <CartProvider>
      <DetailProvider>
        <div className="xl:mt-8 xl:ml-24 xl:mr-24 max-[500px]:m-4">
          <Header />
          <div
            className="max-[500px]:m-4 xl:ml-24 xl:mb-12 text-12 font-light cursor-pointer"
            onClick={handleBack}
          >
            BACK
          </div>
          <ProductDetail />
        </div>
      </DetailProvider>
    </CartProvider>
  );
};

export default Page;
