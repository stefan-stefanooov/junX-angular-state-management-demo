import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

const AMMOUNT_TO_ADD = 5

@Component({
  selector: 'app-slave-five',
  templateUrl: './slave-five.component.html',
  styleUrls: ['./slave-five.component.sass']
})
export class SlaveFiveComponent {
  public get count() {
    return this.countService.count;
  }

  public get disableReset() {
    console.log("disableReset called")
    return this.countService.defaultState === this.count;
  }

  public get count$() {
    return this.countService.count$;
  }

  constructor(private countService: CountService) { }

  resetCount() {
    this.countService.countReset(this.constructor.name);
  }

  subtract() {
    this.countService.subtractFromCount(this.constructor.name, AMMOUNT_TO_ADD);
  }

  add() {
    this.countService.addToCount(this.constructor.name, AMMOUNT_TO_ADD);
  }

}
