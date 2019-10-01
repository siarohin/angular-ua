import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  private logger: string;

  /**
   * Event emitter for button
   */
  @Output()
  public buyClickEvent: EventEmitter<string> = new EventEmitter();

  /**
   * ngOnInit
   */
  public ngOnInit(): void {
    this.logger = "Button was clicked";
  }

  /**
   * On buy button click
   */
  public onBuyClick(): void {
    this.buyClickEvent.emit(this.logger);
  }
}
