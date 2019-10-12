import { NgModule } from "@angular/core";

import { ProductComponent, ProductListComponent } from "./components/index";
import { ProductService } from "./services/index";
import { SharedModule } from "../shared/index";

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [SharedModule],
  providers: [ProductService],
  exports: [ProductListComponent],
})
export class ProductsModule {}
