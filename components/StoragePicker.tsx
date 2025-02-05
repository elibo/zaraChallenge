import "@/app/globals.css";
import { useState } from "react";

const StoragePicker = () => {
  const storageOptions = [
    { capacity: 128, price: 100 },
    { capacity: 256, price: 200 },
    { capacity: 512, price: 300 },
  ];

  const [selectedCapacity, setSelectedCapacity] = useState(
    storageOptions[0].capacity
  );

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light mb-6">
        STORAGE. HOW MUCH SPACE DO YOU NEED?
      </div>
      <div className="grid grid-cols-3">
        {storageOptions.map((option, index) => (
          <div
            key={index}
            className="p-5 border border-black flex justify-center"
            onClick={() => setSelectedCapacity(option.capacity)}
          >
            {option.capacity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoragePicker;
