import {Visitable} from './visitable.mjs'


// ES6 

export class Node extends Visitable{
	
	constructor(head, ...children){ // var args in C++ rest in JS){
		super()
		this.head = head 
		this.children = children
	}
}

class AstPrintVisitor{
	
	visit(node){
		if (!node) return
		if (node instanceof Num){
			console.log(node.value)
			return
		}
		if (node instanceof Id){
			console.log(node.name)
			return
		}
		
		if (node instanceof UnaryOp){
			console.log(node.oper.name)
			return node.accept(this)
		}
	}
	
}

export class Num extends Node{
	constructor(value){
		super(value)
		
	}
	get value(){
		return this.head
	}
	
	toString(){
		return `${this.value}`
	}
}

export class Id extends Node{ // To do possible more general Node : Leaf
	constructor(name){
		super(name)
		
	}
	get name(){
		return this.head
	}
	
	toString(){
		return `${this.name}`
	}
}

export class Op extends Id{
}

export class Operation extends Node{
	constructor(oper, ...args){
		super(oper, ...args)
	}
	get oper(){
		return this.head
	}
	get args(){
		return this.children
	}
	
	toString(){
		return "(" + [this.head, ...this.args].map( ch => ch.toString())
		                                .join(", ") + ")"
	}
	
}
export class UnaryOp extends Operation{
	constructor(oper, expr){
		super(oper, expr)
		
	}
	get expr(){
		return this.args[0]
	}
	toString(){
		return `${this.oper}${this.expr}`
	}
}


export class BinaryOp extends Operation{
	constructor(oper, left, right){
		super(oper, left, right)
		
	}
	get left(){
		return this.args[0]
	}
	get right(){
		return this.args[1]
	}
	toString(){
		return `(${this.left} ${this.oper} ${this.right})`
	}
}