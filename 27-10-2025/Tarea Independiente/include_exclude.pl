/*
 * include(+Goal, +ListIn, -ListOut)
 * Conserva los elementos de ListIn para los cuales Goal(X) tiene éxito.
 */
include(_, [], []). % caso base: lista vacia produce lista vacia
include(G, [X|Xs], [X|Ys]) :- % si el primer elemento X cumple la condicion
    call(G, X), !, % se llama al predicado Goal con X, y si tiene exito,
    include(G, Xs, Ys). % se sigue procesando el resto de la lista
include(G, [_|Xs], Ys) :- % si el primer elemento no cumple la condicion
    include(G, Xs, Ys). % se omite y se sigue con el resto

/*
 * exclude(+Goal, +ListIn, -ListOut)
 * Elimina los elementos de ListIn para los cuales Goal(X) tiene éxito.
 */
exclude(_, [], []). % caso base: lista vacia produce lista vacia
exclude(G, [X|Xs], Ys) :- % si el primer elemento X cumple la condicion
    call(G, X), !, % se llama al predicado Goal con X, y si tiene exito,
    exclude(G, Xs, Ys). % el elemento se descarta y continua.
exclude(G, [X|Xs], [X|Ys]) :- % si el primer elemento no cumple la condicion
    exclude(G, Xs, Ys). % se conserva y se sigue con el resto

% ejemplo de uso
par(X) :-
    0 is X mod 2.

:- writeln('--- pruebas ---'),
   include(par, [1,2,3,4,5,6], R1), writeln(R1),
   exclude(par, [1,2,3,4,5,6], R2), writeln(R2).