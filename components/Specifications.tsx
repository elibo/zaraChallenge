import { DetailContext } from "@/context/DetailProvider";
import { useContext } from "react";

const classString =
  "text-12 font-light border-black border-t-2 flex flex-row items-center";

export const Specifications = () => {
  const { product } = useContext(DetailContext);

  return (
    <div className="ml-48 mr-24 mt-32 w-548px h-324px flex flex-col">
      <div className="text-20 font-light mb-12">SPECIFICATIONS</div>
      {product && product.specs && (
        <div className="w-7xl grid grid-rows-11 grid-cols-3">
          <div className="text-12 font-light  border-black border-t-2 flex flex-row items-center ">
            BRAND
          </div>
          <div className={`col-span-2 ${classString}`}>{product.brand}</div>
          <div className={classString}>NAME</div>
          <div className={`col-span-2 ${classString}`}>{product.name}</div>
          <div className={classString}>DESCRIPTION</div>
          <div className={`col-span-2 ${classString}`}>
            {product.description}
          </div>
          <div className={classString}>SCREEN</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.screen}
          </div>
          <div className={classString}>RESOLUTION</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.resolution}
          </div>
          <div className={classString}>PROCESSOR</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.processor}
          </div>
          <div className={classString}>MAIN CAMERA</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.mainCamera}
          </div>
          <div className={classString}>SELFIE CAMERA</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.selfieCamera}
          </div>
          <div className={classString}>BATTERY</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.battery}
          </div>
          <div className={classString}>OS</div>
          <div className={`col-span-2 ${classString}`}>{product.specs.os}</div>
          <div className={classString}>SCREEN REFRESH RATE</div>
          <div className={`col-span-2 ${classString}`}>
            {product.specs.screenRefreshRate}
          </div>
        </div>
      )}
    </div>
  );
};
