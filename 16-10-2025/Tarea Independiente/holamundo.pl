/*
    @author: david
    holamundo.pl (versión nueva con person(name(First,Last), Gender, Age))
*/

% Personas + Cuentas (antes atomos, ahora terminos)
person_account(person(name(juan, perez), male, 20), '200-ABC').
person_account(person(name(juan, perez), male, 20), '200-QWR').
person_account(person(name(juan, perez), male, 20), '100-ABC').
person_account(person(name(maria, lopez), female, 16), '200-ABC').
person_account(person(name(maria, lopez), female, 16), '100-RST').

% Getters (facts, reglas puras)
person_name(person(Name, _, _), Name).
person_first_name(person(name(First, _), _, _), First).
person_last_name(person(name(_, Last), _, _), Last).
person_age(person(_, _, Age), Age).
person_gender(person(_, Gender, _), Gender).

/*
    select columns from table where filter (condition)
    P = Persona (term person/3)
    Accs = Lista de cuentas
    + entran datos, - salen datos, ? entrada/salida
*/
%- accounts_of(+P, -Accs)
accounts_of(P, Accs) :-
    findall(Acc, person_account(P, Acc), Accs).

/*
    account_invalid_age(-InvAccs)
    Construye todos los inválidos por minoría de edad y los ordena por apellido.
    Forma: invalid(name(Last, First), Age, Acc)
*/
account_invalid_age(InvAccs) :-
    % genera una lista raw con todas las cuentas invalidas
    findall(
        invalid(name(Last, First), Age, Acc), % Estructura de cada elemento
        ( person_account(P, Acc),             % Busca persona y cuenta
          person_age(P, Age),                 % Obtiene edad
          Age < 18,                           % Filtro: menor de edad
          person_first_name(P, First),        % Obtiene nombre de pila
          person_last_name(P, Last)           % Obtiene apellido
        ),
        Raw
    ),
    sort(Raw, InvAccs). % Ordena alfabéticamente y elimina duplicados
