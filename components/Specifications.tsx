import { DetailContext } from "@/context/DetailProvider";
import { useContext } from "react";

const classString =
  "text-12 font-light border-black border-t-2 flex flex-row items-center pb-4 pt-4";

const parseKey = (key: string) => {
  switch (key) {
    case "mainCamera":
      return "MAIN CAMERA";
    case "selfieCamera":
      return "SELFIE CAMERA";
    case "screenRefreshRate":
      return "SCREEN REFRESH RATE";

    default:
      return key.toUpperCase();
  }
};

const Specifications = () => {
  const { product } = useContext(DetailContext);

  return (
    <div className="ml-52 mr-24 mt-32 flex flex-col max-[500px]:hidden">
      <div className="text-20 font-light mb-12">SPECIFICATIONS</div>
      {product && product.specs && (
        <div className="w-7xl grid grid-rows-11 grid-cols-3">
          {Object.keys(product.specs).map((key) => (
            <>
              <div className={classString}>{parseKey(key)}</div>
              <div className={` ${classString} col-span-2`}>
                {product.specs[key]}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default Specifications;
