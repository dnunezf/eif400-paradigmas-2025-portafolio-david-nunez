import { Node, Num, Id, Oper, Operation, UnaryOp, BinaryOp } from "./ast.mjs";

// Casos de prueba
function test_case_0() {
  const n = new Node("add", 1, 1, 2, 3);
  console.log("Node=", n);

  const num = new Num(666);
  console.log("Num as Node=", num);
  console.log("Num.value()=", num.value);
  console.log("Num.toString()=", num.toString());

  const id = new Id("x");
  console.log("Id as Node=", id);
  console.log("Id.name()=", id.name);
  console.log("Id.toString()=", id.toString());
}

function test_case_1() {
  const n666 = new Num(666);
  const x = new Id("x");
  const plus = new Oper("+");
  const add = new Operation(plus, x, n666);

  console.log("add =", add.toString());

  const minus = new Oper("-");
  const add_unary = new UnaryOp(minus, x);
  console.log("add_unary =", add_unary.toString());
}

function test_case_2() {
    const n666 = new Num(666);
    const x = new Id("x");
    const plus = new Oper("+");
    const add_binary = new BinaryOp(plus, x, n666);
    console.log("add_binary =", add_binary.toString());
}

function main() {
  test_case_0();
  test_case_1();
  test_case_2();
}

main();
