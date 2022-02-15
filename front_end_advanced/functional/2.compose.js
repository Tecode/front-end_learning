const toUppercase = (value) => value.toUpperCase();
const reverse = (array) => array.reverse();
const firstValue = (array) => array[0];

const compose =
  (...args) =>
  (value) =>
    args.reverse().reduce((a, b) => b(a), value);

// 取数组最后一个值并转成大写
const last = compose(toUppercase, firstValue, reverse);
console.log(last(["apply", "call", "nickname"]));
// NICKNAME
