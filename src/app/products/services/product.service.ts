import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { ProductModel } from "../models/index";
import { map, tap } from "rxjs/operators";

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
  private productsSubj: BehaviorSubject<Array<ProductModel>> = new BehaviorSubject(DEFAULT_CONFIG);

  /**
   * Observable of array product's list
   */
  public products$: Observable<Array<ProductModel>>;

  constructor() {
    this.products$ = this.productsSubj.asObservable();
  }

  /**
   * Return Observable of product from list
   */
  public getProductFromList(id: number | string): Observable<ProductModel> {
    return this.products$.pipe(
      map((products: Array<ProductModel>) => {
        return products.find(product => product.id === id);
      }),
    );
  }

  /**
   * Add product to product's list
   */
  public addProductToList(value: ProductModel): void {
    this.products$.pipe(
      tap((products: Array<ProductModel>) => {
        const newProductsList: Array<ProductModel> = [...products, value];
        this.productsSubj.next(newProductsList);
      }),
    );
  }

  /**
   * Update product in product's list
   */
  public updateProductInList(value: ProductModel): void {
    this.products$.pipe(
      tap((products: Array<ProductModel>) => {
        const indexForUpdate: number = products.findIndex(product => product.id === value.id);
        if (indexForUpdate > -1) {
          const newProductsList: Array<ProductModel> = products.splice(indexForUpdate, 1, value);
          this.productsSubj.next(newProductsList);
        }
      }),
    );
  }
}
