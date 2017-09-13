import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ListComponent } from './recipes/list/list.component';
import { BasicExampleDirective } from './basic-directive/basic-example.directive';
import { BetterExampleDirective } from './better-directive/better-example.directive';
import { HoverExampleDirective } from './hover-directive/hover-example.directive';
import { EasyExampleDirective } from './easy-directive/easy-example.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    BasicExampleDirective,
    BetterExampleDirective,
    HoverExampleDirective,
    EasyExampleDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

