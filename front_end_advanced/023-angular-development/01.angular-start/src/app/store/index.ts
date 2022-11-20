import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './reducers/counter.reducer';
import * as fromTodoList from './reducers/todo-list.reducer';


export interface AppState {
  [fromCounter.counterFeatureKey]: fromCounter.CountState;
  [fromTodoList.todoListFeatureKey]: fromTodoList.TodoListState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer,
  [fromTodoList.todoListFeatureKey]: fromTodoList.reducer,
};

// metaReducer 是 Action -> Reducer 之间的钩子，允许开发者对 Action 进行预处理 (在普通 Reducer 函
// 数调用之前调用)。
function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function name(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
