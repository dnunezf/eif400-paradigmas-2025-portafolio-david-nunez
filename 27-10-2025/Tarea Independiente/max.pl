/*
    maximum(+List, -Max)
    Usa foldl para recorrer la lista y eoncontrar el máximo valor.
    Si la lista está vacía, falla.
*/

% Se usa el primer elemento como inicial del acumulador
maximum([H|T], M) :-
    foldl(max_acum, T, H, M).

/*
    max_acum(+Elem, +Acum, -NuevoAcum)
    Compara el elemento actual con el acumulador y guarda el mayor.
*/
max_acum(X, A, A) :- % Si el elemento es menor o igual al acumulador, se mantiene el acumulador
    X =< A,
    !.
max_acum(X, _, X). % si el elemento es mayor, el nuevo acumulador es el elemento

% ejemplo
:- writeln('--- prueba ---'),
   maximum([3,7,2,9,5], M1), writeln(M1),
   maximum([-10,-3,-50,-1], M2), writeln(M2),
   writeln('--- fin ---').