// Ejemplo B (let)
let x = 666;

if (true) {
  var x = 0;
  console.log("B then", x);
} else {
  console.log("B else", x);
}
console.log("B x=", x);

// SyntaxError: Identifier 'x' has already been declared
