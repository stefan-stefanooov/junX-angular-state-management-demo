import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-child',
    loadChildren: () => import('./modules/parent-child/parent-child.module').then(m => m.ParentChildModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'ng-rx',
    loadChildren: () => import('./modules/ng-rx/ng-rx.module').then(m => m.NgRxModule)
  },
  {
    path: 'graphQLApollo',
    loadChildren: () => import('./modules/graphQL-apollo/graphQL-apollo.module').then(m => m.GraphQLApolloModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/default/default.module').then(m => m.DefaultModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
