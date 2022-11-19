import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, CountState } from '../reducers/counter.reducer';

export const selectorState= createFeatureSelector<CountState>(counterFeatureKey)

export const selectorCount = createSelector(selectorState, state => state.count)