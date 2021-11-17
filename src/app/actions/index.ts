import { createAction, props } from "@ngrx/store";

export const addAction = createAction('[Main] Add', props<{amount: number}>());
export const subtractAction = createAction('[Main] Subtract', props<{amount: number}>());
export const resetAction = createAction('[Main] Reset');
