% range(+A, +B, -L)
% Genera una lista L con todos los enteros desde A hasta B-1
% Ejemplo: ?- range(5,10,L). -> L = [5,6,7,8,9].

range(A, B, L) :-
    A < B, % verifica que A menor que B
    range_aux(A, B, L). % llama al predicado auxiliar recursivo

% Caso base: Cuando A alcanza o supera B, ya no hay mas numeros que agregar.
% La lista resultante es vacia.
range_aux(A, B, []) :-
    A >= B,
    !.

% Caso recursivo: Si A menor que B, se agrega A al inicio de la lista, y se llama
% nuevamente con A+1.
range_aux(A, B, [A|R]) :-
    A < B,
    A1 is A + 1, % calcula siguiente numero
    range_aux(A1, B, R). % continua construyendo la lista

test_range :-
    A = 5,
    B = 10,
    forall( (range(A, B, R), member(N, R)),  
            format('~d <= ~d <= ~d~n', [A, N, B])  
          ).

:- test_range.
