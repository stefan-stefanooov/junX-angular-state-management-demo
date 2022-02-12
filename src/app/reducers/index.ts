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
  count: number
}

export const initialNgRxState: NgRxState = {
  count: 0
};

export const reducers: ActionReducerMap<State> = {
  ngRxTab: createReducer(
    initialNgRxState,
    on(addAction, (state, { amount }) => ({ ...state, count: state.count + amount })),
    on(subtractAction, (state, { amount }) => ({ ...state, count: state.count - amount })),
    on(resetAction, _ => ({ ...initialNgRxState })),
  ),
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
