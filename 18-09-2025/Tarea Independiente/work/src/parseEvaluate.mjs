
import fs from 'node:fs'
import path from 'node:path'

import antlr4 from 'antlr4'

import {readAllFromStdin} from './util/stdIO.mjs'

import ExprLexer from '../generated/ExprLexer.js'
import ExprParser from '../generated/ExprParser.js'

import EvalVisitor from './EvalVisitor.mjs'

export function tokenize(text){
	const input = new antlr4.InputStream(text)
	const lexer = new ExprLexer(input)
	const tokens = new antlr4.CommonTokenStream(lexer)
	return tokens
}

export function parseText(text){
	const tokens = tokenize(text)
	const parser = new ExprParser(tokens)
	parser.buildParseTrees = true
	
	const antlrAst = parser.prog()
	return antlrAst
}

export function evaluateText(text) { 

  const antlrAst = parseText(text)
  
  const visitor = new EvalVisitor()

  const results = []
  for (const stat of antlrAst.stat()) {  
    const r = visitor.visit(stat)
    if (r != null) 
		results.push(r)
  }
  return results
}

async function main() {
	console.log('*** ParseEvaluate ***')
	const file = process.argv[2]
	
	let text
	if (file){
		console.log(`Parsing file: '${file}'`)
		text = fs.readFileSync(path.resolve(file), 'utf8')
	}else if (!process.stdin.isTTY) {
		text = await readAllFromStdin()
		}else {
			console.error('Use: node src/parseEvaluate.mjs <path_to_file>')
			process.exit(1)
		}
	const results = evaluateText(text)
	for (const r of results) 
		console.log(r)
}


main()