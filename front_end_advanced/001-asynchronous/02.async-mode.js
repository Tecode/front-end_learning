console.log("开始执行");
setTimeout(() => { //宏任务
  console.log("异步，最后执行");
});
console.log("执行结束");

// 开始执行
// 执行结束
// 异步，最后执行