import { animate, animateChild, group, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import { AppState } from 'src/app/store';
import { AnimationEvent } from "@angular/animations"
import { decrement, increment, incrementAsync } from 'src/app/store/actions/counter.actions';
import { incrementList, reducerList } from 'src/app/store/actions/todo-list.actions';
import { CountState } from 'src/app/store/reducers/counter.reducer';
import { Data } from 'src/app/store/reducers/todo-list.reducer';
import { selectorCount } from 'src/app/store/selectors/counter.selectors';
import { listData } from 'src/app/store/selectors/todo-list.selectors';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    // 创建动画, 动画名称为 slide
    trigger("slide", [
      // 指定入场动画 注意: 字符串两边不能有空格, 箭头两边可以有也可以没有空格
      // void => * 可以替换为 :enter
      transition("void => *", [
        // 指定元素未入场前的样式
        style({ opacity: 0, transform: "translateY(40px)" }),
        // 指定元素入场后的样式及运动参数
        // animate(250, style({ opacity: 1, transform: "translateY(0)" }))
        // 第二个参数可以不需要
        animate(250)

      ]),
      // 指定出场动画
      // * => void 可以替换为 :leave
      transition("* => void", [
        // 指定元素出场后的样式和运动参数
        // animate(600, style({ opacity: 0, transform: "translateX(100%)" }))
        // 
        // 动画执行总时间 延迟时间 (可选) 运动形式 (可选)
        // animate("600ms 1s ease-out", style({
        //   opacity: 0, transform:
        //     "translateX(100%)"
        // }))
        // 关键帧动画
        animate(600, keyframes([
          style({ offset: 0.3, transform: "translateX(-100px)" }),
          style({ offset: 1, transform: "translateX(100%)" })
        ]))
      ])
    ]),
    trigger("todoAnimations", [
      transition(":enter", [
        group([
          query("input", [
            style({ transform: "translateY(-30px)" }),
            animate(300)
          ]),
          // query("@slide", animateChild())
          // 交错动画
          query("@slide", stagger(200, animateChild()))
        ])
      ])
    ])
  ]
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
    store.dispatch(incrementList({ value: 'Constructor Animation Element' }))
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
    this.store.dispatch(incrementList({ value: 'OnInit Animation Element' }))
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

  // 动画开始
  animationStart(event: AnimationEvent) {
    console.log('animation start', event);
  }

  // 动画结束
  animationDone(event: AnimationEvent) {
    console.log('animation done:', event);
  }
}
