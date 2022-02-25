// Promise的三个状态PENDING REJECTED  FULFILLED
const PENDING = "pending"; // 等待
const FULFILLED = "fulfilled"; // 完成
const REJECTED = "rejected"; // 失败

// 处理返回的数据是promise还是普通参数
const resolvePromise = (promise001, result, resolve, reject) => {
  // 如果调用的是promise自己回死循环
  if (promise001 == result) {
    return reject(
      TypeError("TypeError: Chaining cycle detected for promise #<Promise>")
    );
  }
  // promise参数需要处理后再返回
  if (result instanceof HandWritPromise) {
    result.then(resolve, reject);
  } else {
    // 普通参数直接返回
    resolve(result);
  }
};

class HandWritPromise {
  constructor(execute) {
    execute(this.resolve, this.reject);
  }
  // promise状态
  status = PENDING;
  // 我们需要保存成功的值和失败后的原因
  // 保存成功的值
  value = null;
  // 保存失败的值
  reason = null;
  // 定义一个失败的回调
  filedCallback = [];
  // 定义一个成功的回调
  successCallback = [];

  resolve = (value) => {
    // 如果不是等待状态就往下执行
    if (this.status !== PENDING) return;
    // 更新状态，改为成功
    this.status = FULFILLED;
    // 保存成功的值
    this.value = value;
    // 执行函数要将结果告诉调用方
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length > 0) {
      this.successCallback.shift()(this.value);
    }
  };

  reject = (value) => {
    // 如果不是等待状态就往下执行
    if (this.status !== PENDING) return;
    // 更新状态，改为失败
    this.status = REJECTED;
    // 保存失败的原因
    this.reason = value;
    // 执行函数要将结果告诉调用方
    // this.filedCallback && this.filedCallback(this.reason);
    while (this.filedCallback.length > 0) {
      this.filedCallback.shift()(this.reason);
    }
  };

  then(successCallback, filedCallback) {
    // 参数可选 .then()
    successCallback = successCallback ? successCallback : (value) => value;
    // 参数可选 .then()
    filedCallback = filedCallback
      ? filedCallback
      : (reason) => {
          throw reason;
        };
    // 实现then方法的链式调用
    const handWritPromise = new HandWritPromise((resolve, reject) => {
      // 根据状态支持失败函数或者成功函数
      if (this.status === FULFILLED) {
        // 判断 result 的值是普通值还是promise对象
        // 如果是普通值 直接调用resolve
        // 如果是promise对象 查看promise对象返回的结果
        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
        // resolve(result);
        setTimeout(() => {
          const result = successCallback(this.value);
          resolvePromise(handWritPromise, result, resolve, reject);
        }, 0);
        return;
      }
      if (this.status === REJECTED) {
        filedCallback(this.reason);
        return;
      }
      // 处理异步情况，目前处于PENDING状态
      // 将会掉函数方法保存
      this.filedCallback.push(filedCallback);
      this.successCallback.push(successCallback);
    });
    return handWritPromise;
  }

  // 实现Promise的All方法
  static all(list) {
    const newList = [];
    let total = 0;
    return new HandWritPromise((resolve, reject) => {
      // 执行结果放入新的数组
      const addItem = (index, value) => {
        total++;
        newList[index] = value;
        if (list.length == total) {
          resolve(newList);
        }
      };
      // 循环传入的promise列表
      for (let index = 0; index < list.length; index++) {
        const current = list[index];
        if (current instanceof HandWritPromise) {
          current.then(
            (result) => addItem(index, result),
            (reason) => reject(reason)
          );
        } else {
          addItem(index, current);
        }
      }
    });
  }

  // 实现catch方法
  catch() {
    
  }

  // 实现Promise.resolve方法
  static resolve(value) {
    if (value instanceof HandWritPromise) return value;

    return new HandWritPromise((resolve) => resolve(value));
  }

  // 实现finally方法
  // finally(callBack) {
  //   return this.then(
  //     (value) => {
  //       callBack();
  //       return value;
  //     },
  //     (reason) => {
  //       callBack();
  //       throw reason;
  //     }
  //   );
  // }

  // 实现finally方法
  finally(callBack) {
    return this.then(
      (value) => {
        return HandWritPromise.resolve(callBack()).then(() => value);
      },
      (reason) => {
        return HandWritPromise.resolve(callBack()).then(() => {
          throw reason;
        });
      }
    );
  }
}

module.exports = HandWritPromise;
