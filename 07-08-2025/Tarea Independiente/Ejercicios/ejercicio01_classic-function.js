function choose(p, f, g) {
  return function (x) {
    if (p(x)) {
      return f(x);
    } else {
      return g(x);
    }
  };
}

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
