%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% eval(+Expr, +Context, -Result) : Result is the value of Expr using memory Context
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/*
 Context is a list of pairs [X, V]
 Example:
 [[x, 1], [y, 3]]
*/
context_find(C, X, V) :- member([X, V], C).

eval(N, _, N) :- number(N).
eval(X, C, V) :- 
    atom(X), 
    context_find(C, X, V)
.
eval( E1 + E2, C, V) :-
    eval(E1, C, V1),
	eval(E2, C, V2),
	V is V1 + V2
.

eval( -E , C, V) :-
    eval(E, C, VE),
	V is -VE
.

:-
    format('>>> Eval testing ~d~n', [0]),
	E = 10 + x + -y,
	C = [[x, -5], [y, 2]],
	eval(E, C, V),
	format('>>> ~w -{~w}-> ~d~n', [E, C, V])
.
   
