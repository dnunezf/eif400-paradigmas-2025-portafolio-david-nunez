import { Visitable, Visitor } from "./visitor.mjs";

// No puede haber mas de un constructor, no hay sobrecarga
// Queremos que sea visitable
export class Node extends Visitable {
  // ... = rest, queremos tener 0, 1, 2,...., n childrens
  // Agregamos dos atributos a este objeto, en tiempo de ejecucion (dinamico)
  constructor(head, ...children) {
    super();
    this.head = head;
    this.children = children;
  }
}

/*PODEMOS IR AGREGANDO VISITADORES, SIN NECESIDAD DE CAMBIAR NODE*/

export class AstPrintVisitor extends Visitor {
  // visita a un nodo, porque node es visitable
  visit(node) {
    // Manejaremos los casos bases, nodo vacio, nodo fuera num o id

    if (!node) {
      return;
    }
    if (node instanceof Num) {
      console.log("Num: " + node.value); // metodo get value
    }
    if (node instanceof Id) {
      console.log("Id: " + node.name); // metodo get name
    }
    if (node instanceof UnaryOp) {
      console.log(node.oper.name); // primero, imprimimos el operador
      console.log(node.expr.accept(this)); // luego, imprimimos la expresion, pero al ser un arbol y no una hoja, debemos seguir visitando hasta llegar a una hoja
    }
  }
}

/*Ejercicio 0 T.I 8/9*/
export class AstToString extends Visitor {
  visit(node) {
    if (node == null) return "";

    //Hojas
    if (node instanceof Num) return String(node.value);
    if (node instanceof Id) return String(node.name);
    if (node instanceof Oper) return String(node.name);

    // Unary: op + expr
    if (node instanceof UnaryOp) {
      const op = node.oper.accept(this);
      const e = node.expr.accept(this);
      return op + e;
    }

    // Binary: L O R
    if (node instanceof BinaryOp) {
      const L = node.left.accept(this);
      const O = node.oper.accept(this);
      const R = node.right.accept(this);
      return `(${L} ${O} ${R})`;
    }

    // Classic operation: (op, arg1, arg2...)
    if (node instanceof Operation) {
      const items = [node.oper, ...node.args].map((x) =>
        x instanceof Node ? x.accept(this) : String(x)
      );
      return `(${items.join(",")})`;
    }

    // Generic Node: just showing head and children
    if (node instanceof Node) {
      const items = [node.head, ...node.children].map((x) =>
        x instanceof Node ? x.accept(this) : String(x)
      );
      return `(${items.join(",")})`;
    }
  }
}

/*Ejercicio 3 T.I 8//9*/
export class PrefixNotation extends Visitor {
  visit(node) {
    if (node == null) return "";

    if (node instanceof Num) return String(node.value);
    if (node instanceof Oper) return String(node.name);
    if (node instanceof Id) return String(node.name);

    if (node instanceof UnaryOp) {
      const op = node.oper.accept(this);
      const e = node.expr.accept(this);
      const opname = op === "-" ? "neg" : op === "+" ? "pos" : op;
      return `(${opname} ${e})`;
    }

    if (node instanceof BinaryOp) {
      const op = node.oper.accept(this);
      const L = node.left.accept(this);
      const R = node.right.accept(this);
      return `(${op} ${L} ${R})`;
    }

    if (node instanceof Operation) {
      const op = node.oper.accept(this);
      const items = node.args.map((a) => a.accept(this));
      return `(${op} ${items.join(", ")})`;
    }

    // Generic node
    const items = [node.head, ...node.children].map((x) =>
      x instanceof Node ? x.accept(this) : String(x)
    );
    return `(${parts.join(", ")})`;
  }
}

export class PostfixNotation extends Visitor {
  visit(node) {
    if (node == null) return "";

    if (node instanceof Num) return String(node.value);
    if (node instanceof Oper) return String(node.name);
    if (node instanceof Id) return String(node.name);

    if (node instanceof UnaryOp) {
      const op = node.oper.accept(this);
      const e = node.expr.accept(this);
      const opname = op === "-" ? "neg" : op === "+" ? "pos" : op;
      return `(${e} ${opname})`;
    }

    if (node instanceof BinaryOp) {
      const op = node.oper.accept(this);
      const L = node.left.accept(this);
      const R = node.right.accept(this);
      return `(${L} ${R} ${op})`;
    }

    if (node instanceof Operation) {
      const op = node.oper.accept(this);
      const items = node.args.map((a) => a.accept(this));
      return `(${items.join(", ")} ${op})`;
    }

    // Generic node
    const items = [node.head, ...node.children].map((x) =>
      x instanceof Node ? x.accept(this) : String(x)
    );
    if (items.length === 0) return "()";
    const [head, ...rest] = items;
    return `(${rest.join(" ")} ${head})`;
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
