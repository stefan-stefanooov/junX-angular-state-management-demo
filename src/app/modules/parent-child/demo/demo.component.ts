import { Component, OnInit } from '@angular/core';

const AMOUNT_TO_ADD = 1;
const COUNT_DEFAULT_VALUE = 0;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent {

  public count: number = 0;

  addToCount() {
    this.count += AMOUNT_TO_ADD
  }

  countReset() {
    this.count = COUNT_DEFAULT_VALUE
  }

}
