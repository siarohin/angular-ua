import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

import { ProductModel } from "../../models/index";

/**
 * Smart component that represents product list
 */
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  /**
   * Product's list input
   */
  @Input()
  public product: ProductModel;

  /**
   * Event emitter for on update cart button click
   */
  @Output()
  public updateCart: EventEmitter<ProductModel> = new EventEmitter();

  constructor(private router: Router) {}

  /**
   * On update cart button click
   */
  public onUpdateCart(): void {
    this.updateCart.emit(this.product);
    this.router.navigate(["/cart"]);
  }

  /**
   * On product's title click
   */
  public onTitleClick(): void {
    const { id } = this.product;
    this.router.navigate(["/products", id]);
  }
}
