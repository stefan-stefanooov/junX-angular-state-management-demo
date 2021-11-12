import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_AMOUNT_TO_SUBTRACT = 1;
const DEFAULT_AMOUNT_TO_ADD = 1;
const COUNT_DEFAULT_VALUE = 0;

@Injectable({
  providedIn: 'root'
})
export class CountService {
  public count: number = 0;
  public count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public disableReset$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public defaultState: number = COUNT_DEFAULT_VALUE;

  addToCount(amount = DEFAULT_AMOUNT_TO_ADD) {
    this.count += amount
    this.count$.next(this.count)
    this.checkReset()
  }

  subtractFromCount(amount = DEFAULT_AMOUNT_TO_SUBTRACT) {
    this.count -= amount
    this.count$.next(this.count)
    this.checkReset()
  }

  countReset() {
    this.count = COUNT_DEFAULT_VALUE
    this.count$.next(this.count)
    this.disableReset$.next(true);
  }

  private checkReset() {
    console.log('checkReset', this.count)
    if(this.count === 0) {
      this.disableReset$.next(true);
    } else {
      this.disableReset$.next(false);
    }
  }

  fireDisableReset(value: boolean) {
    this.disableReset$.next(value);
  }
}
