import { createReducer, on } from "@ngrx/store";
import { addAction, resetAction, subtractAction } from "./actions";

export const ngrxFeatureKey = 'ngrx';

export interface NgRxFeatureState {
    count: number;
}

export const initialState: NgRxFeatureState = {
    count: 0,
};

export const ngrxFeatureReducer = createReducer(
    initialState,
    on(addAction, (state, { amount }) => ({ ...state, count: state.count + amount })),
    on(subtractAction, (state, { amount }) => ({ ...state, count: state.count - amount })),
    on(resetAction, _ => ({ ...initialState })),
  );