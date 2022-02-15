import { state } from '@angular/animations';
import {
  ActionReducerMap,
  createReducer,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { addAction, resetAction, subtractAction } from '../actions';

export interface State {
  ngRxTab: NgRxState;
}

export interface NgRxState {
  count: number;
  resetCount: number;
}

export const initialNgRxState: NgRxState = {
  resetCount: 0,
  count: 0,
};

export const reducers: ActionReducerMap<State> = {
  ngRxTab: createReducer(
    initialNgRxState,
    on(addAction, (state, { amount }) => ({ ...state, count: state.count + amount })),
    on(subtractAction, (state, { amount }) => ({ ...state, count: state.count - amount })),
    on(resetAction, (state) => ({ ...state })),
    on(resetAction, (state) => ({...state, resetCount: state.resetCount++}))
  ),
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
