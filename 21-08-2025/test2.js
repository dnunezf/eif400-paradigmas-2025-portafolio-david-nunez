const z = 666;
const foo = (x) => [x, z + x + 10, (x) => x * z]; // No hay efecto, ya que se declara una función, de forma independiente. La x de la funcion es independiente

console.log(foo(z + 10));

/*
 *1. Qué imprime?
 *2. Justifique la respuesta
 */
