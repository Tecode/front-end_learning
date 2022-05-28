class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm;
    // data中的属性名称
    this.key = key;
    // 回调函数负责更新视图
    this.callback = callback;
    // 把watcher对象记录到Dep类的静态属性target
    Dependency.target = this;
    // 触发get方法，在get方法中会调用addSub
    this.oldValue = this.vm[key];
    Dependency.target = null;
  }

  // 当数据发生变化的时候更新视图
  update() {
    const newValue = this.vm[this.key];
    if (newValue === this.oldValue) {
      return;
    }
    this.callback(newValue);
  }
}
