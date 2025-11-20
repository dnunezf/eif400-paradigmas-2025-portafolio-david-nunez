const repeat = (n, f) => (x) => {
  let result = x;

  for (let i = 0; i < n; i++) {
    result = f(result);
  }

  return result;
};

console.log(repeat(0, (x) => x)(666)); // 666
console.log(repeat(5, (x) => 2 * x)(1)); // 32, porque 2*1 = 2, 2*2 = 4, 2*4 = 8, 2*8 = 16, 2*16 = 32 (5 veces en total)
