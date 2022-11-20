import { Action, createReducer, on } from '@ngrx/store';
import { incrementList, reducerList } from '../actions/todo-list.actions';


export const todoListFeatureKey = 'todoList';

export type Data = { value: string, id: string }

export interface TodoListState {
  listData: Array<Data>
}

export const initialState: TodoListState = {
  listData: []
};

export const reducer = createReducer(
  initialState,
  on(incrementList, (state, action) => {
    return { ...state, listData: [...state.listData, { value: action.value, id: Date.now().toString() }] }
  }),
  on(reducerList, (state, action) => {
    return { ...state, listData: state.listData.filter(data => data.id != action.id) }
  })
);
