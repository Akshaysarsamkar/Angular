import { createReducer, on } from '@ngrx/store';
import { decrementCounter, incrementCounter } from './counter.action';

export interface counterState {
  count: number;
}

export const initialCount: counterState = {
  count: 0,
};

export const reducer = createReducer(
  initialCount,

  on(incrementCounter, (state) => ({ ...state, count: state.count + 1 })),

  on(decrementCounter, (state) => ({ ...state, count: state.count - 1 }))
);
