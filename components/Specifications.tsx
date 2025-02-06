import { DetailContext } from "@/context/DetailProvider";
import { useContext } from "react";

export const Specifications = () => {
  const { product } = useContext(DetailContext);

  return (
    <div className="ml-48 mr-24 mt-32 w-548px h-324px flex flex-col">
      <div className="text-20 font-light mb-12">SPECIFICATIONS</div>
      {product && product.specs && (
        <div className="w-7xl grid grid-rows-11 grid-cols-3 ">
          <div className="text-12 font-light">BRAND</div>
          <div className="text-12 font-light col-span-2">{product.brand}</div>
          <div className="text-12 font-light ">NAME</div>
          <div className="text-12 font-light col-span-2">{product.name}</div>
          <div className="text-12 font-light ">DESCRIPTION</div>
          <div className="text-12 font-light col-span-2">
            {product.description}
          </div>
          <div className="text-12 font-light">SCREEN</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.screen}
          </div>
          <div className="text-12 font-light">RESOLUTION</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.resolution}
          </div>
          <div className="text-12 font-light">PROCESSOR</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.processor}
          </div>
          <div className="text-12 font-light">MAIN CAMERA</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.mainCamera}
          </div>
          <div className="text-12 font-light">SELFIE CAMERA</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.selfieCamera}
          </div>
          <div className="text-12 font-light">BATTERY</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.battery}
          </div>
          <div className="text-12 font-light">OS</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.os}
          </div>
          <div className="text-12 font-light">SCREEN REFRESH RATE</div>
          <div className="text-12 font-light col-span-2">
            {product.specs.screenRefreshRate}
          </div>
        </div>
      )}
    </div>
  );
};
