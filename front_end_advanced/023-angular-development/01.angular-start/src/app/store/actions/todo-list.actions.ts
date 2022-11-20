import { createAction, props } from '@ngrx/store';
import { Data } from '../reducers/todo-list.reducer';

export const incrementList = createAction('incrementList', props<{value: string}>());
export const reducerList = createAction('reducerList', props<{id: string}>());




