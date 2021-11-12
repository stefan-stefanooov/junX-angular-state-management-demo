import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-child',
    loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'ng-rx',
    loadChildren: () => import('./ng-rx/ng-rx.module').then(m => m.NgRxModule)
  },
  {
    path: 'graphQLApollo',
    loadChildren: () => import('./graphQL-apollo/graphQL-apollo.module').then(m => m.GraphQLApolloModule)
  },
  {
    path: '',
    loadChildren: () => import('./default/default-routing.module').then(m => m.DefaultRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
