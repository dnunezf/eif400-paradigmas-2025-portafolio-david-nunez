% begins(+L, -S, +N)
% Genera todas las sublistas S que son prefijos de L, y cuya longitud es al menos N.

begins(L, S, N) :-
    append(S, _, L), % S debe ser prefijo de L
    length(S, Len), % mide la longitud de S
    Len >= N. % aseguramos longitud minima

% Prueba del predicado 

test_begings :-
   Min = 3,
   L = [a,b,c,d,e,f],
   forall(begins(L, S, Min),
          ( length(S, N),
            format('Sublist=~w. Length= ~d >= Min= ~d~n', [S, N, Min])
          )
   ).

:- test_begings.