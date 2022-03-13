// Promise调用的常见误区
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

// 嵌套调用是使用Promise最常见的误区（经常这么干😭）⚠️⚠️⚠️
ajax("/api/users.json").then((data) => {
  console.log("/api/users.json:", data);
  ajax("/api/urls.json").then((value) => {
    console.log("/api/users.json:", value);
    ajax("/api/posts.json").then((value) => {
      console.log("/api/posts.json:", value);
    });
  });
});
