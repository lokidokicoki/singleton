const _singleton = Symbol();
const _enforcer = Symbol();
export default class Enforcer {
  constructor(enf) {
    if (enf !== _enforcer) {
      throw new Error(`cannae make enforcer!`);
    }
    this._type = 'Enforcer';
    this.time = new Date();
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

  static get instance() {
    if (!this[_singleton]) {
      this[_singleton] = new Enforcer(_enforcer);
    }

    return this[_singleton];
  }
}
