class Observer {
  isStopped = false;
  unsubscribeCb;

  constructor(next, error, complete) {
    this._next = next || noop;
    this._error = error || noop;
    this._complete = complete || noop;
  }

  next(value) {
    if (!this.isStopped) {
      this._next(value);
    }
  }

  error(err) {
    if (!this.isStopped) {
      this._error(err);
      this.unsubscribe();
    }
  }

  complete() {
    if (!this.isStopped) {
      this._complete();
      this.unsubscribe();
    }
  }

  onUnsubscribe(unsubscribeCb) {
    this.unsubscribeCb = unsubscribeCb;
  }

  unsubscribe() {
    this.isStopped = true;
    this.unsubscribeCb && this.unsubscribeCb();
  }
}
