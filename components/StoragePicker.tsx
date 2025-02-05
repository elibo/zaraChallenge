import "@/app/globals.css";
import { StorageOption } from "@/interfaces/ProductEntity";

const StoragePicker = (storageOptions: Array<StorageOption>) => {
  const parsedStorage = Object.keys(storageOptions).map((key: string) => {
    const parsed = storageOptions[Number(key)];

    return parsed;
  });

  return (
    <div className="flex flex-col font-light">
      <div className="text-14 font-light mb-6">
        STORAGE. HOW MUCH SPACE DO YOU NEED?
      </div>
      <div className="grid grid-cols-3">
        {parsedStorage.map((option, index) => (
          <div
            key={index}
            className="p-5 border border-black flex justify-center cursor-pointer"
            // onClick={() => setSelectedCapacity(option.capacity)}
          >
            {option.capacity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoragePicker;
