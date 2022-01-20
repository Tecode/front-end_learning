// import { userApi, productListApi, recommendedListApi } from "./mergeRequest";
import { interval, take } from "rxjs"

const exchangeTokenApi = () =>
  new Promise((resolve, reject) => {
    resolve({ data: { token: "7EH9E6EJ6LL-@QW" } });
  });
console.log("Api");
exchangeTokenApi();

const interval$ = interval(1000);
// 模拟发送请求
interval$.pipe(take(5)).subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  }
})

let requests = []
const exchangeToken = (request) => {
  
}