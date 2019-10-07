import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstModule } from "./first/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule // этого пока не требовалось делать. FirstComponent - это такой себе тестовый компонент. Он нам больше не понадобится
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
