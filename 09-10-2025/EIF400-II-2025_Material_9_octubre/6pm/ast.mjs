import { Visitable, Visitor } from "./visitor.mjs";

export class Node extends Visitable {
  constructor(head, ...children) {
    // Rest (var args)
    super();
    this.head = head;
    this.children = children;
  }
}
export class AstPrintVisitor extends Visitor {
  visit(node) {
    if (!node) {
      return;
    }
    if (node instanceof Num) {
      console.log(node.value);
      return;
    }
    if (node instanceof Id) {
      console.log(node.name);
      return;
    }

    if (node instanceof Type) {
      console.log(node.toString());
      return;
    }

    if (node instanceof UnaryOp) {
      console.log(node.oper.name);
      console.log(node.expr.accept(this));
      return;
    }
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

export class Id extends Node {
  constructor(name) {
    super(name);
  }
  get name() {
    return this.head;
  }
  toString() {
    return `${this.name}`;
  }
}

export class Oper extends Id {
  constructor(name) {
    super(name);
  }
}

export class Operation extends Node {
  constructor(oper, ...args) {
    super(oper, ...args);
  }
  get oper() {
    return this.head;
  }
  get args() {
    return this.children;
  }
  toString() {
    // (+, x, 666)
    return (
      "(" +
      [this.oper, ...this.args].map((arg) => arg.toString()).join(", ") +
      ")"
    );
  }
}

export class UnaryOp extends Operation {
  constructor(oper, expr) {
    super(oper, expr);
  }
  get expr() {
    return this.args[0];
  }
  toString() {
    return this.oper.toString() + this.expr.toString();
  }
}

// types as AST
export class Type extends Node {
  toString() {
    return this.head.toString();
  }
}

export class IntType extends Type {
  constructor() {
    super("int");
  }
}

export class AnyType extends Type {
  constructor() {
    super("any");
  }
}

export class TupleType extends Type {
  constructor(...elemTypes) {
    super("tuple", ...elemTypes);
  }
  get elems() {
    return this.children;
  }
  toString() {
    return `(${this.elems.map((t) => t.toString()).join(", ")})`;
  }
}
