import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';

export const simulatedRoutes = [
  {
    componentId: 'comp-1',
    path: 'comp-1',
    loadChildren: 'componentlib/comp-1#Comp1Module'
  }
  // {
  //   componentId: 'lazy2',
  //   path: 'lazy2',
  //   loadChildren: 'lazy-component/lazy-2#Lazy2ComponentModule'
  // },
  // {
  //   componentId: 'lazy3',
  //   path: 'lazy3',
  //   loadChildren: 'lazy-component/lazy-3#Lazy3ComponentModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot([])]
})
export class RoutingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RoutingModule,
      providers: [
        // provider for Angular CLI to analyze
        { provide: ROUTES, useValue: simulatedRoutes, multi: true }
      ]
    };
  }
}
