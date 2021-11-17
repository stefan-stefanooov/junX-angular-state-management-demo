import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-slave-two',
  templateUrl: './slave-two.component.html',
  styleUrls: ['./slave-two.component.sass']
})
export class SlaveTwoComponent {
  public get count() {
    return this.countService.count;
  }

  constructor(private countService: CountService) { }

}
