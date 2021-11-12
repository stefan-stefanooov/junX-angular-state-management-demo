import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { NgRxRoutingModule } from './ng-rx-routing.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    NgRxRoutingModule,
    CommonModule
  ]
})
export class NgRxModule { }
