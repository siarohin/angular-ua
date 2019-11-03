import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { registerLocaleData } from "@angular/common";
import localeBy from "@angular/common/locales/ru-BY";
registerLocaleData(localeBy);

import { HighlightDirective } from "./directives/index";
import {
  OrderByPipe,
  FilterByNamePipe,
  MapByNamePipe,
  CapitalizeFirstLetterPipe,
} from "./pipes/index";

@NgModule({
  declarations: [    HighlightDirective,
    OrderByPipe,
    FilterByNamePipe,
    MapByNamePipe,
    MapByNamePipe,
    CapitalizeFirstLetterPipe,
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "ru-BY" }],
  exports: [
    FormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HighlightDirective,
    OrderByPipe,
    FilterByNamePipe,
    MapByNamePipe,
    CapitalizeFirstLetterPipe,
  ],
})
export class SharedModule {}
