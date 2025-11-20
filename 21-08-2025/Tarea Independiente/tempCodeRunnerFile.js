console.log("*** And ***");

const foo = (msg, value) => (console.log(msg), value);

const fibo_start = (n) => foo(`fibo(${n})`, fibo(n));
const fibo = (n) => (n <= 1 ? 1 : fibo(n - 1) + fibo(n - 2));

// AND (&&) usa corto-circuito (estrategia lazy): si el primero es falso ya no evalúa el segundo.
console.log(
  "Caso 1:",
  foo("A", true) && // imprime "A", retorna true
    foo("B", false) // evalúa porque el primero fue true, imprime "B", retorna false
); // Resultado final: false

console.log(
  "Caso 2:",
  foo("A", false) && // imprime "A", retorna false
    foo("B", false) // NO se evalúa por corto-circuito (estrategia lazy)
); // Resultado final: false

console.log("\n*** Or ***");

// OR (||) también con corto-circuito (lazy): si el primero es true ya no evalúa el segundo.
console.log(
  "Caso 1:",
  foo("A", true) || // imprime "A", retorna true
    foo("B", false) // NO se evalúa
); // Resultado final: true

console.log(
  "Caso 2:",
  foo("A", false) || // imprime "A", retorna false
    foo("B", false) // se evalúa, imprime "B", retorna false
); // Resultado final: false

console.log("\n*** Times/fibo ***");

// * fuerza evaluar ambos operandos siempre (estrategia aplicativa).
console.log(
  "Caso 1:",
  foo("A", fibo(10)) * // calcula fibo(10), imprime "A", ~55
    foo("B", 0) // imprime "B", 0
); // Resultado final: 55 * 0 = 0

// , (coma) evalúa ambos, devuelve el último (estrategia aplicativa).
console.log(
  "Caso 2:",
  foo("A", 0), // imprime "A", valor descartado
  foo("B", fibo(10)) // imprime "B", calcula fibo(10)=55
); // Resultado final: 55

console.log(
  "\n*** Ternary (Warning!! it can take a big whiiile. Explain why) ***"
);

// ? : primero evalúa condición. Aquí fibo_start(50) es muy costoso (recursión exponencial).
console.log(
  "Caso 1:",
  foo("A", fibo_start(50) < 0) // imprime "A", calcula fibo(50) (muy lento), resultado false
    ? foo("B", fibo_start(100)) // rama NO tomada (no se evalúa)
    : foo("C", 0) // imprime "C", retorna 0
); // Resultado final: 0

// ====================
// Conclusión:
// JS usa evaluación aplicativa (eager) de argumentos, pero algunos operadores (&&, ||, ?:)
// introducen evaluación lazy (por demanda) mediante corto-circuito.
// Operadores aritméticos y coma fuerzan evaluación completa de sus operandos.
