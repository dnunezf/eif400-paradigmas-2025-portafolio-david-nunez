// Ejemplo de generador. No se pueden hacer arrows, solo functions generadoras
function* integers(max = Infinity) {
  yield 0; // empezamos en 0
  for (let i = 1; i < max; i++) {
    yield -i;
    yield i;
  }
}

// Usamos el generador
console.log([...integers(10)]); // primer forma
for (let i of integers(10)) {
  // segunda forma
  console.log(i);
}

// Transformamos el siguiente codigo a un json async, a traves de un generador de promesas
function print_json(user = 1) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${user}`)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}

// Solucion imperativa asincronica con generadores
// async: se declara un generador de promesas
// await es el yield de las promesas, es un yield local
async function print_json(user = 1) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${user}`
    );
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}
