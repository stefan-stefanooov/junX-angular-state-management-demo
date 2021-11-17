import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent {
  addToCount() {
    throw Error("Not Implemented")
  }

  enableReset() {
    throw Error("Not Implemented")
  }
}
