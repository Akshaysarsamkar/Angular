import { createReducer, on, props } from '@ngrx/store';
import { addCartCount, totalPriceCount } from './cart.action';

export interface cartState {
  count: number;
  price:number
}

export const initialCount: cartState = {
  count: 0,
  price:0
};

export const cartreducer = createReducer(
  initialCount,

  on(addCartCount,(state)=> ({...state,count:state.count + 1})),

  on(totalPriceCount,(state,{price})=>({...state,price:state.price + price }))

);
