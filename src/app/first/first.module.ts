import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FirstComponent } from "./first.component";
import { ProductComponent, ProductListComponent, ProductService } from "./products/index";
import { CartComponent, CartService } from "./cart/index";

@NgModule({
  declarations: [
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ProductService, CartService],
  exports: [FirstComponent, CartComponent]
})
export class FirstModule { }
