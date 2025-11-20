// print_json con then/catch
export function print_json_then(
  user = 1,
  { fetchFn = fetch, logger = console } = {}
) {
  const url = `https://jsonplaceholder.typicode.com/todos/${user}`;
  return fetchFn(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((json) => {
      logger.log(json);
      return json;
    })
    .catch((err) => {
      logger.error(err);
      throw err;
    });
}
