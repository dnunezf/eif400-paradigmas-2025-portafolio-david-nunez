// Versión con then/catch
function print_json_then(user = 1) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${user}`)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}

// Versión async/await
async function print_json_async(user = 1) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${user}`
    );
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

// Casos de prueba simples
print_json_then(1);
print_json_async(2);
