import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import assign from "lodash/assign";
import isNil from "lodash/isNil";

import { CartService } from "../../../cart/index";
import { ProductModel } from "../../models/index";
import { ProductService } from "../../services/index";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // private cartService: CartService;
  // private productService: ProductService;
  private subscription: Subscription;

  /**
   * Product list
   */
  public productList: Array<ProductModel>;

  // Так не принято писать
  // constructor(cartService: CartService, productService: ProductService) {
  //   this.cartService = cartService;
  //   this.productService = productService;
  // }

  constructor(private cartService: CartService, private productService: ProductService) {}

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.subscription = this.cartService.cartListObs$.subscribe(cartList => {
      this.productList = this.productList.map(product =>
        this.disableProductInCartList(product, cartList),
      );
    });
  }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Add item to cart
   */
  public onUpdateCart(item: ProductModel): void {
    this.cartService.updateCartList(item);
  }

  /**
   * Ability to add product into cart
   */
  private disableProductInCartList(
    product: ProductModel,
    cartList: Array<ProductModel>,
  ): ProductModel {
    const productInCartList: ProductModel = cartList.find(cartItem => cartItem.id === product.id);
    if (!isNil(productInCartList)) {
      return assign({}, productInCartList, {
        isAvaible: false,
      });
    } else {
      return assign({}, product, {
        isAvaible: true,
        counter: undefined,
      });
    }
  }
}
