import { ProductListEntity } from "./ProductList";

interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

interface StorageOption {
  capacity: string;
  price: number;
}

export interface ProductEntity {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: Specs;
  colorOptions: Array<ColorOption>;
  storageOptions: Array<StorageOption>;
  similarProducts: Array<ProductListEntity>;
}
