% eval(Expr, Context, Result) : Result is the value of evaluating expression Expr

context_find(C, X, V) :-
    member([X, V], C).
is_binary(E, Oper, L, R) :-
    E =.. [Oper, L, R],
    member(Oper, [+, -, *, /]).

% base case
eval(N, _, N) :- 
    number(N). % check if N is a number
eval(X, C, V) :-
    atom(X), 
    context_find(C, X, V). 
eval(E, C, Result) :-
    is_binary(E, Oper, L, R), % check if E is a binary expression
    eval(L, C, RL),
    eval(R, C, RR),
    ER =.. [Oper, RL, RR],
    Result is ER.
eval(- E, C, R) :-
    eval(E, C, VE),
    R is - VE. % change the sign of VE

:-
    E = x + 10 + -y,
    C = [[x, 20], [y, 30]], % Memory/Context/Environment
    eval(E, C, R),
    format('>>> ~w --eval(~w)--> ~w', [E, C, R]).