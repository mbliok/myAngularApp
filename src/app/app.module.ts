import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {ListComponent} from './recipes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

