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
  value = undefined;
  reason = undefined;

  resolve = (value) => {
    // 如果不是等待状态就往下执行
    if (this.status !== PENDING) return;
    // 更新状态，改为成功
    this.status = FULFILLED;
    // 保存成功的值
    this.value = value;
  };

  reject = (value) => {
    // 如果不是等待状态就往下执行
    if (this.status !== PENDING) return;
    // 更新状态，改为失败
    this.status = REJECTED;
    // 保存失败的原因
    this.reason = value;
  };

  then(successCallback, filedCallback) {
    // 根据状态支持失败函数或者成功函数
    if (this.status === FULFILLED) {
      successCallback(this.value);
    }
    if (this.status === REJECTED) {
      filedCallback(this.reason);
    }
  }
}

module.exports = HandWritPromise;
