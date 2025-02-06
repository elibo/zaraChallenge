import "@/app/globals.css";
import { DetailContext } from "@/context/DetailProvider";
import { ColorOption } from "@/interfaces/ProductEntity";

import { useContext, useEffect, useState } from "react";

const ColorPicker = () => {
  const { product, selectedColor, setSelectedColor } =
    useContext(DetailContext);
  const [options, setOptions] = useState<ColorOption[]>([]);

  useEffect(() => {
    if (product && product.colorOptions) {
      setOptions(product.colorOptions);
    }
  }, [product]);

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light pb-4">COLOR. PICK YOUR FAVOURITE</div>
      <div className="flex flex-row">
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              className={`h-7 w-7 m-2 border border-[#cccccc] cursor-pointer`}
              style={{
                backgroundColor: option.hexCode,
                borderColor:
                  selectedColor.name === option.name ? "black" : "#cccccc",
              }}
              onClick={() => setSelectedColor(option)}
            ></div>
          ))}
      </div>
      <div className="text-12 font-light"> {selectedColor.name} </div>
    </div>
  );
};

export default ColorPicker;
