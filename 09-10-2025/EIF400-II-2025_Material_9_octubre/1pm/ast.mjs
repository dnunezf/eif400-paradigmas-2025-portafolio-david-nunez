import {Visitable, Visitor} from './visitor.mjs'

export class AstPrintVisitor extends Visitor{ // toString con console.log
	visit(node){
		if (!node) return;
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
			return node.expr.accept(this)
		}
		if (node instanceof BinaryOp){
			console.log(node.oper.name)
			node.left.accept(this)
			node.right.accept(this)
			return
		}
	}
	
}


export class Node extends Visitable{
	constructor(head, ...children){ // Rest (var args)
		this.head = head 
		this.children = children
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
		return "(" + [this.oper,  ...this.args].map( arg => arg.toString() ).join(", ") +")"
	}
}

export class Id extends Node{
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
	constructor(name){
		super(name)
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
		return this.oper.toString() + this.expr.toString() 
	}
}

