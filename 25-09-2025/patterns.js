/*
{name:{first:'Juan', last:'Perez'}, birth:{day:11, month:9, year:2001}, friends:[] }
*/

/*
Goal: print last and month of birth 
*/

// La persona es un object, que tiene name (me interesa last) que es object, y birth (me interesa month) que es object
// Ya el patron recolecta los datos
// = 'si no viene ningun objeto, tome un objeto vacio por defecto', si {a} (no viene) = {b} (use por defecto)
// ESTE ES EL PATTERN //
function foo(
  { name: { last }, birth: { month } } = {
    name: { last: "unknown" },
    birth: { month: "unknown" },
  }
) {
  // Get data
  console.log(last, month);
}

// Construimos el objeto
// ESTE ES EL DATA //
const juan = {
  name: { first: "Juan", last: "Perez" },
  birth: { day: 11, month: 9, year: 2001 },
  friends: [],
};

foo(juan);
//foo(666); // Error, no es un object, es un number
foo({ name: {}, birth: {} }); // Si hay error, pero para JS no es un error, porque el patron se cumple, pero last y month quedan undefined, patter-matching flexible

// Funcion car, recibe una lista y devuelve el primer elemento (sin utilizar patter-matching)
function car(a) {
  return a[0];
}

// Utilizando pattern-matching
// Acapara el primer elemento, y en rest lo que queda (es decir, lo que sigue no me interesa)
function car_pm([first, ..._]) {
  return first;
}
a = [1, 2, 3];
console.log(a, car(a));
