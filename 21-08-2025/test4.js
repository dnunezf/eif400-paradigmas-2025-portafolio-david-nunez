const z = 666;
const foo = (x) => [x, z + x + 10, (w) => x * z]; // SI hay efecto, ya que la lambda cambió (no fue alpha-conversion)

console.log(foo(z + 10));

/*
 *1. Qué imprime?
 *2. Justifique la respuesta
 */
