% cartesian(A, B, AxB)
% calcula el producto cartesiano de dos listas A y B
% devuelve en AxB una lista de pares [a,b]

% Caso base: si la primera lista esta vacia, el resultado lo esta
cartesian([], _, []).
% Caso recursivo: genera todos los pares con el primer elemento A,
% luego combina con los pares generados del resto As
cartesian([A | As], B, R) :-
    pair_with(A, B, Pairs), 
    cartesian(As, B, Rest),
    append(Pairs, Rest, R). % une ambas listas

% pair_with(A, B, Pairs) genera una lista de pares [A, b]

% Caso base, sin elementos en B no hay pares
pair_with(_, [], []).
% Caso recursivo: crea el par [A, B] y continua con el resto
pair_with(A, [B | Bs], [[A, B] | R]) :-
    pair_with(A, Bs, R).