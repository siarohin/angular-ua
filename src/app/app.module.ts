import { NgModule } from "@angular/core";
import { Router } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/index";
import { CartModule } from "./cart/index";
import { SharedModule } from "./shared/index";

@NgModule({
  declarations: [AppComponent],
  imports: [CartModule, ProductsModule, SharedModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === "function" ? value.name : value;

    console.log("Routes: ", JSON.stringify(router.config, replacer, 2));
  }
}
