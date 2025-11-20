% typer(+Expr, +Ctx, -Type) Type is the type of Expr in context Ctx. Recursive algoritm.
% it handles numbers, strings and booleans

% CONTEXT
context_find(ctx(Locals, Parent), X, TX) :-
    context_locals_find(Locals, X, TX) -> true ; context_find(Parent, X, TX).
context_locals_find(C, X, V) :- member([X, V], C).

% type_oper: defines the type signature of operations 
typer_oper(Oper, int >> (int >> int)) :-
    member(Oper, [+, *, -, /]).

type_primitive(any).
type_primitive(int).
type_primitive(string).
type_primitive(boolean).

% type_accept: checks if a type matches a type signature
type_accept(any, _).
type_accept(T, T) :-
    type_primitive(T).
type_accept(X >> Y, A >> B) :- % arrow types
    type_accept(A, X), % contravariant in the argument
    type_accept(Y, B). % covariant in the result

% base cases
typer(N, _, int) :-
    integer(N).
typer(S, _, string) :-
    string(S).
typer(B, _, boolean) :-
    member(B, [true, false]).
typer(X, C, TX) :-
    atom(X),
    context_find(C, X, TX).
typer(L + R, C, TP) :-
    typer(L, C, TL), % para tipar suma, tipamos lado izquierdo
    typer(R, C, TR), % tipamos lado derecho
    typer_oper(+, TOP), % obtenemos el tipo de operacion
    type_accept(TOP, TL >> (TR >> TP) ). 

test_typer_0 :-
    writeln('>>> Typer testing 0'),
    E = x,
    C = ctx([[x,int]], null),
    typer(E, C, TE) -> format('>>> ~w correctly types to ~w~n', [E, TE]) ; format('>>> ~w failed to type~n', [E]). 

test_typer_1 :-
    writeln('>>> Typer testing 1'),
    E = 666,
    C = ctx([[x,int]], null),
    typer(E, C, TE) -> format('>>> ~w correctly types to ~w~n', [E, TE]) ; format('>>> ~w failed to type~n', [E]). 

test_typer_2 :-
    writeln('>>> Typer testing 2'),
    E = true,
    C = ctx([], null),
    typer(E, C, TE) -> format('>>> ~w correctly types to ~w~n', [E, TE]) ; format('>>> ~w failed to type~n', [E]). 

test_typer_3 :-
    writeln('>>> Typer testing 3'),
    E = x + 666,
    C = ctx([[x, int]], null),
    typer(E, C, TE) -> format('>>> ~w correctly types to ~w~n', [E, TE]) ; format('>>> ~w failed to type~n', [E]). 

:-
    test_typer_0,
    test_typer_1,
    test_typer_2,
    test_typer_3.