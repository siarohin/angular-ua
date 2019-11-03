import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  private renderer: Renderer2;

  @ViewChild("appTitle", { static: false })
  private appTitle: ElementRef;

  constructor(renderer: Renderer2) {
    this.renderer = renderer;
  }

  /**
   * ngAfterViewInit
   */
  public ngAfterViewInit(): void {
    const headingEl: HTMLHeadingElement = this.appTitle.nativeElement;
    const title: string = this.renderer.createText("Angular demo shop");

    this.renderer.appendChild(headingEl, title);
  }
}
