// DEFINIMOS ADD COMO LAMBDA
const add = (f, g) => (x) => f(x) + g(x);

// DEFINIMOS ZERO COMO LAMBDA. RETORNA CERO
const zero = (x) => 0;

// EJEMPLO DE FUNCIONES
const f = (x) => 2 * x;
const g = (x) => x + 1;

// PROBAMOS
console.log(add(zero, f)(5)); // resultado es 10 = 2 * 5
console.log(add(f, zero)(5)); // resultado es 10 = 2 * 5
console.log(add(zero, zero)(5)); // resultado es 0
