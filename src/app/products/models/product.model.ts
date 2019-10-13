/**
 * Product model
 */
export interface ProductModel {
  id: number;
  name: string;
  price: number;
  isAvaible?: boolean;
  counter?: number;
  description?: string;
}
