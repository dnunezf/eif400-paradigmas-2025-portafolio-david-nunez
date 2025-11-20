% map(+Goal, +ListIn, -ListOut)
% Aplica Goal a cada elemento de ListIn, produciendo ListOut.
map(_, [], []). % caso base, lista vacia produce lista vacia
map(G, [X|Xs], [Y|Ys]) :- % aplica Goal a la cabeza y recursivamente al resto
    call(G, X, Y),
    map(G, Xs, Ys).


% predicado para las pruebas: duplica un numero
double(X, Y) :-
    Y is X * 2.

% Ejemplo de uso:
:- writeln('prueba map casero'),
   map(double, [1,2,3,4], R1),
   writeln(R1).