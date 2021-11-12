import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { GrapgQLApolloRoutingModule } from './graphQL-apollo-routing.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    GrapgQLApolloRoutingModule,
    CommonModule
  ]
})
export class GraphQLApolloModule { }
