import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]", // *important
})
export class BasicHighlightDirective implements OnInit {
  // Angular uses ServiceDependency Injection via the constructor() arguments
  // IT'S always PRIVATE access
  // Under the hood, Angular always takes care of automatically injecting the dependency
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Best Practice: Always add any ServiceDependency Injection logic in the ngOnInit() lifeCycle hook
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
