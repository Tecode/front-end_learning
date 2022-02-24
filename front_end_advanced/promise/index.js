// 1. Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
// 2. Promise 中有三种状态 分别为 成功 fulfilled 失败 rejected 等待 pending
//   pending -> fulfilled
//   pending -> rejected
//   一旦状态确定就不可更改
// 3. resolve和reject函数是用来更改状态的
//   resolve: fulfilled
//   reject: rejected
// 4. then方法内部做的事情就判断状态 如果状态是成功 调用成功的回调函数 如果状态是失败 调用失败回调函数 then方法是被定义在原型对象中的
// 5. then成功回调有一个参数 表示成功之后的值 then失败回调有一个参数 表示失败后的原因
// 6. 同一个promise对象下面的then方法是可以被调用多次的
// 7. then方法是可以被链式调用的, 后面then方法的回调函数拿到值的是上一个then方法的回调函数的返回值

// var promise = new Promise((resolve, reject) => {
//   resolve("OK");
// });

// promise.then((value) => {
//   console.log(value);
// });

const HandWritPromise = require("./handwritingPromise");
const WritePromise = require("./handwritingPromise");

const promise = new WritePromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve("OK");
  //   reject("Error");
  // }, 20);
  // reject(new Error("出错误了"));
  resolve("OK");
});

const promise002 = new WritePromise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK 001");
    // reject("Error");
  }, 2000);
  // reject(new Error("出错误了"));
  // resolve("OTHER");
});

// then方法的链式调用
// 要实现链式调用就需要then返回一个promise对象
promise.then().then(
  (value) => console.log(value, "成功1"),
  (value) => console.log(value, "失败1")
);

// Promise all使用
HandWritPromise.all(["promise", "执行", promise, promise002]).then(
  (value) => console.log(value),
  (error) => console.log(error)
);
