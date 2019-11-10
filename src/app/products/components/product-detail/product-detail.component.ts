import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { ProductService } from "../../services/index";
import { CartService } from "../../../cart/index";
import { ProductModel } from "../../models/index";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  /**
   * Product item
   */
  public product: ProductModel;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.subscription = this.productService
      .getProductFromList(id)
      .subscribe(product => (this.product = product));
  }

  /**
   * ngOnDestroy
   */
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * On update cart button click
   */
  public onUpdateCart(): void {
    this.cartService.updateCartData(this.product);
    this.router.navigate(["/cart"]);
  }
}
