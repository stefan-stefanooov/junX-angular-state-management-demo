import { createAction, props } from "@ngrx/store";

export const addAction = createAction('[NgRx] Add', props<{amount: number}>());
export const subtractAction = createAction('[NgRx] Subtract', props<{amount: number}>());
export const resetAction = createAction('[NgRx] Reset');