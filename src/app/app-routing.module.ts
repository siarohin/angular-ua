import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./products/index";
import { CartListComponent } from "./cart/index";

const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent,
  },
  { path: "cart", component: CartListComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
