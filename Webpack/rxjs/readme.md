---
theme: arknights
---
## 异步和基于事件驱动编程的库RX（Reactive Extensions Librar）

RxJS 是一个库，它通过使用`observable`（可观察对象）序列来编写异步和基于事件的程序。其结合了`观察者模式`、`迭代器模式`和`使用集合的函数式编程`，以一种理想方式来管理事件序列所需要的一切。

适用场景：网络请求、数据库读写、文件读写等各种耗时操作通过异步操作完成。

### 官方文档 [https://www.learnrxjs.io/learn-rxjs/operators](https://www.learnrxjs.io/learn-rxjs/operators)

### 中文文档 [https://cn.rx.js.org/](https://cn.rx.js.org/)

### 操作符查询 [https://rxjs.dev/api](https://rxjs.dev/api)

## Observable（可观察对象）

### [原理](https://github.com/Tecode/front-end_learning/blob/master/Webpack/rxjs/src/observable.js)

根据基本用法，Observable可以执行同步或异步任务，并向observer推送数据，要实现核心功能，只需要如下两个步骤：

1.  创建：作为发布者，observable需要设置一个可执行的publish方法，其入参是observer对象，该方法在构造实例的时候传入，在执行该方法的时候就可以调用observer对象的回调方法进行传值；
1.  订阅：publish方法执行的时机是在observable被subscribe的时候，因此observable是**惰性推送值**，且对于每个观察者来说是独立执行的；


> **概念：可观察对象**，一个可调用的未来值或事件的集合


## Observer（观察者）

> **概念：观察者，**  一个回调函数的集合，它知道如何去监听由 Observable 提供的值

### [原理](https://github.com/Tecode/front-end_learning/blob/master/Webpack/rxjs/src/observer.js)

1.  作为观察者，需要包含next/error/complete回调方法，用于监听成功/失败/完成返回的值，最简单的observer就是包含回调方法的object
1.  为了维护observer的订阅状态，我们可以封装一个observer类，isStopped属性代表当前是否停止订阅，传入回调方法，并对外提供封装过的回调；
1.  Observer类对外提供unsubscribe方法，用于解除订阅；调用该方法后isStopped为true，数据推送停止，并执行unsubscribe的回调函数`unsubscribeCb`，该回调函数由对外方法`onUnsubscribe`传入


## Subscription（订阅）

观察者和被观察者订阅建立联系


## 使用场景

场景：在发送请求的时候我们有这样一个请求，页面中有三个APi用户信息、商品列表、推荐商品列表,
在接口没有全部回来以前我们会放置一个骨架图，如果某个请求失败也要展示数据要保证用户看到的不是一个空白页
