import {
  Node,
  Num,
  Id,
  Oper,
  Operation,
  UnaryOp,
  BinaryOp,
  AstToString,
  PrefixNotation,
  PostfixNotation,
} from "./ast.mjs";

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

function test_ast_to_string() {
  const v = new AstToString();

  const n = new Node("add", 1, 1, 2, 3);
  console.log("AstToString(Node)      =", n.accept(v)); // (add, 1, 1, 2, 3)

  const num = new Num(666);
  console.log("AstToString(Num)       =", num.accept(v)); // 666

  const id = new Id("x");
  console.log("AstToString(Id)        =", id.accept(v)); // x

  const plus = new Oper("+");
  const addOp = new Operation(plus, id, num);
  console.log("AstToString(Operation) =", addOp.accept(v)); // (+, x, 666)

  const minus = new Oper("-");
  const negx = new UnaryOp(minus, id);
  console.log("AstToString(UnaryOp)   =", negx.accept(v)); // -x

  const addBin = new BinaryOp(plus, id, num);
  console.log("AstToString(BinaryOp)  =", addBin.accept(v)); // (x + 666)
}

function test_notations() {
  const x = new Id("x");
  const n3 = new Num(3);
  const n5 = new Num(5);
  const plus = new Oper("+");
  const minus = new Oper("-");
  const mul = new Oper("*");

  const add = new BinaryOp(plus, x, n3); // x + 3
  const prod = new BinaryOp(mul, add, n5); // (x + 3) * 5
  const negx = new UnaryOp(minus, x); // -x

  const Pre = new PrefixNotation();
  const Post = new PostfixNotation();

  console.log("PREFIX  add  =", add.accept(Pre)); // (+ x 3)
  console.log("POSTFIX add  =", add.accept(Post)); // (x 3 +)
  console.log("PREFIX  prod =", prod.accept(Pre)); // (* (+ x 3) 5)
  console.log("POSTFIX prod =", prod.accept(Post)); // (x 3 + 5 *)
  console.log("PREFIX  -x   =", negx.accept(Pre)); // (neg x)
  console.log("POSTFIX -x   =", negx.accept(Post)); // (x neg)
}

function main() {
  test_case_0();
  test_case_1();
  test_case_2();
  test_ast_to_string();
  test_notations();
}

main();
