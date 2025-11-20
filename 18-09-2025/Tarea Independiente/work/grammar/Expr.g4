grammar Expr;


// Punto de entrada: cero o más sentencias terminadas por NEWLINE (parser)
prog : stat* EOF ;


// Una sentencia puede ser una expresión -> imprimir, o línea vacía (parser)
stat : expr NEWLINE         # printExpr
       | NEWLINE            # blank
;


// Expresiones con precedencia y unario '-' (parser)
expr
  : '-' expr                                # unaryMinus
  | <assoc=right> expr '?' expr ':' expr    # ternary
  | expr op=('*'|'/') expr                  # MulDiv
  | expr op=('+'|'-') expr                  # AddSub
  | LET ID ASSIGN expr IN expr              # letExpr
  | ID                                      # idExpr
  | INT                                     # int
  | FLOAT                                   # float
  | '(' expr ')'                            # parens
  ;


// LEXER
fragment DIGITS : [0-9]+ ;

// LEXER
FLOAT 
  : DIGITS '.' DIGITS? ( [eE] [+\-]? DIGITS )?
  | '.' DIGITS         ( [eE] [+\-]? DIGITS )?
  | DIGITS [eE] [+\-]? DIGITS
  ;

// LEXER
INT     : DIGITS ;
LET     : 'let' ;
IN      : 'in' ;
ASSIGN  : '=' ;
ID      : [a-zA-Z_][a-zA-Z_0-9]* ; //acepta nombres tipo x, abc, total1, _tmp, my_var2.
NEWLINE : ('\r'? '\n') ;
WS      : [ \t]+ -> skip ;