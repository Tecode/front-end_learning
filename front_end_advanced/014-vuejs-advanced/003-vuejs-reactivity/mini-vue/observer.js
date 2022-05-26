class Observer {
  constructor(data) {
    this.walk(data);
  }
  walk(data) {
    // 1、判断是否是对象
    if (!data || typeof data !== "object") {
      return;
    }
    // 2. 遍历data对象的所有属性
    Object.keys(data).forEach((key) =>
      this.defineReactive(data, key, data[key])
    );
  }
  defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        return value;
      },
      set(newValue) {
        if (newValue == value) {
          return;
        }
        value = newValue;
      },
    });
  }
}
