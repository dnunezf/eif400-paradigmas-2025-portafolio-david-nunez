// version async/await equivalente
export async function print_json_async(
  user = 1,
  { fetchFn = fetch, logger = console } = {}
) {
  const url = `https://jsonplaceholder.typicode.com/todos/${user}`;
  try {
    const res = await fetchFn(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    logger.log(json);
    return json;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}
