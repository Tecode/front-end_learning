// IO函子，函数是一等公民
const fp = require("lodash/fp");

class IO {
    static of(value) {
        return new IO(function () {
            return value;
        })
    }

    constructor(value) {
        this._value = value;
    }

    map(func) {
        return new IO(fp.flowRight(func, this._value));
    }
}

// 调用
const run = IO.of(process).map(p => p.execPath);
console.log(run);
console.log(run._value());
// IO { _value: [Function (anonymous)] }
// C:\Program Files\nodejs\node.exe