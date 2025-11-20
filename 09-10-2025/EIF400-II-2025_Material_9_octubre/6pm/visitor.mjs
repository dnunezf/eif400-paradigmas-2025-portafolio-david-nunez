export class Visitable {
  accept(visitor, ...args) {
    return visitor.visit(this, ...args);
  }
}

export class Visitor {
  visit(visitable, ...args) {
    return;
  }
}
