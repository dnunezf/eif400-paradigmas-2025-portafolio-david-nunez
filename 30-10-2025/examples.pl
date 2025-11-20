% mapping
with(orange, juice).
with(egg, breakfast).
with(meat, sandwich).

% mapping(?G, +L, -M) ? means is a predicate
mapping(_, [], []). % base case
mapping(G, [F | R], [MF | MR]) :- 
    call(G, F, MF), % produce MF from F using G
    mapping(G, R, MR). % recursive call, produce MR from R using G

:-
    L = [meat, orange, orange, egg],
    mapping(with, L, M),
    format('>>> ~w -mapping(with)-> ~w~n', [L, M]). % M = [sandwich, juice, juice, breakfast]


% maximum(+L, -N): N is the greatest number of the list (not empty)

maximum([N], N).
maximum([FN, SN | RN], N) :-
    maximum([SN | RN], NR),
    N is max(FN, NR).

:-
    L = [80, 90, 95, 30],
    maximum(L, N),
    format('~w --maximum--> ~w~n', [L, N]).

