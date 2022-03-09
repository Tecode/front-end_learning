import {
  from,
  mergeMap,
  tap,
  retryWhen,
  delayWhen,
  of,
  timer,
  take,
} from "rxjs";
import axios from "axios";

const userApi$ = from(axios.get("/api/userInfo")).pipe(
  tap((data) => console.log("获取用户信息", data)),
  retryWhen((errors) => {
    return errors.pipe(
      tap(() => console.log("获取用户信息失败3秒后重试")),
      take(2),
      delayWhen(() => timer(3000))
    );
  })
);

// 换取token，换token接口重试2次，完成以后重新发送之前的请求
from(axios.get("/api/refreshToken"))
  .pipe(
    mergeMap((data) => {
      console.log("userApi$", data);
      window.localStorage.setItem("token", data);
      return userApi$;
    }),
    retryWhen((errors) => {
      return errors.pipe(
        tap(() => console.log("请求出错，准备重试")),
        take(2),
        delayWhen(() => timer(3000))
      );
    })
  )
  .subscribe({
    next(x) {
      console.log("data" + x);
    },
    error(err) {
      console.error("something wrong occurred: " + err);
    },
    complete() {
      console.log("done");
    },
  });
