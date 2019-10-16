import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/index";
import { CartModule } from "./cart/index";
import { SharedModule } from "./shared/index";
import { AboutComponent } from "./about/index";

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [AppRoutingModule, CartModule, ProductsModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
