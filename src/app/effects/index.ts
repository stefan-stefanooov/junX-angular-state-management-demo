import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { addAction, countReset, resetAction } from '../actions';

 
@Injectable()
export class AppEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAction),
      map((action) => addAction({ amount: action.amount })),
      catchError(() => EMPTY)
    )
  );

  showResetCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetAction),
      map(() => countReset()),
      catchError(() => EMPTY)
    )
  );

  constructor(private actions$: Actions) {}
}