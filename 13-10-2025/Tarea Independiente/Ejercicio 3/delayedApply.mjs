export function delayedApply(f, sec) {
  return function (x) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => resolve(f(x)), sec * 1000);
      } catch (e) {
        reject(e);
      }
    });
  };
}

const double = (n) => n * 2;
const g = delayedApply(double, 2);

console.log("Inicio...");
g(5).then((v) => console.log("Resultado:", v));
