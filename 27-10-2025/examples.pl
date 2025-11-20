person(juan, 25, male).
person(jose, 35, male).
person(pedro, 15, male).
person(maria, 50, female).
person(karla, 10, female).
person(ana, 12, female).

% forma sin metapredicado:
person_print(N, A, G) :-
        format('>>> ~s ~d ~s~n', [N, A, G]).

person_printall :-
    person(N, A, G),
    person_print(N, A, G),
    fail.
person_printall. % equivale a colocar (),fail;true.

:-
    writeln('test printall_1:'),
    person_printall,
    nl.

% forma con metapredicado forall():
person_printall2 :-
    forall(
        person(N, A, G),
        person_print(N, A, G)
    ).

:-
    writeln('test printall_2:'),
    person_printall2,
    nl.

person_printall_gender(Gender) :-
    forall(
        person(N, A, Gender),
        person_print(N, A, Gender)
    ).

:-
    writeln('test printall_gender:'),
    person_printall_gender(female),
    nl.

% predicado que imprima la lista de personas (forall, porque ya me dan la lista (LP))
person_print_list(LP) :-
    forall(
        member(person(N, A, G), LP), % para cada miembro de la lista
        person_print(N, A, G) % imprimo sus datos
    ).

foo(F, X) :-
    call(F, X).

:-
    writeln('test call:'),
    foo(writeln, 666),
    nl.

nein(G) :-
    call(G),
    !,
    fail.
nein(_).

/*
output nein:

?- nein(1 = 2).
true.

?- nein(1 = 1).
false.
*/