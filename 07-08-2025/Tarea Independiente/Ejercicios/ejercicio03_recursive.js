const repeat = (n, f) => (x) => n === 0 ? x : repeat(n - 1, f)(f(x));

console.log(repeat(0, (x) => x)(666));
console.log(repeat(5, (x) => 2 * x)(1));
