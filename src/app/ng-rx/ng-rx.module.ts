import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { NgRxRoutingModule } from './ng-rx-routing.module';
import { StoreModule } from '@ngrx/store';
import { ngrxFeatureKey, ngrxFeatureReducer } from './reducer';
import { SlaveOneComponent } from './slave-one/slave-one.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    DemoComponent,
    SlaveOneComponent
  ],
  imports: [
    StoreModule.forFeature(ngrxFeatureKey, ngrxFeatureReducer),
    NgRxRoutingModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule
  ]
})
export class NgRxModule { }
