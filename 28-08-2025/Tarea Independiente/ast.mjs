/* Funciones relacionadas al ejercicio 2.a:
   Método same(other): retorna true si el nodo actual y "other" son equivalentes
   (igual head y mismos children recursivamente). Retorna false si "other" no es Node.
*/

// Verifica si un valor es instancia de Node
const isNode = (x) => x instanceof Node;

// Compara dos hijos:
// - Si ambos son Node, llama recursivamente a same
// - Si no, compara valores directamente
const sameChild = (a, b) =>
  isNode(a) && isNode(b) ? a.same(b) : Object.is(a, b);

// Compara dos arrays de children:
// - Deben tener la misma longitud
// - Cada elemento debe ser igual en la misma posición
const sameArray = (xs, ys) =>
  xs.length === ys.length && xs.every((x, i) => sameChild(x, ys[i]));

/* Funciones relacionadas al ejercicio 2.c:
   Método height(): calcula la altura de un Node
   (camino más largo desde el nodo hasta una hoja).
*/

// Retorna la altura de un hijo:
// - Si es Node, usa su método height
// - Si no lo es, la altura se toma como 0
const childHeight = (c) => (isNode(c) ? c.height() : 0);

// Función auxiliar para quedarse con el mayor de dos valores
const max = (a, b) => (a > b ? a : b);

// Calcula la altura de un Node n:
// - Si no tiene hijos → altura 0
// - Si tiene hijos → 1 + máximo de las alturas de sus hijos
const heightOf = (n) =>
  n.children.length === 0 ? 0 : 1 + n.children.map(childHeight).reduce(max);

// No puede haber más de un constructor, no hay sobrecarga
export class Node {
  // head = valor del nodo, ...children = lista (0..n) de hijos
  constructor(head, ...children) {
    this.head = head;
    this.children = children;
  }

  /* 2.a: Compara el nodo actual con "other" */
  same(other) {
    return (
      isNode(other) && // 1. Debe ser Node
      Object.is(this.head, other.head) && // 2. head iguales
      sameArray(this.children, other.children) // 3. children iguales
    );
  }

  /* 2.b: Retorna true si el nodo es hoja.
     Un nodo es hoja cuando no tiene head y no tiene children */
  isLeaf() {
    return this.head == null && this.children.length === 0;
  }

  /* 2.c: Retorna la altura del nodo actual */
  height() {
    return heightOf(this);
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

// Clase Ident: modela un identificador dentro del AST
export class Ident extends Node {
  // name = lexema (ej. "x"); no tiene children
  constructor(name) {
    super(name);
  }

  // Devuelve el lexema del identificador
  get name() {
    return this.head;
  }

  // Representación como string (solo el nombre)
  toString() {
    return `${this.name}`;
  }
}

// Modela una operacion n-aria ('+', '-', '*', '/')
export class Operation extends Node {
  constructor(operator, ...args) {
    super(operator, ...args);
    this.operator = operator;
  }

  // Lista de argumentos de la operacion
  get args() {
    return this.children;
  }

  // Cantidad de argumentos
  arity() {
    return this.children.length;
  }

  toString() {
    const argsStr = this.args.map(String).join(", ");
    return `${this.operator}(${argsStr})`;
  }
}
