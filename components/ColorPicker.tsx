import "@/app/globals.css";
import { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colorOptions = [
    { name: "white", hexCode: "#aaaaaa", image: "" },
    { name: "grey", hexCode: "#ffffff", image: "" },
    { name: "black", hexCode: "#000000", image: "" },
    { name: "gold", hexCode: "#444444", image: "" },
  ];

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light pb-4">COLOR. PICK YOUR FAVOURITE</div>
      <div className="flex flex-row">
        {colorOptions.map((option, index) => (
          <>
            <div
              key={index}
              className="h-7 w-7 m-2 block bg-green border border-gray-200 cursor-pointer "
              onClick={() => setSelectedColor(option.name)}
            ></div>
          </>
        ))}
        <div className="text-12 font-light"> {selectedColor} </div>
      </div>
    </div>
  );
};

export default ColorPicker;
