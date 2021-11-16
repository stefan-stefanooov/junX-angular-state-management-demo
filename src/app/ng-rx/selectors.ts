import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ngrxFeatureKey, NgRxFeatureState } from "./reducer";

export const selectFeature = createFeatureSelector<NgRxFeatureState>(ngrxFeatureKey);
 
export const selectFeatureNgRxCount = createSelector(
  selectFeature,
  (state: NgRxFeatureState) => state.count
);