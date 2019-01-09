import { NgModule } from '@angular/core';
import { Comp1Component } from './comp-1.component';

@NgModule({
  declarations: [Comp1Component],
  exports: [Comp1Component]
})
export class Comp1Module {}
