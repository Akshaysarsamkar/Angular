import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cartState } from "./cart.reducer";

export const selectCartFeature = createFeatureSelector<cartState>('cart');

export const selectCount = createSelector(
  selectCartFeature,
  (state: cartState) => state.count
);

export const selectPrice = createSelector(
  selectCartFeature,
  (state: cartState) => state.price
);
