// No puede haber mas de un constructor, no hay sobrecarga
export class Node {
  // ... = rest, queremos tener 0, 1, 2,...., n childrens
  constructor(head, ...children) {
    this.head = head;
    this.children = children;
  }
}

export class Num extends Node {
  constructor(value) {
    super(value);
  }

  get value() {
    return this.head;
  }

  toString() {
    return `${this.value}`;
  }
}
