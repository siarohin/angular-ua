import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent, ProductDetailComponent } from "./components/index";
import { ProductsComponent } from "./products.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    children: [
      {
        path: "",
        component: ProductListComponent,
      },
      {
        path: ":id",
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
