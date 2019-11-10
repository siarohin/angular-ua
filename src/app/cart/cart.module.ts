import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartListComponent } from "./components/index";
import { CartService } from "./services/index";
import { CartItemComponent } from "./components/cart-item/index";
import { SharedModule } from "../shared/index";
import { CartRoutingModule } from "./cart-routing.module";

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [CommonModule, SharedModule, CartRoutingModule],
  providers: [CartService],
  exports: [],
})
export class CartModule {}
