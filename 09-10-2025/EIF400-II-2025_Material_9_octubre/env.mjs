export class Env {
  #locals;
  get locals() {
    return this.#locals;
  }
  #parent;
  get parent() {
    return this.#parent;
  }
  constructor(parent = null, locals = []) {
    this.#locals = new Map(locals);
    this.#parent = parent;
  }
  static from(pairs) {
    return new Env(null, pairs);
  }
  define(name, value) {
    this.locals.set(name, value);
  }
  has(name) {
    return this.locals.has(name) || (this.parent && parent.has(name));
  }
  find(name) {
    console.log("Env_find:", name, this.locals.has(name));
    if (this.locals.has(name)) {
      return this.locals.get(name);
    } else if (this.parent) {
      return this.parent.find(name);
    } else {
      console.log("Env:", this.locals, this.has(name));
      throw new ReferenceError(`Undefined symbol: ${name}`);
    }
  }

  change(name, value) {
    if (this.locals.has(name)) {
      this.locals.set(name, value);
    } else if (this.parent) {
      this.parent.change(name, value);
    } else throw new ReferenceError(`Undefined symbol: ${name}`);
  }
}
