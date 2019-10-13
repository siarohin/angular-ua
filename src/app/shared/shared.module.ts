import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

import { HighlightDirective } from "./directives/index";

@NgModule({
  declarations: [HighlightDirective],
  imports: [FormsModule, MatButtonModule, BrowserModule, BrowserAnimationsModule, MatCardModule],
  exports: [
    HighlightDirective,
    FormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
})
export class SharedModule {}
