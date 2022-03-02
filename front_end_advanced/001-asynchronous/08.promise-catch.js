// Promise链式调用，异常捕获
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

// 因为 Promise 链条上的任何一个异常都会被一直向后传递，直至被捕获
// 分开注册的 onRejected 相当于给整个 Promise 链条注册失败回调
// 嵌套调用的脸时调用写法，捕获错误
ajax("/api/users.json")
  .then((value) => {
    console.log("/api/users.json：", value);
    return ajax("/api/urls2.json");
  })
  .catch((error) => {
    console.log("/api/urls.json：", error);
  })
  .then((value) => {
    console.log("/api/urls.json：", value);
    return ajax("/api/posts2.json");
  })
  .catch((error) => {
    console.log("/api/posts2.json：", error);
  })
  .then((value) => {
    console.log("/api/posts.json：", value);
  });
