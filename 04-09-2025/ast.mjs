// No puede haber mas de un constructor, no hay sobrecarga
export class Node {
  // ... = rest, queremos tener 0, 1, 2,...., n childrens
  // Agregamos dos atributos a este objeto, en tiempo de ejecucion (dinamico)
  constructor(head, ...children) {
    this.head = head;
    this.children = children;
  }
}

export class Num extends Node {
  // Agregamos value a head de Node, y children queda con el array vacio
  constructor(value) {
    super(value);
  }

  // En OOP, cuando se hace una clase, se define atributos, metodos y properties. Es un atributo calculado con base a los otros atributos
  get value() {
    return this.head;
  }

  toString() {
    return `${this.value}`; // Realmente, aqui se esta llamando al metodo value, no se colocan parentesis (NO es un atributo)
  }
}

// Se realizo en Tarea Independiente
export class Id extends Node {
  constructor(name) {
    super(name);
  }

  // En OOP, cuando se hace una clase, se define atributos, metodos y properties. Es un atributo calculado con base a los otros atributos
  get name() {
    return this.head;
  }

  toString() {
    return `${this.name}`; // Realmente, aqui se esta llamando al metodo name, no se colocan parentesis (NO es un atributo)
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
    // en este caso, queremos que se muestre tal que (+, x, 666)
    // combinador join: concatena todos los elementos de un array, con un separador
    // [this.oper, ...this.args] -> aplica .map a oper y a los args por igual, no es necesario hacer ,toString() en oper por separado.
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

  // En la posicion 0, ya que ocupo el primer argumento unicamente
  get expr() {
    return this.args[0];
  }

  toString() {
    return this.oper.toString() + this.expr.toString();
  }
}

// A partir de aqui, haremos un
// pequeño quiz: quiero que sea caso x+666 BinaryOp y toString

export class BinaryOp extends Operation {
  constructor(upper, left, right) {
    super(upper, left, right);
  }

  get left() {
    return this.args[0];
  }

  get right() {
    return this.args[1];
  }

  toString() {
    return (
      "(" +
      this.left.toString() +
      " " +
      this.oper.toString() +
      " " +
      this.right.toString() +
      ")"
    );
  }
}
