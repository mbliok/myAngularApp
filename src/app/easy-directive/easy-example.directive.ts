import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appEasyExample]'
})
export class EasyExampleDirective implements OnInit {
  @Input() dangerColor: string = 'violet';
  @Input() defaultColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red'; // set default color


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(myeventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    //  this.backgroundColor = 'red'
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(asdeventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
    //  this.backgroundColor = 'pink'
    this.backgroundColor = this.dangerColor;
  }
}
