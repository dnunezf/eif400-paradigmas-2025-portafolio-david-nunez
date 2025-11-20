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
