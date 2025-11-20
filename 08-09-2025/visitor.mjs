// Primero, declaramos clase visitable, abstracta normalmente, pero no funciona en JS
export class Visitable {
  // Aceptamos a un visitor
  accept(visitor, ...args) {
    // Aplicamos el patron de IoC = Inversion of Control (delegar control)
    return visitor.visit(this, ...args); // Visiteme (opcional, pasar algun argumento)
  }
}

// Luego, declaramos la clase visitor, interfaz normalmente, pero no funciona en JS
export class Visitor {
  visit(visitable, ...args) {
    return;
  }
}
