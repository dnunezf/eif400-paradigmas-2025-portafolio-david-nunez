%- size(+L, -N): N is the size of list L
% vamos a hacer este ejercicio con recursion
size([], 0). % un fact, base case
size([_ | R], N) :- % un fact, recursive case
    size(R, NR), % nombramos
    N is NR + 1. % quiero el numero, no el AST

%- add_list(+L, -S): S is the sum of the elements of list L of numbers
add_list([], 0). % un fact, base case
add_list([F | R], N) :- % un fact, recursive case
    add_list(R, NR), % nombramos
    N is NR + F. % quiero el numero, no el AST. Sumamos con F, 

% clausula
test_case_0 :-
    %
    L = [1, [2, 3], 4, [5]],
    size(L, NL),
    %writeln([L, 'tiene size:', NL]).
    format('List ~w has ~d elements~n', [L, NL]), % lo que quiere imprimir, y los parametros
    %
    M = [10, -20, 30, 20],
    add_list(M, SM),
    format('List ~w sum of elements is ~d ~n', [M, SM]). % lo que quiere imprimir, y los parametros

person_list_print(LP) :-
    member(person(name(First, Last), _Age, _Gender), LP),
    format('~s, ~s~n', [Last, First]),
    false.
person_list_print(_).

test_case_1 :-
    LP = [person(name(juan, perez), 20, male), person(name(maria, gomez), 10, female)],
    person_list_print(LP).

% go
:- test_case_0.
:- test_case_1.