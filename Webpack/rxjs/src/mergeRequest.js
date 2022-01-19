// 场景：在发送请求的时候我们有这样一个请求，页面中有三个APi用户信息、商品列表、推荐商品列表,
// 在接口没有全部回来以前我们会放置一个骨架图，如果某个请求失败也要展示数据要保证用户看到的不是一个空白页

import { catchError, forkJoin, from, map, of } from "rxjs";

// 获取用户信息
const userApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: "用户名" } });
    }, 3000);
  });

// 获取商品列表
const productListApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: { code: 500, message: "服务器错误" } });
    }, 2000);
  });

// 获取推荐商品列表
const recommendedListApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 908, name: "iPhone 13" },
          { id: 909, name: "ViVo" },
        ],
      });
    }, 1000);
  });

// await方法发请求
// 写法简单但是如果请求报错就无法继续下去
const awaitFun = async () => {
  const data001 = await userApi();
  const data002 = await productListApi();
  const data003 = await recommendedListApi();

  console.log(data001, data002, data003);
};

// await方法发请求，错误捕获
// 请求会被阻塞最快加载完也是所有请求总和

const awaitFun002 = async () => {
  const dateTime = new Date().valueOf();
  let data001;
  let data002;
  let data003;
  try {
    data001 = await userApi();
  } catch (error) {
    console.log("捕获错误", error);
  }
  try {
    data002 = await productListApi();
  } catch (error) {
    console.log("捕获错误", error);
  }
  try {
    data003 = await recommendedListApi();
  } catch (error) {
    console.log("捕获错误", error);
  }

  console.log(data001, data002, data003);
  console.log("使用await加载", `耗时：${new Date().valueOf() - dateTime}ms`);
};

// awaitFun();
// build.js:1 Uncaught (in promise)
// {error: {…}}
// error: {code: 500, message: '服务器错误'}
// [[Prototype]]: Object

// awaitFun002();
// 捕获错误 {error: {…}}
// build.js:1 {data: {…}} undefined {data: Array(2)}
// build.js:1 加载完成 耗时：6012ms

// Promise.all

const promiseAll = () => {
  const dateTime = new Date().valueOf();
  Promise.all([userApi(), productListApi(), recommendedListApi()])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("promiseAll", error);
    })
    .finally((data) => {
      console.log(
        data,
        "使用promiseAll加载",
        `耗时：${new Date().valueOf() - dateTime}ms`
      );
    });
};

// promiseAll();
// 看上去好像很不错的样子只花了2秒多,但是请求正常的数据也获取不了
// 使用promiseAll加载 耗时：2004ms

// 比较不错的解决方法
const mergeRequest = () => {
  const dateTime = new Date().valueOf();
  forkJoin([
    from(userApi()).pipe(
      map((res) => console.log(res)),
      catchError((error) => of({}))
    ),
    from(productListApi()).pipe(
      map((res) => console.log(res)),
      catchError((error) => of({}))
    ),
    from(recommendedListApi()).pipe(
      map((res) => console.log(res)),
      catchError((error) => of({}))
    ),
  ])
    .pipe()
    .subscribe({
      next: (data) => {
        console.log("next===", data);
      },
      error: (error) => {
        console.log("error===", error);
      },
      complete: () => {
        console.log(
          "mergeRequest请求结束",
          `耗时：${new Date().valueOf() - dateTime}ms`
        );
      },
    });
};

mergeRequest();
