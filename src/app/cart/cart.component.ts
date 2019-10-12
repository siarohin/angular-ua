import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CartService } from "./services/index";
import { CartList } from "./models/index";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  private cartService: CartService;

  /**
   * Cart list that contains name and price
   */
  public cartList$: Observable<Array<CartList>>;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.cartList$ = this.cartService.cartListObs$;
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
  public onRemoveItem(item: CartList): void {
    this.cartService.removeItem(item);
  }
}
