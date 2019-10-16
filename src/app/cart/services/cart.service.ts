import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of as observableOf } from "rxjs";
import { refCount, publishReplay, switchMap } from "rxjs/operators";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";

import { ProductModel } from "../../products/index";

@Injectable()
export class CartService {
  private cartList: Array<ProductModel>;
  private cartListSubj: BehaviorSubject<Array<ProductModel>> = new BehaviorSubject([]);

  /**
   * Observable of cart list
   */
  public cartProducts$: Observable<Array<ProductModel>>;

  /**
   * Observable of total pay
   */
  public totalSum$: Observable<number>;

  /**
   * Observable of total count
   */
  public totalQuantity$: Observable<number>;

  constructor() {
    this.cartList = [];
    this.cartProducts$ = this.cartListSubj.asObservable().pipe(
      publishReplay(1),
      refCount(),
    );
    this.totalSum$ = this.cartProducts$.pipe(
      switchMap(cartList => this.getTotalPay(cartList)),
      publishReplay(1),
      refCount(),
    );
    this.totalQuantity$ = this.cartProducts$.pipe(
      switchMap(cartList => this.getTotalCounter(cartList)),
      publishReplay(1),
      refCount(),
    );
  }

  /**
   * Update cart list
   */
  public updateCartData(item: ProductModel): void {
    if (isEmpty(this.cartList)) {
      this.cartList = [item];
    } else {
      const itemIndex: number = this.cartList.findIndex(product => product.id === item.id);
      this.cartList =
        itemIndex > -1 ? this.updateProduct(item, itemIndex) : [...this.cartList, item];
    }

    this.cartListSubj.next(this.cartList);
  }

  /**
   * Reset all items from cart list
   */
  public removeAllProducts(): void {
    this.cartList = [];
    this.cartListSubj.next(this.cartList);
  }

  /**
   * Remove item from cart
   */
  public removeProduct(item: ProductModel): void {
    this.cartList = this.cartList.filter(items => items.id !== item.id);
    this.cartListSubj.next(this.cartList);
  }

  /**
   * Return cart list with updated item
   */
  private updateProduct(item: ProductModel, itemIndex: number): Array<ProductModel> {
    let newCartList: Array<ProductModel> = [...this.cartList];
    if (item.counter > 0) {
      newCartList[itemIndex] = item;
    } else {
      newCartList = newCartList.filter(product => product.id !== item.id);
    }
    return [...newCartList];
  }

  /**
   * Return Observable of total pay
   */
  private getTotalPay(cartList: Array<ProductModel>): Observable<number> {
    let totalPay = 0;
    cartList.map(item => {
      const counter: number = isNil(item.counter) ? 1 : item.counter;
      totalPay = totalPay + item.price * counter;
    });
    return observableOf(totalPay);
  }

  /**
   * Return Observable of counter
   */
  private getTotalCounter(cartList: Array<ProductModel>): Observable<number> {
    let totalCounter = 0;
    cartList.map(item => {
      const counter: number = isNil(item.counter) ? 1 : item.counter;
      totalCounter = totalCounter + counter;
    });
    return observableOf(totalCounter);
  }
}
