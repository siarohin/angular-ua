import { Injectable } from "@angular/core";
import { ProductModel } from "../models/index";

/**
 * Default product's configuration
 */
const DEFAULT_CONFIG: Array<ProductModel> = [
  {
    id: 1,
    name: "Hooded Quilt Jacket With DuPont",
    price: 72,
    isAvaible: true,
    description:
      "Our quilted jacket features DuPont Sorona made from 37% annually renewable plant-based ingredients, whilst offering outstanding fill power performance and heat retention.",
  },
  {
    id: 2,
    name: "Black Signature Leather Bomber Jacket",
    price: 159,
    isAvaible: true,
    description:
      "In genuine leather, this jacket has an internal pocket and quilted lining. Dry clean only. Main 100% Leather. Lining 53% Polyester, 47% Viscose.",
  },
  {
    id: 3,
    name: "Wool Rich Double Breasted Jacket",
    price: 143,
    isAvaible: true,
  },
  {
    id: 4,
    name: "Nova Fides Signature Herringbone Blazer",
    price: 200,
    isAvaible: true,
    description:
      "Crafted with fine Italian wool from Nova Fides, this classic herringbone jacket is a quintessentially British wardrobe addition. Finished with contrast corozo buttons, a stylishly printed internal lining, pocket square and lapel pin.",
  },
  {
    id: 5,
    name: "Threadbare Hooded Jacket",
    price: 65,
    isAvaible: true,
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
