import { ColorOption, StorageOption } from "@/interfaces/ProductEntity";
import { ProductCartEntity, ProductListEntity } from "@/interfaces/ProductList";

export interface AppState {
  isLoading: boolean;
  products: ProductListEntity[];
  cartItems: ProductCartEntity[];
  selectedColor: ColorOption;
  selectedStorage: StorageOption;
}

export const initialAppState: AppState = {
  isLoading: true,
  products: [],
  cartItems: [],
  selectedColor: { name: "", hexCode: "", imageUrl: "" },
  selectedStorage: { capacity: "", price: 0 },
};
