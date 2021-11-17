import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { GrapgQLApolloRoutingModule } from './graphQL-apollo-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AllRatesGQL, SelectedRatesCurrencyGQL, SelectedRatesGQL } from './queries';
import { SelectedRatesComponent } from './selected-rates/selected-rates.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    DemoComponent,
    SelectedRatesComponent,
  ],
  imports: [
    GrapgQLApolloRoutingModule,
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    AllRatesGQL,
    SelectedRatesGQL,
    SelectedRatesCurrencyGQL
  ]
})
export class GraphQLApolloModule { }
