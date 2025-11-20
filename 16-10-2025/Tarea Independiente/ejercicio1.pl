% Mi primer intento

/*    
    @author: david
*/

% Juan puede tener mas de una cuenta bancaria (Relacion 1-N)
% Maria tiene la misma cuenta de Juan
% juan = atomo
person_account(juan, '200-ABC').
person_account(juan, '200-QWR').
person_account(juan, '100-ABC').
person_account(maria, '200-ABC').
person_account(maria, '100-RST').

/*
select columns from table where filter (condition)
P = Persona
Accs = Lista de cuentas
+ entran datos, - salen datos, ? significa entrada/salida
*/
%- accounts_of(+P, -Accs)
accounts_of(P, Accs) :-
    findall(Acc, person_account(P, Acc), Accs).

/* test case 0
   'juan' puede ir o no en ''
*/
test_case_0 :- 
    writeln('*** test_case_0 ***'),
    P = 'juan',    
    accounts_of(P, Accs),
    writeln(Accs).

/* main, aqui probamos los casos de prueba (le llamamos main pero puede llamarse de otra forma) */
main :-
    test_case_0.

:- main.

/*
dnunezf@dnunezf-IdeaPad-5-15ITL05:/media/dnunezf/David/BACHILLERATO INGENIERÍA EN SISTEMAS DE LA INFORMACIÓN/CICLO II 2025/Paradigmas de Programación/16-10-2025$ swipl -s holamundo.pl -q -t halt
*** test_case_0 ***
[200-ABC,200-QWR,100-ABC]
*/

/*Ejercicio 01 tarea independiente 16-10-2025*/

% a) member + writeln + false (fail-driven loop)
accounts_print_a(P) :-
    accounts_of(P, Accs), % busca todas las cuentas de la persona P y las guarda en la lista Accs
    member(Acc, Accs), % toma una cuenta (Acc) de la lista, una por una
    writeln(Acc), % imprime esa cuenta
    false; % provoca backtracking: obliga a Prolog a volver a member y tomar otra cuenta
    true. % cuando ya no queden mas cuentas, termina correctamente

% b) usando forall
accounts_print_b(P) :-
    accounts_of(P, Accs),
    forall(member(Acc, Accs), writeln(Acc)). % Para cada Acc en Accs, ejecuta writeln(Acc).