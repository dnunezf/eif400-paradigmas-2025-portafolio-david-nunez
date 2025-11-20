// DICHA DEFINICIÓN SERÁ UNA COMPOSICIÓN DE VARIAS FUNCIONES
const composeAll = (fs) =>
  fs.reduceRight(
    (g, f) => (x) => f(g(x)),
    (x) => x
  );

// ALGUNAS LAMBDAS QUE NOS SERVIRÁN COMO PRUEBA
const f1 = (x) => x + 1;
const f2 = (x) => x * 2;
const f3 = (x) => x * x;

// CREAMOS EL ARRAY DE FUNCIONES
const fs = [f1, f2, f3];

// APLICAMOS g(x) = f1(f2(f3(x)))
const g = composeAll(fs);

// Pruebas
console.log(`g(2) = ${g(2)}`); // Debería ser f1(f2(f3(2))) = ( (2^2)*2 ) + 1 = 9
console.log(`g(3) = ${g(3)}`); // Debería ser f1(f2(f3(3))) = ( (3^2)*2 ) + 1 = 19
