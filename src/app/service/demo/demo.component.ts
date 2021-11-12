import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';

const AMOUNT_TO_ADD = 1;
const COUNT_DEFAULT_VALUE = 0;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent {

  public get count() {
    return this.countService.count;
  }

  public get count$() {
    return this.countService.count$;
  }

  constructor(private countService: CountService) { }

  addToCount() {
    this.countService.addToCount()
  }

  enableReset() {
    this.countService.fireDisableReset(false);
  }

}
