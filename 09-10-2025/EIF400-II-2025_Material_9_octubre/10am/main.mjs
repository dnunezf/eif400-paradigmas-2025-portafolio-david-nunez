import {Node, Num, Id, Op, Operation, UnaryOp, BinaryOp} from './ast.mjs'

function main(){
	test_0()
	test_1()
	test_2()
}

function test_0(){ 
	const n = new Num(666)
	console.log("test_0:n", n.toString())
	
	const x = new Id("x")
	console.log("test_0:n", x.toString())
}

function test_1(){ 
	const n666 = new Num(666)
	console.log("test_0:n", n666.toString())
	
	const x = new Id("x")
	console.log("test_1:x", x.toString())
	
	const plus = new Op("+")
	
	// "x + 666" -> [Lexer -> [x, +, 666] ->Parser] -> Operation(plus, x, n666)
	const add = new Operation(plus, x, n666)
	
	
	console.log("test_1:add", add.toString())
	
	const minus = new Op("-")
	const minus_666 = new UnaryOp(minus, n666)
	console.log("test_1:minus", minus_666.toString())
	
	
}

function test_2(){ 
	const n666 = new Num(666)
	console.log("test_2:n", n666.toString())
	
	const x = new Id("x")
	console.log("test_2:x", x.toString())
	
	const plus = new Op("+")
	
	// "x + 666" -> [Lexer -> [x, +, 666] ->Parser] -> BinaryOp(plus, x, n666)
	const add = new BinaryOp(plus, x, n666)
	
	
	console.log("test_2:add", add.toString())
	
	const minus = new Op("-")
	const minus_add = new UnaryOp(minus, add)
	console.log("test_2:minus_add", minus_add.toString())
	
	
}
main()