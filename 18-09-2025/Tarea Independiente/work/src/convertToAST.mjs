
import antlr4 from 'antlr4'

import ExprLexer from '../generated/ExprLexer.js'
import ExprParser from '../generated/ExprParser.js'

import AstBuilder from './AstBuilder.mjs'

function parseToAst(text) {
	
  const input = new antlr4.InputStream(text)
  const lexer = new ExprLexer(input)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new ExprParser(tokens)
  parser.buildParseTrees = true

  const tree = parser.prog()
  const builder = new AstBuilder()
  return builder.visit(tree)
}

function test(){
	const line = "1+2--3\n-((3*4+5))\n"
	console.log(`Testing convertToAST with line:\n ${line}`)

	const ast = parseToAst(line)
	console.log("ast.toString:", ast.toString())
}
test()
