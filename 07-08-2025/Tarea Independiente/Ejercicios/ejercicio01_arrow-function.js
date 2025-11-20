const choose = (p, f, g) => (x) => p(x) ? f(x) : g(x);

console.log(
  choose(
    (x) => x > 0,
    (x) => x ** 2,
    (x) => x + 1
  )(5)
); // 25
console.log(
  choose(
    (x) => x > 0,
    (x) => x ** 2,
    (x) => x + 1
  )(-5)
); // -4
