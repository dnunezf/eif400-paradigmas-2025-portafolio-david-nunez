% if_then_else(+Cond, +Then, +Else)
% Ejecuta Then si Cond tiene exito una vez, de lo contrario ejecuta Else.
if_then_else(C, T, _E) :-
    call(C),
    !,
    call(T).
if_then_else(_, _, E) :-
    call(E).