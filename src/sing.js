let instance = null;
class Sing {
  constructor() {
    if (!instance) {
      instance = this;

      this._type = 'Sing';
      this.time = new Date();
    }

    return instance;
  }

  test1() {
    return 'test1';
  }

  static staticTest() {
    return 'static test';
  }

  get type() {
    return this._type;
  }

  set type(v) {
    this._type = v;
  }
}

export default Sing;
