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
import {MatIconModule} from '@angular/material/icon';
import { SlaveTwoComponent } from './slave-two/slave-two.component';
import { SlaveThreeComponent } from './slave-three/slave-three.component';
import { SlaveFourComponent } from './slave-four/slave-four.component';
import { SlaveFiveComponent } from './slave-five/slave-five.component';

@NgModule({
  declarations: [
    DemoComponent,
    SlaveOneComponent,
    SlaveTwoComponent,
    SlaveThreeComponent,
    SlaveFourComponent,
    SlaveFiveComponent,
  ],
  imports: [
    StoreModule.forFeature(ngrxFeatureKey, ngrxFeatureReducer),
    NgRxRoutingModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class NgRxModule { }
