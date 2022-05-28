class Dependency {
  constructor() {
    // 存储所有的观察者
    this.listeners = [];
  }

  // 添加观察者
  addListener(listener) {
    if (listener && listener.update) {
      this.listeners.push(listener);
    }
  }

  // 发送通知
  notify() {
    this.listeners.forEach((listener) => listener.update());
  }
}
