import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaction, TransactionType } from './interfaces';

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
  public transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);

  addToCount(issuer: string, amount = DEFAULT_AMOUNT_TO_ADD) {
    this.count += amount
    this.count$.next(this.count)
    this.checkReset()
    this.addTransaction({
      timestamp: this.getTimestamp(),
      amount,
      issuer,
      type: TransactionType.ADD
    })
  }

  subtractFromCount(issuer: string, amount = DEFAULT_AMOUNT_TO_SUBTRACT) {
    this.count -= amount
    this.count$.next(this.count)
    this.checkReset()
    this.addTransaction({
      timestamp: this.getTimestamp(),
      amount,
      issuer,
      type: TransactionType.REMOVE
    })
  }

  countReset(issuer: string) {
    this.count = COUNT_DEFAULT_VALUE
    this.count$.next(this.count)
    this.disableReset$.next(true);
    this.addTransaction({
      timestamp: this.getTimestamp(),
      issuer,
      type: TransactionType.RESET
    })
  }

  private checkReset() {
    console.log('checkReset', this.count)
    if(this.count === 0) {
      this.disableReset$.next(true);
    } else {
      this.disableReset$.next(false);
    }
  }

  private addTransaction(newTransaction: Transaction) {
    this.transactions$.next([
      newTransaction,
      ...this.transactions$.value,
    ])
  }

  private getTimestamp(): number {
    return new Date().getTime();
  }

  fireDisableReset(value: boolean) {
    this.disableReset$.next(value);
  }
}
