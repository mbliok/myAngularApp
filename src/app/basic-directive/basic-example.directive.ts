import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[appBasicExample]' // selector is reqired 
                                    // and this the name of directive 
                                    // which we giv to the html elm
})
export class BasicExampleDirective implements OnInit {
    // giv access to the element, inject this directive
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}