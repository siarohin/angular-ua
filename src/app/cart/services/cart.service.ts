import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

import { CartList } from "../models";

@Injectable()
export class CartService {
  private cartList: Array<CartList>;
  private cartListSubj: BehaviorSubject<Array<CartList>> = new BehaviorSubject([]);

  /**
   * Observable of cart list
   */
  public cartListObs$: Observable<Array<CartList>>;

  constructor() {
    this.cartList = [];
    this.cartListObs$ = this.cartListSubj.asObservable();
  }

  /**
   * Update cart list
   */
  public updateCartList(cartList: CartList): void {
    this.cartList = this.cartList.includes(cartList)
      ? [...this.cartList]
      : [...this.cartList, cartList];
    this.cartListSubj.next(this.cartList);
  }

  /**
   * Reset all items from cart list
   */
  public resetCartList(): void {
    this.cartList = [];
    this.cartListSubj.next(this.cartList);
  }

  /**
   * Remove item from cart
   */
  public removeItem(item: CartList): void {
    this.cartList = this.cartList.filter(items => items.id !== item.id);
    this.cartListSubj.next(this.cartList);
  }
}
