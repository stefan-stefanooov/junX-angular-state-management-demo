import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { distinct, distinctUntilChanged, tap } from 'rxjs/operators';
import { CountService } from '../count.service';

const AMMOUNT_TO_ADD = 1

@Component({
  selector: 'app-slave-one',
  templateUrl: './slave-one.component.html',
  styleUrls: ['./slave-one.component.sass']
})
export class SlaveOneComponent {
  public disableReset$: Observable<boolean>
  
  public get count() {
    return this.countService.count;
  }
  
  constructor(private countService: CountService) {
    this.disableReset$ = this.countService.disableReset$.pipe(
      distinctUntilChanged(),
      tap(_ => console.log("disableReset$ fired", _))
    )
  }

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
