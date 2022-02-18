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
  on(resetAction, (state) => ({ ...state, count: 0 })),
  on(countReset, (state) => ({ ...state, resetCount: state.resetCount + 1 }))
);