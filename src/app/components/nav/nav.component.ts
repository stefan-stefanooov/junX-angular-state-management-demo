import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Output() toggleDrawer: EventEmitter<null> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawerEvent() {
    this.toggleDrawer.emit()
  }

}
