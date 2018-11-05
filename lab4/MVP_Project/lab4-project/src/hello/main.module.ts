import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class MainModule { }
