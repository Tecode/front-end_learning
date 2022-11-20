import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { increment, incrementAsync } from '../actions/counter.actions';


// createEffect
// 用于创建 Effect, Effect 用于执行副作用.
// 调用方法时传递回调函数, 回调函数中返回 Observable 对象, 对象中要发出副作用执行完成后
// 要触发的 Action 对象
// 回调函数的返回值在 createEffect 方法内部被继续返回, 最终返回值被存储在了 Effect 类
// 的属性中
// NgRx 在实例化 Effect 类后, 会订阅 Effect 类属性, 当副作用执行完成后它会获取到要触发
// 的 Action 对象并触发这个 Action
// Actions
// 当组件触发 Action 时, Effect 需要通过 Actions 服务接收 Action, 所以在 Effect 类
// 中通过 constructor 构造函数参数的方式将 Actions 服务类的实例对象注入到 Effect 类中
// Actions 服务类的实例对象为 Observable 对象, 当有 Action 被触发时, Action 对象本
// 身会作为数据流被发出
// ofType
// 对目标 Action 对象进行过滤.
// 参数为目标 Action 的 Action Creator 函数
// 如果未过滤出目标 Action 对象, 本次不会继续发送数据流
// 如果过滤出目标 Action 对象, 会将 Action 对象作为数据流继续发出

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
