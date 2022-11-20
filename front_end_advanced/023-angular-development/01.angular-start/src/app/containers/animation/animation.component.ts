import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { AppState } from 'src/app/store';
import { decrement, increment, incrementAsync } from 'src/app/store/actions/counter.actions';
import { incrementList, reducerList } from 'src/app/store/actions/todo-list.actions';
import { CountState } from 'src/app/store/reducers/counter.reducer';
import { Data } from 'src/app/store/reducers/todo-list.reducer';
import { selectorCount } from 'src/app/store/selectors/counter.selectors';
import { listData } from 'src/app/store/selectors/todo-list.selectors';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit, AfterViewInit {
  @ViewChild('input') inputElement: ElementRef<HTMLInputElement> | undefined

  count$: Observable<CountState>
  selectorCount$: Observable<number>
  // listData$: Observable<Data[]>
  listData$: Observable<Data[]>


  constructor(private store: Store<AppState>) {
    this.count$ = store.select('counter')
    this.selectorCount$ = store.select(selectorCount)
    // this.listData$ = store.select(listData)
    this.listData$ = store.select(listData)

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

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.inputElement!.nativeElement, 'keyup')
      .pipe(
        filter(event => event.key == 'Enter'),
        map(event => (<HTMLInputElement>event.target).value.trim()),
        filter(value => value != '')
      )
      .subscribe({
        next: (value) => {
          console.log('keyup:', value);
          this.store.dispatch(incrementList({ value }))
          this.inputElement!.nativeElement.value = ''
        }
      })
  }

  reducerList(id: string) {
    this.store.dispatch(reducerList({ id }))
  }

}
