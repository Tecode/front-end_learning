import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, todoListFeatureKey, TodoListState } from '../reducers/todo-list.reducer';


const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors()
export const todoListState = createFeatureSelector<TodoListState>(todoListFeatureKey)

// export const listData = createSelector(todoListState, state => state.listData)
export const listData = createSelector(todoListState, selectAll)