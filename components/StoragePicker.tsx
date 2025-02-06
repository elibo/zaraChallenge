"use client";
import "@/app/globals.css";
import { DetailContext } from "@/context/DetailProvider";
import { StorageOption } from "@/interfaces/ProductEntity";
import { useContext, useEffect, useState } from "react";

const StoragePicker = () => {
  const { product, selectedStorage, setSelectedStorage } =
    useContext(DetailContext);
  const [options, setOptions] = useState<StorageOption[]>([]);

  useEffect(() => {
    if (product && product.storageOptions) {
      setOptions(product.storageOptions);
    }
  }, [product]);

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light 2xl:mb-6">
        STORAGE. HOW MUCH SPACE DO YOU NEED?
      </div>
      <div className="grid grid-cols-3">
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              style={{
                borderColor:
                  selectedStorage.capacity === option.capacity
                    ? "black"
                    : "#cccccc",
              }}
              className="p-5 border border-[#cccccc] flex justify-center cursor-pointer"
              onClick={() => setSelectedStorage(option)}
            >
              {option.capacity}
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoragePicker;
