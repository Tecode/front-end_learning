import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { incrementList, reducerList } from '../actions/todo-list.actions';


export const todoListFeatureKey = 'todoList';

export type Data = { value: string, id: string }

export interface TodoListState extends EntityState<Data> { }
// export interface TodoListState {
//   listData: Array<Data>
// }

// export const initialState: TodoListState = {
//   listData: []
// };
export const adapter: EntityAdapter<Data> = createEntityAdapter<Data>();
export const initialState: TodoListState = adapter.getInitialState()


export const reducer = createReducer(
  initialState,
  on(incrementList, (state, action) => {
    return adapter.addOne({ value: action.value, id: Date.now().toString() }, state)
    // return { ...state, listData: [...state.listData, { value: action.value, id: Date.now().toString() }] }
  }),
  on(reducerList, (state, action) => {
    return adapter.removeOne(action.id, state)
    // return { ...state, listData: state.listData.filter(data => data.id != action.id) }
  })
);
