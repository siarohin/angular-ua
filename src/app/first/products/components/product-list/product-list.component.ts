import { Component, OnInit } from "@angular/core";

import { ProductService } from "../../services/index";
import { ProductModel } from "../../models/index";
import { CartService } from "src/app/first/cart";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  private productService: ProductService;
  private cartService: CartService;

  /**
   * Product list
   */
  public productList: Array<ProductModel>;

  constructor(productServise: ProductService, cartService: CartService) {
    this.productService = productServise;
    this.cartService = cartService;
  }

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  /**
   * Add item to cart
   */
  public onUpdateCart(item: ProductModel): void {
    this.cartService.updateCartList(item);
  }
}
