import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  // *** MUST DETERMINE*** : WHAT THIS SYNTAX IS FOR?!
  // *** Why is it possible to USE ANY DIRECTIVE with
  // the = syntax
  @Input("appUnless") set unlessInput(condition: boolean) {
    console.log(condition);
    if (!condition) {
      // CREATE AN EMBEDDED VIEW ON THE <ng-template> ref
      // using this.templateRef<div>
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // REMOVES FROM DOM
      this.vcRef.clear();
    }
  }
}
