// Either两者中的一个类似if...else...处理
// 异常会让函数不纯，Either函子可以用来做异常处理
class Right {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Right(value);
  }

  map(func) {
    return Right.of(func(this._value));
  }
}

class Left {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Left(value);
  }

  map(func) {
    return this;
  }
}

const right = Right.of(10).map((value) => value + 2);
const left = Left.of(20).map((value) => value + 2);

console.log("Right:", right);
console.log("Left:", left);
// Right: Right { _value: 12 }
// Left: Left { _value: 20 }

function parseJSON(str) {
  try {
    return Right.of(JSON.parse(str)).map((data) => ({
      ...data,
      name: data.name.toLocaleUpperCase(),
    }));
  } catch (error) {
    return Left.of({ error: error.message });
  }
}

console.log(parseJSON('{ "name": "haoxuan" }'));
// Left { _value: { error: 'Unexpected token o in JSON at position 1' } }
// Right { _value: { name: 'HAOXUAN' } }
