import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default-component/default.component';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    DefaultRoutingModule,
    CommonModule
  ]
})
export class DefaultModule { }
