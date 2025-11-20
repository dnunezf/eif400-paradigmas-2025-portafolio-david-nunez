import {Node, Num, Id, Op, Operation, UnaryOp} from './ast.mjs'

function test_case_0(){
	
	const n = new Num(666)
	console.log("Num=", n.toString(), n.value)

}

function test_case_1(){
	
	const n666 = new Num(666)
	console.log("Num=", n666.toString(), n666.value)
	
	const x = new Id('x')
	console.log("x=", x.toString(), x.name)
	
	const minus = new Op("-")
	const minus_x = new UnaryOp(minus, x)
	console.log("minus_x", minus_x.toString())
	
	const plus = new Op('+')
	console.log("plus=", plus.toString(), plus.name)
	
	//"666 + -x" -> Parser -> new BinaryOp(new Op('+'), new Num(666),new UnaryOp(minus, new Id('x')))

    // "666 + -  x" -> tokenizer (lexer) 
	//  -> [666, +, -, x] 
	//  -> parser grammar -> new BinaryOp(new Op('+'), new Num(666),new UnaryOp(minus, new Id('x')))
	
	const add = new Operation(plus, n666, new UnaryOp(minus, x)) 
	console.log("add=", add.toString())

}

function main(){
   test_case_0()
   test_case_1()
}

main()