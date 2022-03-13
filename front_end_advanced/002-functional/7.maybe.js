// 使用函数方法时如果出现null的情况会直接报错我们可以判断数据是否为null来进行处理
// 如果是null直接返回null不会进行其他操作
class Animal {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Animal(value);
  }

  map(fn) {
    return this.isNoting() ? Animal.of(null) : Animal.of(fn(this._value));
  }

  isNoting() {
    return this._value == null;
  }
}

const animal001 = Animal.of("hello").map((value) => value.toLocaleUpperCase());
const animal002 = Animal.of(null).map((value) => value.toLocaleUpperCase()); // 没有处理null会报错

console.log("animal001:", animal001);
console.log("animal002:", animal002);

// animal001: Animal { _value: 'HELLO' }
// animal002: Animal { _value: null }