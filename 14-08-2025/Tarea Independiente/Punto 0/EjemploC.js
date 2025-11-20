// Ejemplo C (var function)

var x = 666;

function foo() {
  if (false) {
    var x = 0;
    console.log("C then", x);
  } else {
    console.log("C else", x);
  }
}

console.log("C x=", x);
