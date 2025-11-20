% solve(-X, -Y, +Z) genera todos los pares de enteros no negativos (X, Y)
% tales que X + Y = Z.

solve(X, Y, Z) :-
    integer(Z), % asegura que Z sea entero 
    Z >= 0, % asegura que Z sea positivo
    solve_aux(0, X, Y, Z). % comienza la busqueda con X=0

% Caso base: Incrementa X desde 0 hasta Z, calculando Y = Z - X.
solve_aux(Current, X, Y, Z) :-
    Current =< Z, % mientras no se sobrepase Z
    X = Current, % asigna el valor actual a X
    Y is Z - Current. % calcula Y

solve_aux(Current, X, Y, Z) :-
    Current < Z, % si aun no alcanza Z
    Next is Current + 1, % incrementa X
    solve_aux(Next, X, Y, Z). % continua generando soluciones

test_solve :-
    Z = 5,
    forall(solve(X, Y, Z),
           format('X=~d, Y=~d, X+Y=~d~n', [X, Y, Z])
    ).

:- test_solve.