import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { decrement, increment, incrementAsync } from 'src/app/store/actions/counter.actions';
import { CountState } from 'src/app/store/reducers/counter.reducer';
import { selectorCount } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  count$: Observable<CountState>
  selectorCount$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('counter')
    this.selectorCount$ = store.select(selectorCount)
  }

  increment() {
    this.store.dispatch(increment({ count: 5 }))
  }

  decrement() {
    this.store.dispatch(decrement({ count: 5 }))
  }

  incrementAsync() {
    this.store.dispatch(incrementAsync({ count: 20 }))
  }

  ngOnInit(): void {
  }

}
