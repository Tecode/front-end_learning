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
    // 如果val是对象，把val内部的属性转换成响应式数据
    this.walk(value);
    const _this = this;
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
        _this.walk(newValue);
      },
    });
  }
}
