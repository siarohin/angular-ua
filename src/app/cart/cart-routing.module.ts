import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CartListComponent } from "./components/index";

const routes: Routes = [
  {
    path: "cart",
    component: CartListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
