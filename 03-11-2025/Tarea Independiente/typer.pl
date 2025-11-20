% typer(+Expr, +Ctx, -Type) Type is the type of Expr in context Ctx. Recursive algoritm.

% CONTEXTO %
context_find(null, _, _) :- fail.
context_find(ctx(Locals, Parent), X, TX) :-
    ( context_locals_find(Locals, X, TX) -> true ; context_find(Parent, X, TX) ).
context_locals_find(C, X, V) :- member([X, V], C).

% PRIMITIVOS Y SUBTIPADO %
type_primitive(any).
type_primitive(int).
type_primitive(double).
type_primitive(string).
type_primitive(boolean).

% int <: double %
type_accept(any, _).
type_accept(T, T) :- type_primitive(T).
type_accept(double, int). % un int es aceptable donde se espera un double
% arrow (contravariante en el argumento, covariante en el resultado) %
type_accept(X >> Y, A >> B) :-
    type_accept(A, X),
    type_accept(Y, B).

% CASOS BASE %
typer(N, _, int)     :- integer(N).
typer(F, _, double)  :- float(F).
typer(S, _, string)  :- string(S).
typer(B, _, boolean) :- member(B, [true,false]).
typer(X, C, TX)      :- atom(X), context_find(C, X, TX).

% OPERADORES %
% Binarios soportados: +, -, *, /, ** con promocion numero y caso especial para + con string
typer(L + R, C, string) :- % concatenacion de strings
    (typer(L, C, string) ; typer(R, C, string)),
    !.
typer(L + R, C, T) :-
    typer(L, C, TL),
    typer(R, C, TR),
    bin_numeric_result(+, TL, TR, T).

typer(L - R, C, T) :-
    typer(L,C,TL), typer(R,C,TR),
    bin_numeric_result(-, TL, TR, T).
typer(L * R, C, T) :-
    typer(L,C,TL), typer(R,C,TR),
    bin_numeric_result(*, TL, TR, T).
typer(L / R, C, T) :-
    typer(L,C,TL), typer(R,C,TR),
    bin_numeric_result(/, TL, TR, T).
typer(L ** R, C, T) :-
    typer(L,C,TL), typer(R,C,TR),
    bin_numeric_result(**, TL, TR, T).

% unario menos: -(Expr)
typer(-E, C, T) :-
    typer(E, C, TE),
    unary_numeric_result('-', TE, T).

% REGLAS DE TIPADO NUMERICO %
% solo tipos numericos validos para aritmetica
num_type(int).
num_type(double).

% promocion numerica
% - Si alguno es double, el resultado es double
% - Si ambos son int, el resultado es int
promote_numeric(T1, T2, double) :- (T1 == double ; T2 == double), !.
promote_numeric(int, int, int).

% resultado binario numerico con promocion; falla si no es numerico
bin_numeric_result(_, TL, TR, T) :-
    num_type(TL), num_type(TR),
    promote_numeric(TL, TR, T).

% resultado unario numerico; preserva el tipo
unary_numeric_result('-', T, T) :-
    num_type(T).

% -------------------- PRUEBAS --------------------
test_typer_0 :-
    writeln('>>> Typer testing 0'),
    E = x,
    C = ctx([[x,int]], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_1 :-
    writeln('>>> Typer testing 1'),
    E = 666,
    C = ctx([[x,int]], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_2 :-
    writeln('>>> Typer testing 2'),
    E = true,
    C = ctx([], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_3 :-
    writeln('>>> Typer testing 3 (+ int)'),
    E = x + 666,
    C = ctx([[x, int]], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_4 :-
    writeln('>>> Typer testing 4 (+ string concat)'),
    E = "hola" + 3,
    C = ctx([], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_5 :-
    writeln('>>> Typer testing 5 (* double promotion)'),
    E = 2.0 * 3,
    C = ctx([], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

test_typer_6 :-
    writeln('>>> Typer testing 6 (unary -)'),
    E = -(x + 666),
    C = ctx([[x,int]], null),
    (typer(E, C, TE) -> format('>>> ~w :: ~w~n', [E, TE]) ; format('>>> ~w failed~n', [E])).

:-  test_typer_0,
    test_typer_1,
    test_typer_2,
    test_typer_3,
    test_typer_4,
    test_typer_5,
    test_typer_6.