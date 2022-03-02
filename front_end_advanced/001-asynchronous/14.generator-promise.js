// Generator 配合 Promise 的异步方案

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

function* Generator() {
  const requestData = yield ajax("/api/urls.json");
  console.log("请求回来的数据：", requestData);
  const requestUser = yield ajax("/api/users.json");
  console.log("请求回来的数据：", requestUser);
}

const run = Generator();
const result = run.next();
result.value.then((data) => {
  run.next(data);
});
// 请求回来的数据： {users: '/api/users.json', posts: '/api/posts.json'}