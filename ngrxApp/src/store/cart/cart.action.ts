
import { createAction, props } from '@ngrx/store';

export const addCartCount = createAction("cart counter")

export const totalPriceCount = createAction("cart priceCount",props<{price:number}>())
