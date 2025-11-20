
import antlr4 from 'antlr4';
import ExprVisitor from '../generated/ExprVisitor.js';


export default class EvalVisitor extends ExprVisitor {
	
	// printExpr: expr NEWLINE
	visitPrintExpr(ctx) {
		const value = this.visit(ctx.expr());
		return value;
	}

	// blank: NEWLINE
	visitBlank() {
		return null;
	}

	// unaryMinus: '-' expr
	visitUnaryMinus(ctx) {
		const v = this.visit(ctx.expr());
		return -Number(v);
	}

	// MulDiv: expr op=('*'|'/') expr
	visitMulDiv(ctx) {
		const left = Number(this.visit(ctx.expr(0)));
		const right = Number(this.visit(ctx.expr(1)));
		const op = ctx.op.text;
		if (op === '*') return left * right;
		return left / right;
	}


	// AddSub: expr op=('+'|'-') expr
	visitAddSub(ctx) {
		const left = Number(this.visit(ctx.expr(0)));
		const right = Number(this.visit(ctx.expr(1)));
		const op = ctx.op.text;
		return op === '+' ? left + right : left - right;
	}


	// int: INT
	visitInt(ctx) {
		return Number(ctx.getText());
	}

	// float: FLOAT
	visitFloat(ctx) {
		return Number(ctx.getText());
	}

	// ternary: expr '?' expr ':' expr
	visitTernary(ctx) {
		const c = Number(this.visit(ctx.expr(0)));
		return c !== 0 ? this.visit(ctx.expr(1)) : this.visit(ctx.expr(2));
	}

	// letExpr: LET ID ASSIGN expr IN expr
	visitLetExpr(ctx) {
		const id = ctx.ID().getText();
  		const val = this.visit(ctx.expr(0));
  		const bodyText = ctx.expr(1).getText();
  		throw new Error(`LetExpr not supported yet: let ${id} = ${val} in ${bodyText}`);
	}

	// parens: '(' expr ')'
	visitParens(ctx) {
		return this.visit(ctx.expr());
	}
}