import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from "@angular/core";

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
  public productList: Array<ProductModel>;

  /**
   * Event emitter for on update cart button click
   */
  @Output()
  public updateCart: EventEmitter<ProductModel> = new EventEmitter();

  /**
   * On update cart button click
   */
  public onUpdateCart(product: ProductModel): void {
    this.updateCart.emit(product);
  }
}
