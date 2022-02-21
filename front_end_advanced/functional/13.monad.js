// Monad是可以变变的Pointed函子
// 一个函子具有join和of两个方法并遵守一些定律就是一个Monad
// 内部实现

const fs = require("fs");
const { flowRight, toUpper } = require("lodash/fp");

class IO {
  static of(value) {
    return new IO(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return IO.of(flowRight(fn, this._value));
  }

  join() {
    return this._value();
  }

  flatMap(func) {
    return this.map(func).join();
  }
}

const readFile = (filename) => {
  return IO.of(() => fs.readFileSync(filename, "utf-8"));
};

const print = (value) => {
  return IO.of(() => {
    console.log(value);
    return value;
  });
};

const value = readFile("package.json").map(toUpper).flatMap(print).join();
console.log(value);
