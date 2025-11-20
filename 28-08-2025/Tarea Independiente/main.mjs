import { Node, Num, Ident, Operation } from "./ast.mjs";

function test_case_0() {
  const n = new Node("add", 1, 1, 2, 3);
  console.log("Node=", n);

  const num = new Num(666);
  console.log("Num as Node=", num);
  console.log("Num.value()=", num.value);
  console.log("Num.toString()=", num.toString());
}

function test_case_1() {
  const a = new Node("add", new Num(1), new Num(2));
  const b = new Node("add", new Num(1), new Num(2));
  const c = new Node("sub", new Num(2), new Num(3));

  console.log(a.same(b)); // true
  console.log(a.same(c)); // false
  console.log(a.same(42)); // false
}

function test_case_2() {
  const a = new Node(null);
  const b = new Node("x");
  const c = new Node(null, 1, 2);

  console.log(a.isLeaf()); // true
  console.log(b.isLeaf()); // false
  console.log(c.isLeaf()); // false
}

function test_case_3() {
  const leaf = new Num(7);
  const tree = new Node("add", leaf, new Node("null", new Num(1), new Num(2)));

  console.log(leaf.height()); // 0
  console.log(tree.height()); // 2
}

function test_case_4() {
  const x = new Ident("x");
  const y = new Ident("y");

  console.log(String(x)); // "x"
  console.log(x.same(new Ident("x"))); // true
  console.log(x.same(y)); // false
}

function test_case_5() {
  const x = new Ident("x");
  const expr = new Operation(
    "+",
    x,
    new Num(2),
    new Operation("*", new Num(3), x)
  );

  console.log(String(expr)); // "+(x, 2, *(3, x))"
  console.log(expr.arity()); // 3
}

function main() {
  test_case_0();
  test_case_1();
  test_case_2();
  test_case_3();
  test_case_4();
  test_case_5();
}

main();
