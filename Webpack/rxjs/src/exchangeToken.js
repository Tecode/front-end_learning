// import { userApi, productListApi, recommendedListApi } from "./mergeRequest";
import { Observable } from "rxjs";
import axios from "axios";
import { interval, take } from "rxjs";

const exchangeTokenApi = () =>
  new Promise((resolve, reject) => {
    resolve({ data: { token: "7EH9E6EJ6LL-@QW" } });
  });
// exchangeTokenApi();

const observable$ = new Observable((subscriber) => {});

axios.interceptors.request.use(
  function (response) {
    // Do something before request is sent
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.get("/api/refreshToken").then((data) => {
  console.log(data);
});

console.log("Api");
exchangeTokenApi();

const interval$ = interval(1000);
// 模拟发送请求
interval$.pipe(take(5)).subscribe({
  next(x) {
    console.log("got value " + x);
  },
  error(err) {
    console.error("something wrong occurred: " + err);
  },
  complete() {
    console.log("done");
  },
});

let requests = [];
const exchangeToken = (request) => {};
