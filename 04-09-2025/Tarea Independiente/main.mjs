import { Node, Num, Id, Oper, Operation, UnaryOp, BinaryOp, PowOp, Ternary, Comma } from "./ast.mjs";

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

function test_case_3a() {
  // a) -2 + 3 * 4 -> (-2 + (3 * 4))
  const two = new Num(2);
  const three = new Num(3);
  const four = new Num(4);
  const opMinus = new Oper("-");
  const opPlus = new Oper("+");
  const opMul = new Oper("*");

  const neg2 = new UnaryOp(opMinus, two);
  const mul = new BinaryOp(opMul, three, four);
  const expr = new BinaryOp(opPlus, neg2, mul);

  console.log("expr_a =", expr.toString()); // out : "(-2 + (3 * 4))"
}

function test_case_3b() {
  // b) -(2 + 3 * 4) -> "-(2 + (3 * 4))"
  const two = new Num(2);
  const three = new Num(3);
  const four = new Num(4);
  const opMinus = new Oper("-");
  const opPlus = new Oper("+");
  const opMul = new Oper("*");

  const mul = new BinaryOp(opMul, three, four);
  const sum = new BinaryOp(opPlus, two, mul);
  const expr = new UnaryOp(opMinus, sum);

  console.log("expr_b =", expr.toString()); // out : s"-(2 + (3 * 4))"
}

function test_case_3c() {
  // c) -((2 + 3) * 4 ** 5) -> "-((2 + 3) * (4 ** 5))"

  const two = new Num(2);
  const three = new Num(3);
  const four = new Num(4);
  const five = new Num(5);
  const opMinus = new Oper("-");
  const opPlus = new Oper("+");
  const opMul = new Oper("*");
  const opPow = new Oper("**");

  const sum = new BinaryOp(opPlus, two, three);
  const pow = new BinaryOp(opPow, four, five);
  const prod = new BinaryOp(opMul, sum, pow);
  const expr = new UnaryOp(opMinus, prod);

  console.log("expr_c =", expr.toString()); // out : "-((2 + 3) * (4 ** 5))"
}

function test_case_4() {
  const x = new Id("x");
  const n666 = new Num(666);
  const plus = new Oper("+");
  const add = new Operation(plus, x, n666);

  console.log("Default =", add.toString());
  console.log("Parentesis cuadrados =", add.toString({ lparen: "[", rparen: "]" }));
  console.log("Llaves + coma =", add.toString({ lparen: "{", rparen: "}", sep: ", " }));
}

function test_case_5() {
  const n2 = new Num(2), n3 = new Num(3), n4 = new Num(4);
  const rightAssoc = new PowOp(n2, new PowOp(n3, n4)); // 2 ** (3 ** 4)
  const leftAssc = new PowOp(new PowOp(n2, n3), n4); // (2 ** 3) ** 4
  
  console.log("Right associative: ", rightAssoc.toString());
  console.log("Left associative: ", leftAssc.toString());
}

function test_case_6() {
  const a = new Id("a"), b = new Id("b"), c = new Id("c");
  const one = new Num(1), two = new Num(2);
  const plus = new Oper("+"), mul = new Oper("*");

  const cons = new BinaryOp(plus, b, one); // b + 1
  const alt = new BinaryOp(mul, c, two); // c * 2
  const expre = new Ternary(a, cons, alt); // a ? (b + 1) : (c * 2)

  console.log("Ternary expr: ", expre.toString());
}

function test_case_7() {
  const x = new Id("x"), y = new Id("y");
  const one = new Num(1), two = new Num(2);
  const assign = new Oper("="), plus = new Oper("+");

  const setX = new BinaryOp(assign, x, one);     
  const setY = new BinaryOp(assign, y, two);     
  const sum  = new BinaryOp(plus, x, y);        

  const seq  = new Comma(new Comma(setX, setY), sum); // (x=1, y=2, x+y)
  console.log("comma_seq =", seq.toString());    // "((x = 1), (y = 2), (x + y))"
}

function main() {
  test_case_0();
  test_case_1();
  test_case_2();
  test_case_3a();
  test_case_3b();
  test_case_3c();
  test_case_4();
  test_case_5();
  test_case_6();
  test_case_7();
}

main();
