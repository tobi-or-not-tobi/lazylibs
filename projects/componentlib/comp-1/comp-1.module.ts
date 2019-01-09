import { NgModule } from '@angular/core';
import { Comp1Component } from './comp-1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Comp1Component
      }
    ])
  ],
  declarations: [Comp1Component]
})
export class Comp1Module {}
