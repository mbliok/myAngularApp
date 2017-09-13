import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverExample]'
})
export class HoverExampleDirective implements OnInit {
  // The ideais for example this is not created on the DOM like asinc
  // ...private elRef: ElementRef.... giv reference to the elem which stil doesn't exist
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')
  }
  // same directive with hover
  // this can be trigered when ever some event oncourse
  // and that event specified here @HostListener('') as argument, as a sting
  @HostListener('mouseenter') mouseover(myeventData: Event) { // receve eventData of type event
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
  }
  @HostListener('mouseleave') mouseleave(asdeventData: Event) { // receve eventData of type event
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
  }
}
