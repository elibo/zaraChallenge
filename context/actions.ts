import { ColorOption, StorageOption } from "@/interfaces/ProductEntity";
import { ProductCartEntity } from "@/interfaces/ProductList";

export enum ActionType {
  AddProduct,
  SetSelectedColor,
  SetSelectedStorage,
  RemoveFromCart,
}

export interface AddProduct {
  type: ActionType.AddProduct;
  payload: ProductCartEntity;
}

export interface SetSelectedColor {
  type: ActionType.SetSelectedColor;
  payload: ColorOption;
}

export interface SetSelectedStorage {
  type: ActionType.SetSelectedStorage;
  payload: StorageOption;
}

export interface RemoveFromCart {
  type: ActionType.RemoveFromCart;
  payload: { id: string };
}

export type AppActions =
  | AddProduct
  | SetSelectedColor
  | SetSelectedStorage
  | RemoveFromCart;
