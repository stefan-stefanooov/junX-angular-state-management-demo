import { Component, ContentChild, OnInit } from '@angular/core';
import { MatNoDataRow } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CountService } from '../count.service';
import { Transaction } from '../interfaces';

const AMOUNT_TO_ADD = 1;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {
  public transactions: Transaction[] = [];
  displayedColumns: string[] = ['issuer', 'amount', 'type'];
  public get count() {
    return this.countService.count;
  }

  public get count$() {
    return this.countService.count$;
  }

  constructor(private countService: CountService) {
  }

  ngOnInit(): void {
    this.countService.transactions$.subscribe(_ => this.transactions = _)
  }

  addToCount() {
    this.countService.addToCount(DemoComponent.toString(), AMOUNT_TO_ADD)
  }

  enableReset() {
    this.countService.fireDisableReset(false);
  }

}
