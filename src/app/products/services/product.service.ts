import { Injectable } from "@angular/core";
import { ProductModel } from "../models/index";

/**
 * Default product's configuration
 */
const DEFAULT_CONFIG: Array<ProductModel> = [
  { id: 1,
    name: "The Ultimate Question",
    price: 200
  },
  { id: 2,
    name: "Pantone: The Twentieth",
    price: 99
  },
  { id: 3,
    name: "Oxford Spanish Mini Dictionary",
    price: 199.99
  },
];

/**
 * Product service
 */
@Injectable()
export class ProductService {
  private products: Array<ProductModel> = DEFAULT_CONFIG;

  /**
   * Get product list
   */
  public getProducts(): Array<ProductModel> {
    return this.products;
  }
}
