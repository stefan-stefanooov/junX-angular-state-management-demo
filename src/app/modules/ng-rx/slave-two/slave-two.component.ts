import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addAction, subtractAction } from 'src/app/actions';
import { resetAction } from '../actions';
import { selectFeatureNgRxCount } from '../selectors';

@Component({
  selector: 'app-slave-two',
  templateUrl: './slave-two.component.html',
  styleUrls: ['./slave-two.component.sass'],
})
export class SlaveTwoComponent implements OnInit {
  public count$?: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
   this.count$ = this.store.select(selectFeatureNgRxCount);
  }

  resetCount() {
    this.store.dispatch(resetAction());
  }

  subtract() {
    this.store.dispatch(subtractAction({ amount: 1 }));
  }

  add() {
    this.store.dispatch(addAction({ amount: 1 }));
  }
}
