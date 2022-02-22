// promise静态方法
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = (value) => {
      if (value.currentTarget.status == 200) {
        resolve(value.currentTarget.response);
        return;
      }
      reject(new Error(value.currentTarget.statusText));
    };
    xhr.send();
  });
}

Promise.resolve("OK").then((value) => {
  console.log(value);
});

// Promise.reject 传入任何值，都会作为这个 Promise 失败的理由
Promise.reject("anything")
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all([ajax("/api/users.json"), ajax("/api/urls.json")])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// 如果传入的是一个 Promise 对象，Promise.resolve 方法原样返回
var promise = ajax("/api/users.json");
var promise2 = Promise.resolve(promise);
console.log(promise === promise2); // true

// 如果传入的是带有一个跟 Promise 一样的 then 方法的对象，
// Promise.resolve 会将这个对象作为 Promise 执行

Promise.resolve({
  then: function (onFulfilled, onRejected) {
    onFulfilled("foo");
  },
}).then(function (value) {
  console.log("Promise.resolve->", value);
});
