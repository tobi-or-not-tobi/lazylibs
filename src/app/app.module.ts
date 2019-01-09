import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Module } from 'componentlib/comp-1';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Comp1Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
