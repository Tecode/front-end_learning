import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { increment, incrementAsync } from '../actions/counter.actions';



@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {

  }

  incrementAsyncEffect = createEffect(() => this.actions$.pipe(
    ofType(incrementAsync),
    mergeMap((action) => {
      console.log('incrementAsync action:', action);
      return timer(2000).pipe(map(() => increment({ count: action.count })))
    })
  ))
}
