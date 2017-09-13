import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

// this is the DECORATOR
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit() {
    //
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
} 