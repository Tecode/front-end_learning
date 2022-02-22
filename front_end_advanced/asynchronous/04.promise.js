// 简单的Promise例子

const promise = new Promise((resolve, reject) => {
  // resolve(200);
  setTimeout(() => reject(new Error("Promise Error")), 1000);
});
// 1秒后抛出错误我们可以在catch捕获
promise
  .then((value) => {
    console.log("promise.then:", value);
  })
  .catch((error) => {
    console.log("promise.catch:", error);
  });

// 其他捕获写法
promise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
