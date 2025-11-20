import ExprVisitor from "../generated/ExprVisitor.js";
import { Program, Num, BinaryOp, UnaryOp, PASS, TernaryOp, LetExpr, Id } from "./ast/ast.mjs";

export default class AstBuilder extends ExprVisitor {
  // prog: stat* EOF
  visitProg(ctx) {
    const stmts = ctx.stat().map((stat) => this.visit(stat));
    return new Program(...stmts.filter((x) => x !== null)); // controla si el usuario teclea enter sin nada, --undefined--
  }

  // printExpr: expr NEWLINE
  visitPrintExpr(ctx) {
    return this.visit(ctx.expr());
  }

  // blank: NEWLINE
  visitBlank() {
    return PASS;
  }

  // unaryMinus: '-' expr
  visitUnaryMinus(ctx) {
    return new UnaryOp("-", this.visit(ctx.expr()));
  }

  // MulDiv: expr op=('*'|'/') expr
  visitMulDiv(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return new BinaryOp(ctx.op.text, left, right);
  }

  // AddSub: expr op=('+'|'-') expr
  visitAddSub(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return new BinaryOp(ctx.op.text, left, right);
  }

  // int: INT
  visitInt(ctx) {
    return new Num(Number(ctx.getText()));
  }

  // float: FLOAT
  visitFloat(ctx) {
    return new Num(Number(ctx.getText()));
  }

  // ternary: expr '?' expr ':' expr
  visitTernary(ctx) {
    const c = this.visit(ctx.expr(0));
    const t = this.visit(ctx.expr(1));
    const e = this.visit(ctx.expr(2));
    return new TernaryOp(c, t, e);
  }

  // letExpr: LET ID ASSIGN expr IN expr
  visitLetExpr(ctx) {
    const name = ctx.ID().getText();
    const id = new Id(name);
    const val = this.visit(ctx.expr(0));
    const body = this.visit(ctx.expr(1));
    return new LetExpr(id, val, body);
  }

  // idExpr: ID
  visitIdExpr(ctx) {
    return new Id(ctx.ID().getText());
  }

  // parens: '(' expr ')'
  visitParens(ctx) {
    return this.visit(ctx.expr());
  }
}