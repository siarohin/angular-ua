import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import assign from "lodash/assign";
import isNil from "lodash/isNil";

import { ProductModel } from "../../../products/index";
import { ButtonLabel } from "../models/index";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements AfterViewInit {
  private itemBF: ProductModel;
  private itemCounterBF: number;

  @ViewChild("increment", { static: false }) btn: ElementRef<any>;

  /**
   * Set cart list item
   * Param {{ProductModel}}
   */
  @Input()
  public set item(item: ProductModel) {
    this.itemBF = item;
    this.itemCounterBF = isNil(item.counter) ? 1 : item.counter;
  }

  /**
   * Get cart list item
   * Return {{ProductModel}}
   */
  public get item(): ProductModel {
    return this.itemBF;
  }

  /**
   * Get item's counter
   * Return {{number}}
   */
  public get itemCounter(): number {
    return this.itemCounterBF;
  }

  /**
   * Event emitter for on remove item button click
   */
  @Output()
  public removeProduct: EventEmitter<ProductModel> = new EventEmitter();

  /**
   * Event emitter for on update item button click
   */
  @Output()
  public updateProduct: EventEmitter<ProductModel> = new EventEmitter();

  /**
   * Host listener for click event
   */
  @HostListener("click", ["$event.target"])
  public onClick(node: HTMLButtonElement): void {
    const label: string = node.name;
    const isUpdateButton: boolean =
      label === ButtonLabel.Decrement || label === ButtonLabel.Increment;
    const isRemoveButton: boolean = label === ButtonLabel.Remove;

    if (isUpdateButton) {
      this.updateCartData(this.item, label);
    } else if (isRemoveButton) {
      this.removeFromCartList(this.item);
    }
  }

  private removeFromCartList(item: ProductModel): void {
    this.removeProduct.emit(item);
  }

  private updateCartData(item: ProductModel, label: string): void {
    let counter: number;
    if (label === ButtonLabel.Decrement) {
      // decrement count (on first init is undefined)
      counter = item.counter > 0 ? item.counter - 1 : 0;
    } else {
      // increment count (on first init is undefined)
      counter = item.counter > 0 ? item.counter + 1 : 2;
    }

    const newItem: ProductModel = assign({}, item, { counter });
    this.updateProduct.emit(newItem);
  }

  ngAfterViewInit() {
    // все доступно
    console.log(this.btn);
    // но свойство скрыто, вероятно для того, чтобы не пытаться напрямую изменять DOM
    console.log(this.btn._elementRef.nativeElement);
    // а поповоду ::ng-deep, я так понимаю альтернатив пока нет
    // https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep
  }
}
