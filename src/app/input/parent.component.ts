import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  constuctor() {
    
  }
    books: Object = {
      bookReviews: 15
    }
}