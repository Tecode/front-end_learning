class Animal {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Animal(value);
  }

  map(fn) {
    return new Animal(fn(this._value));
  }
}

const animal001 = new Animal("Hello").map((value) => value + "Functor");
console.log("animal001:", animal001);

const animal002 = Animal.of("你好！").map((value) => value + "世界");
console.log("animal002:", animal002);

// animal001: Animal { _value: 'HelloFunctor' }
// animal002: Animal { _value: '你好！世界' }