import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CartService } from "../../services/index";
import { ProductModel } from "../../../products/index";

/**
 * Smart component that represents cart list
 */
@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.scss"],
})
export class CartListComponent implements OnInit {
  // private cartService: CartService;

  /**
   * Observable of cart list
   */
  public cartList$: Observable<Array<ProductModel>>;

  /**
   * Observable of all item's cost
   */
  public totalPay$: Observable<number>;

  /**
   * Observable of all item's counter
   */
  public totalCounter$: Observable<number>;

  constructor(private cartService: CartService) {
    // this.cartService = cartService;
  }

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.cartList$ = this.cartService.cartListObs$;
    this.totalPay$ = this.cartService.totalPayObs$;
    this.totalCounter$ = this.cartService.totalCounterObs$;
  }

  /**
   * Reset cart
   */
  public onResetCart(): void {
    this.cartService.resetCartList();
  }

  /**
   * Remove item from cart
   */
  public onRemoveItem(item: ProductModel): void {
    this.cartService.removeItem(item);
  }

  /**
   * Update item's count in cart
   */
  public onUpdateItem(item: ProductModel): void {
    this.cartService.updateCartList(item);
  }
}
