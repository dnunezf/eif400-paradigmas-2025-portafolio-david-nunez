// Módulo test.mjs. Es exportable --export--

// Requerimiento Declarativo: Calcular la suma de una colección de números --QUE?-- CONTESTA A --COMO?--
// Basicamente, piden la sumatoria desde i = 0 hasta n-1 = a_i
// No alterar los datos de a, ni provocar efectos secundarios

// FORMA MALA -BASURA- //
export function sum(a) {
  let s = 0; // Estado inicial

  for (let i = 0; i < a.length; i++) {
    s += a[i];
  }
  return s;
}

// FORMA DECLARATIVA -LESS IS MORE-, PERO NO ÓPTIMO //
export function sum_2(a) {
  let s = 0;

  for (let e of a) {
    s += e;
  }
  return s;
}

// COMBINADORES -MEJOR FORMA-
// VERSION DECLARATIVA OPTIMA, CON REDUCE
export const sum_3 = (a) => a.reduce((s, e) => s + e, 0);
