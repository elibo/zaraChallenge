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
        <div className="mt-8 ml-24 mr-24">
          <Header />
          <div
            className="ml-24 mb-12 text-12 font-light cursor-pointer"
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
