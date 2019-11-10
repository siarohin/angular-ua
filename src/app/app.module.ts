import { NgModule } from "@angular/core";

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
export class AppModule {}
