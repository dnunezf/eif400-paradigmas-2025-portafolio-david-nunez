const URLS = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://dummyjson.com/products/1",
  "https://dummyjson.com/products",
];

// funcion auxiliar que encapsula el patron repetido de hacer una peticion
// fetch y convertir la respuesta a JSON, con manejo basico de errores HTTP
const fetchJson = (url) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error(`HTTP ${r.status} @ ${url}`);
    return r.json();
  });

// cuando se usan combinadores como Promise.any o Promise.race, solo se
// recibe el valor de la promesa ganadora. COn labeled se sabe de que
// URL vino el resultado
const labeled = (url) => fetchJson(url).then((data) => ({ url, data }));

// ALL: espera a todas, rechaza si una falla.
export async function demoAll() {
  const [posts, product1, products] = await Promise.all(URLS.map(fetchJson));
  console.log("ALL ok:", {
    posts: posts.length,
    product1: product1.id,
    products: products.products?.length ?? products.length,
  });
}

// ANY: primera que cumpla, ignora rechazos hasta que una cumpla
export async function demoAny() {
  const first = await Promise.any(URLS.map(labeled));
  console.log("ANY first ok from", first.url);
}

// RACE: primera que se resuelva o rechace
export async function demoRace() {
  try {
    const first = await Promise.race(URLS.map(labeled));
    console.log("RACE first settled ok from:", first.url);
  } catch (e) {
    console.log("RACE rejected first:", e.message);
  }
}

// "PROMISE.try" equivalente
export function promiseTry(fn) {
  return Promise.resolve().then(fn);
}

// Uso de "try"
export async function demoTry() {
  const val = await promiseTry(() => JSON.parse('{"x":1}'));
  console.log("TRY ok:", val);
  try {
    await promiseTry(() => JSON.parse("{bad}"));
  } catch (e) {
    console.log("TRY error capturado:", e.message);
  }
}

await demoAll();
await demoAny();
await demoRace();
await demoTry();