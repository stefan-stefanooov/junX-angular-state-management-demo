import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-slave-four',
  templateUrl: './slave-four.component.html',
  styleUrls: ['./slave-four.component.sass']
})
export class SlaveFourComponent {
  public get count() {
    return this.countService.count;
  }

  constructor(private countService: CountService) { }

}
