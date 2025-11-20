async function repeat(action, condition, secs) {
  // esperar al menos secs segundos antes de iniciar
  await new Promise((resolve) => setTimeout(resolve, secs * 1000)); // crea la espera inicial

  // bucle controlado por la condición
  // cada iteracion espera la resolucion de action(), y luego evalua condition(value)
  // cuando condition devuelve true, se retorna ese valor y la funcion termina
  while (true) {
    const value = await action();
    const ok = await condition(value);
    if (ok) return value;
  }
}

repeat(
  async () => Math.random(),
  async (x) => x > 0.9,
  2
).then((x) => console.log(`First value found ${x.toFixed(3)}`));
