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

  /* Permite configurar el parentesis y el delimitador.
   * opts = { lparen: '(', rparen: ')', sep: ', ' }
   */
  toString(opts = {}) {
    // Estos son los valores por defecto
    const cfg = {
      lparen: "(",
      rparen: ")",
      sep: ", ",
      ...opts, // SOBREESCRIBE SI SE PASAN OTROS ARGUMENTOS, POR EJEMPLO, sep = " | "
    };

    // convertimos operador + argumentos a string
    const parts = [this.oper, ...this.args].map(
      (arg) => arg.toString?.(opts) ?? String(arg)
    );

    // construimos la cadena final
    return cfg.lparen + parts.join(cfg.sep) + cfg.rparen;
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
  constructor(oper, left, right) {
    super(oper, left, right);
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

// potencia
export class PowOp extends BinaryOp {
  constructor(left, right) {
    super(new Oper("**"), left, right);
  }

  toString() {
    return `(${this.left.toString()} ** ${this.right.toString()})`;
  }
}

// ternario ?
export class Ternary extends Operation {
  constructor(test, cons, alt) {
    super(new Oper("?:"), test, cons, alt);
  }

  get test() {
    return this.args[0];
  }

  get cons() {
    return this.args[1];
  }

  get alt() {
    return this.args[2];
  }

  toString() {
    return `(${this.test.toString()} ? ${this.cons.toString()} : ${this.alt.toString()})`;
  }
}

// coma ,
export class Comma extends BinaryOp {
  constructor(left, right) {
    super(new Oper(","), left, right);
  }

  toString() {
    return `(${this.left.toString()}, ${this.right.toString()})`;
  }
}