
import { Num, BinaryOp, UnaryOp, Program, NULL, TernaryOp, LetExpr } from './ast/ast.mjs'

export default class EvalAst {
	
  eval(node) {
	  
	if (node == NULL)
	   return undefined
	
    if (node instanceof Program) {
		const result =  node.statements.map(stmt => this.eval(stmt))
	                                   .filter(r => r != undefined)
		return (result.length != 0) ? result : undefined								   
    }
	
    if (node instanceof Num) {
      return node.value
    }
	
    if (node instanceof BinaryOp) {
		
      const left = this.eval(node.left)
      const right = this.eval(node.right)
	  
      switch (node.op.name) { 
        case '+': return left + right
        case '-': return left - right
        case '*': return left * right
        case '/': return left / right
		case undefined: return undefined
		default : throw new Error("EvalAst: Invalid operator found: " + node)
      }
    }
	
    if (node instanceof UnaryOp) {
      const v = this.eval(node.expr)
      return node.op.name === '-' ? -v : v 
    }

    if (node instanceof TernaryOp) {
      const c = this.eval(node.cond);
      return (Number(c) !== 0) 
        ? this.eval(node.thenExpr)
        : this.eval(node.elseExpr);
    }

    if (node instanceof LetExpr) {
      throw new Error(`LetExpr not supported yet: ${node.toString()}`);
    }

    if (node instanceof Id) {
      throw new Error(`Variable usage not supported yet: ${node.name}`);
    }

    throw new Error("EvalAst: Invalid node type found: " + node)
  }
}
