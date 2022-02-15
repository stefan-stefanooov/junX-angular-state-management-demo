import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetAction } from 'src/app/actions';
import { addAction } from '../actions';
import { selectFeatureNgRxCount } from '../selectors';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass'],
})
export class DemoComponent {
  public count$?: Observable<number>;

  constructor(private store: Store) {
    this.count$ = store.select(selectFeatureNgRxCount);
  }

  addToCount() {
    this.store.dispatch(addAction({amount: 1}))
  }

  enableReset() {
    this.store.dispatch(resetAction());
  }
}
