import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoListFeatureKey, TodoListState } from '../reducers/todo-list.reducer';

export const todoListState = createFeatureSelector<TodoListState>(todoListFeatureKey)

export const listData = createSelector(todoListState, state => state.listData)