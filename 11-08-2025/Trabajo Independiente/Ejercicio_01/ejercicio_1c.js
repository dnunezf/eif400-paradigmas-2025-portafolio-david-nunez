// max_function retorna una funcion que calcula el maximo de f(x) y g(x)
const max_function_with_math = (f, g) => (x) => Math.max(f(x), g(x));
const max_function_without_math = (f, g) => (x) => f(x) >= g(x) ? f(x) : g(x);

// construimos algunas funciones
const f = (x) => 2 * x;
const g = (x) => x + 5;

// probamos
console.log(max_function_with_math(f, g)(2)); // resultado es 7, Math.max(4,7)
console.log(max_function_with_math(f, g)(10)); // resultado es 20, Math.max(20,15)
