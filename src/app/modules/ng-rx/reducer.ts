import { createReducer, on } from "@ngrx/store";
import { addAction, countReset, resetAction, subtractAction } from "./actions";

export const ngrxFeatureKey = 'ngrx';

export interface NgRxFeatureState {
  count: number;
    resetCount: number;
}

export const initialState: NgRxFeatureState = {
  count: 0,
  resetCount: 0
};

export const ngrxFeatureReducer = createReducer(
  initialState,
  on(addAction, (state, { amount }) => ({
    ...state,
    count: state.count + amount,
  })),
  on(subtractAction, (state, { amount }) => ({
    ...state,
    count: state.count - amount,
  })),
  on(resetAction, (_) => ({ ...initialState })),
  on(resetAction, (state) => ({ ...state })),
  on(countReset, (state) => ({ ...state, resetCount: state.resetCount++ }))
);