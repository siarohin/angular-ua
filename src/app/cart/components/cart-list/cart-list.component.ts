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
   * Selected value
   */
  public selectedValue = "name";

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
    this.cartList$ = this.cartService.cartProducts$;
    this.totalPay$ = this.cartService.totalSum$;
    this.totalCounter$ = this.cartService.totalQuantity$;
  }

  /**
   * Reset cart
   */
  public onResetCart(): void {
    this.cartService.removeAllProducts();
  }

  /**
   * Remove item from cart
   */
  public onRemoveProduct(item: ProductModel): void {
    this.cartService.removeProduct(item);
  }

  /**
   * Update item's count in cart
   */
  public onUpdateProduct(item: ProductModel): void {
    this.cartService.updateCartData(item);
  }

  /**
   * Change selected value by the user on selectionChange event
   */
  public onSelectionChange(value: string): void {
    this.selectedValue = value;
  }
}
