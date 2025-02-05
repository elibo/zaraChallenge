import "@/app/globals.css";
import { ProductContext } from "@/context/ProductProvider";
import { ColorOption } from "@/interfaces/ProductEntity";
import { useContext } from "react";

const ColorPicker = (colorOptions: Array<ColorOption>) => {
  const { selectedColor, setSelectedColor } = useContext(ProductContext);

  const parsedColors = Object.keys(colorOptions).map((key: string) => {
    const parsed = colorOptions[Number(key)];

    return parsed;
  });

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light pb-4">COLOR. PICK YOUR FAVOURITE</div>
      <div className="flex flex-row">
        {parsedColors.map((option, index) => (
          <div
            key={index}
            className={`h-7 w-7 m-2 border border-gray-200 cursor-pointer`}
            style={{ backgroundColor: option.hexCode }}
            onClick={() => setSelectedColor(option.name)}
          ></div>
        ))}
      </div>
      <div className="text-12 font-light"> {selectedColor} </div>
    </div>
  );
};

export default ColorPicker;
