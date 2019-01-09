import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from 'componentlib';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, RoutingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
