import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';
import { SlaveOneComponent } from './slave-one/slave-one.component';
import { SlaveTwoComponent } from './slave-two/slave-two.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    DemoComponent,
    SlaveOneComponent,
    SlaveTwoComponent,
  ],
  imports: [
    ParentChildRoutingModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class ParentChildModule { }
