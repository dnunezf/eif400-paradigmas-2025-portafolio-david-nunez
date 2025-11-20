// Ejemplo A (var)
var x = 666;

if (true) {
  var x = 0;
  console.log("A then", x);
} else {
  console.log("A else", x);
}

console.log("A x=", x);
