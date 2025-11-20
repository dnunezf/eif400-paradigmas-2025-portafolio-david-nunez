// 1. Efecto observable:

const myAnd = (x, y) => x && y;

let s = 0;
const inc = () => (s++, true);

false && inc(); // Resultado: false, s == 0 (no se evalúa inc, ya que evalúa y solo si x es true)
myAnd(false, inc()); // Resultado: false, s == 1 (se evalúa inc porque una función siempre evalúa todos los argumentos)
