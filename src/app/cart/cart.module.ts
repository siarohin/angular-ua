import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartListComponent } from "./components/index";
import { CartService } from "./services/index";
import { CartItemComponent } from "./components/cart-item/index";
import { SharedModule } from "../shared/index";

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  providers: [CartService],
  exports: [CartListComponent],
})
export class CartModule {}
