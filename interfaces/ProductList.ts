export interface ProductListEntity {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface ProductCartEntity extends Omit<ProductListEntity, "brand"> {
  capacity: string;
  color: string;
}
