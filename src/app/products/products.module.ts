import { NgModule } from "@angular/core";

import { ProductComponent, ProductListComponent, ProductDetailComponent } from "./components/index";
import { ProductService } from "./services/index";
import { SharedModule } from "../shared/index";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductDetailComponent, ProductsComponent],
  imports: [SharedModule, ProductsRoutingModule],
  providers: [ProductService],
  exports: [],
})
export class ProductsModule {}
