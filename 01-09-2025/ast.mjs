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