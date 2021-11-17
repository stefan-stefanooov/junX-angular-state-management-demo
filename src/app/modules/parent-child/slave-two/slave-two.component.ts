import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slave-two',
  templateUrl: './slave-two.component.html',
  styleUrls: ['./slave-two.component.sass']
})
export class SlaveTwoComponent implements OnInit {
  @Input() count: number = 0;
  @Output() countReset: EventEmitter<null> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  resetCount() {
    this.countReset.emit();
  }

}
