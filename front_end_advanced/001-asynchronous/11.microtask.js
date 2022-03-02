// 微任务

console.log("任务开始");
// setTimeout 的回调是 宏任务，进入回调队列排队
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// Promise 的回调是 微任务，本轮调用末尾直接执行
Promise.resolve()
  .then(() => {
    console.log("promise");
  })
  .then(() => {
    console.log("promise 2");
  })
  .then(() => {
    console.log("promise 3");
  });

console.log("任务结束");

// 任务开始
// 任务结束
// promise
// promise 2
// promise 3
// setTimeout