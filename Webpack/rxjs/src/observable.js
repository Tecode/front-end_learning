class Observable {
  constructor(publishFn) {
    this.publish = publishFn;
  }

  static fromEvent(target, eventName) {
    return new Observable(function (observer) {
      const handler = function (e) {
        observer.next(e);
      };
      target.addEventListener(eventName, handler);
      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }

  static interval(delay) {
    return new Observable(function (observer) {
      let index = 0;

      const id = window.setInterval(() => {
        observer.next(index++);
      }, delay);

      return () => {
        clearInterval(id);
      };
    });
  }

  subscribe(observer) {
    this.publish(observer);
    return observer;
  }
}
