import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { addAction } from '../actions';
import * as ngrxModuleActions from "../modules/ng-rx/actions"
 
@Injectable()
export class AppEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(ngrxModuleActions.addAction),
        map(action => addAction({amount: action.amount})),
        catchError(() => EMPTY)
    )
  );
 
  constructor(
    private actions$: Actions,
  ) {}
}