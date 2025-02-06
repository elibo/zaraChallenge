export interface ProductListEntity {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface ProductCartEntity {
  id: string;
  name: string;
  imageUrl: string;
  capacity: string;
  price: number;
  color: string;
}
