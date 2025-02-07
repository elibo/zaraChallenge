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

  const onKeyPress = (
    ev: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
    option: StorageOption
  ) => {
    if (ev.key === "Enter") {
      setSelectedStorage(option);
    }
  };

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light xl:mb-6">
        STORAGE. HOW MUCH SPACE DO YOU NEED?
      </div>
      <div className="grid grid-cols-3">
        {options &&
          options.map((option, index) => (
            <div
              key={index}
              tabIndex={0}
              style={{
                borderColor:
                  selectedStorage.capacity === option.capacity
                    ? "black"
                    : "#cccccc",
              }}
              onKeyUp={(ev) => onKeyPress(ev, option)}
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
