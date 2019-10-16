import { Directive, ElementRef, HostListener, Renderer2, Input } from "@angular/core";

/**
 * Highlight directive
 * Set active class on mouse enter event
 */
@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  private elementRef: ElementRef;
  private renderer: Renderer2;

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  /**
   * Active class schema
   */
  @Input("highlight-schema")
  public schema: string;

  @Input()
  public counter: number;

  @Input("touch-schema")
  public touch: string;

  /**
   * Host listener for mouse enter/leave event
   */
  @HostListener("mouseenter", ["$event"])
  @HostListener("mouseleave", ["$event"])
  public onMouseLeave(event: MouseEvent): void {
    this.highlight(this.schema, event);
  }

  /**
   * Host listener for mouse enter/leave event
   */
  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {
    const node: string = (event.target as HTMLElement).nodeName;
    if (node !== "BUTTON") {
      this.counter = Number(this.counter) + 1;
      this.touchElement(this.touch, this.counter);
    }
  }

  private highlight(schema: string, event: MouseEvent): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    event.type === "mouseenter"
      ? this.renderer.addClass(element, schema)
      : this.renderer.removeClass(element, schema);
  }

  private touchElement(touch: string, counter: number): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    counter % 2 === 0
      ? this.renderer.removeClass(element, touch)
      : this.renderer.addClass(element, touch);
  }
}
