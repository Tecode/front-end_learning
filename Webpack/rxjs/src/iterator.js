function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    // yield 关键字用来暂停和恢复一个生成器函数（(function* 或遗留的生成器函数）
    yield i;
  }
}
var a = makeRangeIterator(1, 10, 2);
a.next(); // {value: 1, done: false}
a.next(); // {value: 3, done: false}
a.next(); // {value: 5, done: false}
a.next(); // {value: 7, done: false}
a.next(); // {value: 9, done: false}
a.next(); // {value: undefined, done: true}
