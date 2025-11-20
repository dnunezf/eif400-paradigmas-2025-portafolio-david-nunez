/*Predicado que calcule el maximo de dos numeros*/
%- maximum(+X, +Y, -Z) : Z is the maximum between number X and Y
maximum(X, Y, X) :-
    X > Y, !. % ya encontramos el maximo, no hay otra posibilidad (!).
maximum(_, Y, Y). % se sabe que el maximo debe ser Y