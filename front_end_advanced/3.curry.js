// 柯理化可以让我们给一个函数传递较少的参数得到一个已经记住某些固定参数的新函数
// 这是一种对函数参数的“缓存”
// 让函数变得更灵活，让函数颗粒度更小
// 可以把多元函数变成一元函数，可以组合函数产生强大功能

function getSum(value1, value2, value3) {
  return value1 + value2 + value3;
}

function curry(func) {
  return function curriedFn(...args) {
    if (func.length > args.length) {
      return function () {
        // (1)(2)(3)
        // (1, 2)(3)
        // (1, 2, 3)
        return curriedFn(...args.concat(Array.prototype.slice.call(arguments)));
      };
    }
    return func(...args);
  };
}

const curryFunc = curry(getSum);
console.log(curryFunc(1, 2, 3));
console.log(curryFunc(1)(2, 3));
console.log(curryFunc(1, 2)(3));
console.log(curryFunc(1)(2)(3));
