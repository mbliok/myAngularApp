import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false; // close by default and bind for class
    // to lisener to a click event and exequte toggleOpen
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor() {

    }
    ngOnInit() {

    }
}