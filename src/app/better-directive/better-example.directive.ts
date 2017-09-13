import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterExample]'
})
export class BetterExampleDirective implements OnInit {
  // The ideais for example this is not created on the DOM like asinc
  // ...private elRef: ElementRef.... giv reference to the elem which stil doesn't exist
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    // the 3-th property is flag : in this case !important - 'background-color:blue!important'
  }
}
