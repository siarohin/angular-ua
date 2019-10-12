import { Component, OnInit } from "@angular/core";

import { CategoryId } from "./core/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /**
   * Product name
   */
  public name: string;

  /**
   * Product description
   */
  public description: string;

  /**
   * Product price
   */
  public price: number;

  /**
   * Product category
   */
  public category: any;

  /**
   * Is product available
   */
  public isAvailable: boolean;

  /**
   * Category that avaible for this product
   */
  public categoryId: Array<CategoryId>;

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.name = "My Google Chromebook";
    this.description =
      "My Google Chromebook brings together all the expert advice and easy.";
    this.price = 399.99;
    this.category = "Computers";
    this.isAvailable = true;
    this.categoryId = [
      { name: "Computers", isVisible: true },
      { name: "Video Games", isVisible: true },
      { name: "Toys", isVisible: true },
      { name: "Electronic Devices", isVisible: false },
    ];
  }

  /**
   * On buy event
   */
  public onBuyEvent(message): void {
    console.log(message);
  }
}
