// Generated from grammar/Expr.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

export default class ExprVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ExprParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#printExpr.
	visitPrintExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#blank.
	visitBlank(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#unaryMinus.
	visitUnaryMinus(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#float.
	visitFloat(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#ternary.
	visitTernary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#letExpr.
	visitLetExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#int.
	visitInt(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#idExpr.
	visitIdExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}