// Promise的三个状态PENDING REJECTED  FULFILLED
const PENDING = "pending"; // 等待
const FULFILLED = "fulfilled"; // 完成
const REJECTED = "rejected"; // 失败

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
    // 根据状态支持失败函数或者成功函数
    if (this.status === FULFILLED) {
      successCallback(this.value);
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
  }
}

module.exports = HandWritPromise;
