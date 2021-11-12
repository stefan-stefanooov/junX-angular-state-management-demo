import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { ServiceRoutingModule } from './service-routing.module';
import { SlaveOneComponent } from './slave-one/slave-one.component';
import { SlaveTwoComponent } from './slave-two/slave-two.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SlaveTreeComponent } from './slave-tree/slave-tree.component';
import { SlaveFourComponent } from './slave-four/slave-four.component';
import { SlaveFiveComponent } from './slave-five/slave-five.component';
import { CountService } from './count.service';

@NgModule({
  declarations: [
    DemoComponent,
    SlaveOneComponent,
    SlaveTwoComponent,
    SlaveTreeComponent,
    SlaveFourComponent,
    SlaveFiveComponent,
  ],
  imports: [
    ServiceRoutingModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [
    CountService
  ]
})
export class ServiceModule { }




