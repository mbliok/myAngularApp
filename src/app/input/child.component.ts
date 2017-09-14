import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Input() message: string; // message represent some value we get from the parent
  // message can be anything
  // and we need to define it type
  // To be able to get reference to bookReviews property in parent component
  // is by creating binding in our child html selector
  // <app-child [message]="books.bookReviews"></app-child>
  ngOnChanges() {
    console.log(this.message);
  }

  ngOnInit(){
    console.log(this.message);
  }
}