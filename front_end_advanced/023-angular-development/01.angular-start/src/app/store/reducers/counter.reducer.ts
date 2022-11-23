import { Action, createReducer, on } from '@ngrx/store';
import { count } from 'rxjs';
import { decrement, increment } from '../actions/counter.actions';

// 状态名称
export const counterFeatureKey = 'counter';

export interface CountState {
  count: number
}

export const initialState: CountState = {
  count: 1
};

export const reducer = createReducer(initialState,
  on(increment, (state, action) => {
    console.log(state);
    return { ...state, count: state.count + action.count }
  }), 
  on(decrement, (state, action) => {
    console.log(state);
    return { ...state, count: state.count - action.count }
  }));