import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addAction, resetAction, subtractAction } from '../actions';
import { selectFeatureNgRxCount } from '../selectors';

const AMMOUNT_TO_ADD = 1

@Component({
  selector: 'app-slave-one',
  templateUrl: './slave-one.component.html',
  styleUrls: ['./slave-one.component.sass']
})
export class SlaveOneComponent {
  public count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = store.select(selectFeatureNgRxCount)
  }

  resetCount() {
    this.store.dispatch(resetAction());
  }

  subtract() {
    this.store.dispatch(subtractAction({amount: 1}));
  }

  add() {
    this.store.dispatch(addAction({amount: 1}));
  }

}
