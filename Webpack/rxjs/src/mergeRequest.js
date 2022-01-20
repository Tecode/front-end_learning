// 场景：在发送请求的时候我们有这样一个请求，页面中有三个APi用户信息、商品列表、推荐商品列表,
// 在接口没有全部回来以前我们会放置一个骨架图，如果某个请求失败也要展示数据要保证用户看到的不是一个空白页

import { catchError, forkJoin, from, of, tap } from "rxjs";

// 获取用户信息
export const userApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: "用户名" } });
    }, 3000);
  });

// 获取商品列表
export const productListApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: { code: 500, message: "服务器错误" } });
    }, 2000);
  });

// 获取推荐商品列表
export const recommendedListApi = () =>
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
  const dateTime = new Date().valueOf();
  const data001 = await userApi();
  const data002 = await productListApi();
  const data003 = await recommendedListApi();

  console.log("awaitFun请求结束", `耗时：${new Date().valueOf() - dateTime}ms`);
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

awaitFun();
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
// 这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。
// 它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。

// 比较不错的解决方法
const mergeRequest = () => {
  const dateTime = new Date().valueOf();
  forkJoin([
    from(userApi()).pipe(
      tap((res) => console.log("userApi", res)),
      catchError((error) => of({ data: {} }))
    ),
    from(productListApi()).pipe(
      tap((res) => console.log("productListApi", res)),
      catchError((error) => of({ data: [] }))
    ),
    from(recommendedListApi()).pipe(
      tap((res) => console.log("recommendedListApi", res)),
      catchError((error) => of({ data: [] }))
    ),
  ]).subscribe({
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

// mergeRequest();
// recommendedListApi {data: Array(2)}
// build.js:2 userApi {data: {…}}
// build.js:2 next=== (3) [{…}, {…}, {…}]
// build.js:2 mergeRequest请求结束 耗时：3002ms
