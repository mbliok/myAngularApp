import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleFromTsFile = 'app works';
  // servers; // this will get error Cannot read property 'push' of undefined
  servers = [];
  onAddServer() {
    this.servers.push('My new text')
  }

  onRemoveServerText(index: number) {
    this.servers.splice(index, 1); // 1 -The number of items to be removed. If set to 0, no items will be removed
  }
}
