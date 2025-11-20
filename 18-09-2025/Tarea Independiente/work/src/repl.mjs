
import fs from 'node:fs'
import path from 'node:path'
import antlr4 from 'antlr4'

import readline from 'node:readline'

import {readAllFromStdin} from './util/stdIO.mjs'

import ExprLexer from '../generated/ExprLexer.js'
import ExprParser from '../generated/ExprParser.js'

import AstBuilder from './AstBuilder.mjs'
import EvalAst from './EvalAst.mjs'

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

function evaluateText(text) {
  const ast = parseToAst(text)
  const evaluator = new EvalAst()
  return evaluator.eval(ast)
}


function runRepl() {
	
  console.log("*** Expresso REPL (enter '.exit' to end session) ***")
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  })
  
  rl.prompt()

  rl.on('line', line => {
    if (line.trim() === '.exit') {
      rl.close()
      return
    }
    try {
      const result = evaluateText(line + '\n')
      if (Array.isArray(result)) {
        for (const r of result) 
			if (r != null) 
			   console.log(r);
      } else{
        console.log(result)
      }
    } catch (e){
      console.error("Error:", e.message)
    }
    rl.prompt()
  })
}

const showResults = results => results.filter( r => r != null )
                                      .forEach(console.log);

async function main() {
  const file = process.argv[2]
  if (file) {
	console.log(`*** Reading from file ${file} ***`)
    const text = fs.readFileSync(path.resolve(file), 'utf8')
    showResults(evaluateText(text))
  } else if (!process.stdin.isTTY) {
    const text = await readAllFromStdin()
    const results = evaluateText(text)
    showResults(evaluateText(text))
  } else {
    runRepl()
  }
}

main()
