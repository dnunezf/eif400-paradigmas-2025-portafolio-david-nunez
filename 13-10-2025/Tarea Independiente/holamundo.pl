/*    
    @author: david
*/

% Juan puede tener más de una cuenta bancaria (relación 1-N)
% María comparte algunas cuentas con Juan
person_account(juan, '200-ABC').
person_account(juan, '200-QWR').
person_account(juan, '100-ABC').
person_account(maria, '200-ABC').
person_account(maria, '100-RST').

/* Obtiene la lista de cuentas de la persona Person */
accountsOf(Person, Accounts) :-
    findall(tuple(Person, Account), person_account(Person, Account), Accounts).

/* Cuenta cuántas cuentas N tiene la Persona */
howManyAccounts(Person, N) :-
    accountsOf(Person, Accounts),
    length(Accounts, N).

/* Dos personas P y Q son coowners si comparten al menos una cuenta */
coowners(P, Q) :-
    person_account(P, A),
    person_account(Q, A),
    P \= Q.

/* Indicar el género de cada persona */
gender(juan, male).
gender(maria, female).

/* Indica el balance (monto) de cada cuenta */
balance('200-ABC', 1500).
balance('200-QWR', 3200).
balance('100-ABC', 800).
balance('100-RST', 1200).