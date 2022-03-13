const fs = require("fs");
const { flowRight } = require("lodash/fp");

class IO {
  static of(value) {
    return new IO(value);
  }
  constructor(value) {
    this._value = value;
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

const cat = flowRight(print, readFile);
const value = cat("package.json")._value()._value();
// 包裹为IO(IO(value))
// IO { _value: [Function (anonymous)] }
// IO { _value: [Function (anonymous)] }
console.log(value);
