import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slave-one',
  templateUrl: './slave-one.component.html',
  styleUrls: ['./slave-one.component.sass']
})
export class SlaveOneComponent implements OnInit {
  @Input() count: number = 0;
  @Output() countReset: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  resetCount() {
    this.countReset.emit();
  }

}
