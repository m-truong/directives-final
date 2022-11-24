import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  // ** Note: @HostBinding allows you to bind or GRAB a property on the ELEMENT that the DIRECTIVE is APPLIED to
  // ** just pass a string "style.backgroundColor"
  // Now you have a PROPERTY that you've bound BETWEEN elementRef && TS file.
  // requires camelCase

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  /**
   *
   * @param eventData
   * @HostListener('mouseenter') mouseOver(eventData: Event) {
   * this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
   * }
   */

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
