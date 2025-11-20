
// ES6 
import {Visitable} from './visitor.mjs'

export class AstPrintVisitor{
	
	constructor(f = n => console.log(n) ){
		this.f = f
	}
	
	visit(node){
		
		if (! node){
			return []
		}
		
		if (node instanceof Num){
		   return [this.f(node.value)]
		}
		
		console.log("--",  node, "head:", node.head)
		results = [node.head.accept(this)]
		
		for (let ch of node.children){
			res_children.push(ch.accept(this))
		}
		return results
	}
}
 
export class Node extends Visitable{
	
	#head;
	#children;
	
	constructor(head, ...children){ // var args in C++ rest in JS){
		super()
		this.#head = head 
		this.#children = children
	}
	
	get head(){
		return this.#head
	}
	
	get children(){
		return this.#children
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

export class Oper extends Id{
	
	constructor(name){
		super(name)
		
	}
	
}

function cast(data, Class){
	return (data instanceof Class) ? data : new Class(data)
}

export class Operation extends Node{
	
	constructor(op, ...args){
		super(cast(op, Oper), ...args)
		
	}
	
	get op(){
		return this.head
	}
	
	get args(){
		return this.children 
	}
	
	toString(){
		return this.args.length == 0 ? this.op.toString()
		                             : `{this.op.toString()}(${this.args.join(',')})`
    }
}

export class UnaryOp extends Operation{
	
	constructor(op, expr){
		super(op, expr)	
	}
	
	get expr(){
		return this.children[0]
	}

    toString(){
		return `${this.op}(${this.expr})`
	}		
}

export class BinaryOp extends Operation {
	
	constructor(op, left, right){
		super(op, left, right)	
	}
	
	get left(){
		return this.children[0]
	}
	
	get right(){
		return this.children[1]
	}
	toString(){return `${this.left} ${this.op} ${this.right}`}
	
}

export class TernaryOp extends Operation {
	constructor(cond, thenExpr, elseExpr) {
		super(new Oper('?:'), cond, thenExpr, elseExpr)
	}

	get cond() { return this.children[0] }
	get thenExpr() { return this.children[1] }
	get elseExpr() { return this.children[2] }
	toString() { return `${this.cond} ? ${this.thenExpr} : ${this.elseExpr}` }
}

export class LetExpr extends Node {
	constructor(id, valueExpr, bodyExpr) {
		super(id, valueExpr, bodyExpr)
	}

	get id(){ return this.head } // ID
	get valueExpr(){ return this.children[0] }
	get bodyExpr(){ return this.children[1] }
	toString(){ return `let ${this.id} = ${this.valueExpr} in ${this.bodyExpr}` }
}

export const NULL = new UnaryOp('null')

export class Program extends Node{
	
	constructor(...statements){
		super(...(statements.length == 0 ? [PASS] : statements))	
	}
	
	get statements(){
		return [this.head, ...this.children]
	}
	
	toString(){
		return this.statements.map(s => s.toString()).join("; ")
    }
}

export const PASS = new Program(NULL)



