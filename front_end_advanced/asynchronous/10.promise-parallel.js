// promise并行

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

// 同时发送两个请求，等到最后一个请求回来收到结果，如果一个请求发生错误将不会继续执行会直接抛出错误
// Promise.all([ajax("/api/users.json"), ajax("/api/urls.json")])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("timeout")), 500);
});

// Promise.race返回第一个结束的请求数据
Promise.race([timeout, ajax("/api/users.json")])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
