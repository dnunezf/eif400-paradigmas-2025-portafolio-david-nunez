// Generated from grammar/Expr.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprListener from './ExprListener.js';
import ExprVisitor from './ExprVisitor.js';

const serializedATN = [4,1,16,57,2,0,7,0,2,1,7,1,2,2,7,2,1,0,5,0,8,8,0,10,
0,12,0,11,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,38,8,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,52,8,2,10,2,12,2,55,9,2,1,2,0,1,4,3,0,
2,4,0,2,1,0,4,5,2,0,1,1,6,6,63,0,9,1,0,0,0,2,18,1,0,0,0,4,37,1,0,0,0,6,8,
3,2,1,0,7,6,1,0,0,0,8,11,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,12,1,0,0,0,
11,9,1,0,0,0,12,13,5,0,0,1,13,1,1,0,0,0,14,15,3,4,2,0,15,16,5,15,0,0,16,
19,1,0,0,0,17,19,5,15,0,0,18,14,1,0,0,0,18,17,1,0,0,0,19,3,1,0,0,0,20,21,
6,2,-1,0,21,22,5,1,0,0,22,38,3,4,2,9,23,24,5,11,0,0,24,25,5,14,0,0,25,26,
5,13,0,0,26,27,3,4,2,0,27,28,5,12,0,0,28,29,3,4,2,5,29,38,1,0,0,0,30,38,
5,14,0,0,31,38,5,10,0,0,32,38,5,9,0,0,33,34,5,7,0,0,34,35,3,4,2,0,35,36,
5,8,0,0,36,38,1,0,0,0,37,20,1,0,0,0,37,23,1,0,0,0,37,30,1,0,0,0,37,31,1,
0,0,0,37,32,1,0,0,0,37,33,1,0,0,0,38,53,1,0,0,0,39,40,10,8,0,0,40,41,5,2,
0,0,41,42,3,4,2,0,42,43,5,3,0,0,43,44,3,4,2,8,44,52,1,0,0,0,45,46,10,7,0,
0,46,47,7,0,0,0,47,52,3,4,2,8,48,49,10,6,0,0,49,50,7,1,0,0,50,52,3,4,2,7,
51,39,1,0,0,0,51,45,1,0,0,0,51,48,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,
54,1,0,0,0,54,5,1,0,0,0,55,53,1,0,0,0,5,9,18,37,51,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExprParser extends antlr4.Parser {

    static grammarFileName = "Expr.g4";
    static literalNames = [ null, "'-'", "'?'", "':'", "'*'", "'/'", "'+'", 
                            "'('", "')'", null, null, "'let'", "'in'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "FLOAT", "INT", "LET", "IN", "ASSIGN", 
                             "ID", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprParser.ruleNames;
        this.literalNames = ExprParser.literalNames;
        this.symbolicNames = ExprParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExprParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 52866) !== 0)) {
	            this.state = 6;
	            this.stat();
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 12;
	        this.match(ExprParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExprParser.RULE_stat);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 7:
	        case 9:
	        case 10:
	        case 11:
	        case 14:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.expr(0);
	            this.state = 15;
	            this.match(ExprParser.NEWLINE);
	            break;
	        case 15:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.match(ExprParser.NEWLINE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new UnaryMinusContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 21;
	            this.match(ExprParser.T__0);
	            this.state = 22;
	            this.expr(9);
	            break;
	        case 11:
	            localctx = new LetExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 23;
	            this.match(ExprParser.LET);
	            this.state = 24;
	            this.match(ExprParser.ID);
	            this.state = 25;
	            this.match(ExprParser.ASSIGN);
	            this.state = 26;
	            this.expr(0);
	            this.state = 27;
	            this.match(ExprParser.IN);
	            this.state = 28;
	            this.expr(5);
	            break;
	        case 14:
	            localctx = new IdExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 30;
	            this.match(ExprParser.ID);
	            break;
	        case 10:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 31;
	            this.match(ExprParser.INT);
	            break;
	        case 9:
	            localctx = new FloatContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 32;
	            this.match(ExprParser.FLOAT);
	            break;
	        case 7:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 33;
	            this.match(ExprParser.T__6);
	            this.state = 34;
	            this.expr(0);
	            this.state = 35;
	            this.match(ExprParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 51;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TernaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 39;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 40;
	                    this.match(ExprParser.T__1);
	                    this.state = 41;
	                    this.expr(0);
	                    this.state = 42;
	                    this.match(ExprParser.T__2);
	                    this.state = 43;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 45;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 46;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 47;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 48;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 49;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===6)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 50;
	                    this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.T__7 = 8;
ExprParser.FLOAT = 9;
ExprParser.INT = 10;
ExprParser.LET = 11;
ExprParser.IN = 12;
ExprParser.ASSIGN = 13;
ExprParser.ID = 14;
ExprParser.NEWLINE = 15;
ExprParser.WS = 16;

ExprParser.RULE_prog = 0;
ExprParser.RULE_stat = 1;
ExprParser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(ExprParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(ExprParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterBlank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitBlank(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.BlankContext = BlankContext;

class PrintExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(ExprParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterPrintExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitPrintExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.PrintExprContext = PrintExprContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.AddSubContext = AddSubContext;

class UnaryMinusContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterUnaryMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitUnaryMinus(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitUnaryMinus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.UnaryMinusContext = UnaryMinusContext;

class FloatContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FLOAT() {
	    return this.getToken(ExprParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterFloat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitFloat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitFloat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.FloatContext = FloatContext;

class TernaryContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterTernary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitTernary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitTernary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.TernaryContext = TernaryContext;

class LetExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LET() {
	    return this.getToken(ExprParser.LET, 0);
	};

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(ExprParser.ASSIGN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	IN() {
	    return this.getToken(ExprParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterLetExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitLetExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitLetExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.LetExprContext = LetExprContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ExprParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.IntContext = IntContext;

class IdExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterIdExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitIdExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitIdExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ExprParser.IdExprContext = IdExprContext;


ExprParser.ProgContext = ProgContext; 
ExprParser.StatContext = StatContext; 
ExprParser.ExprContext = ExprContext; 
