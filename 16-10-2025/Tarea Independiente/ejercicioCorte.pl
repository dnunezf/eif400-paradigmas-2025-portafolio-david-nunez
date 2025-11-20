/*
    Ejemplo de uso del predicado !

    cut (!) detiene el backtracking.
    Es decir, una vez que Prolog llega al corte,
    no volvera atras para probar otras opciones.

    Predicado: grade(+Score, -Result)
    Asigna una calificacion (Result) según la nota (Score).
*/

% Caso 1: si la nota es 90 o mas, es excelente.
grade(Score, excellent) :-
    Score >= 90, !.        % Corte: no se evaluan reglas siguientes.

% Caso 2: si la nota es 70 o mas, es aprobada.
grade(Score, pass) :-
    Score >= 70, !.        % Otro corte para detener al cumplir esta condicion.

% Caso 3: en cualquier otro caso, es reprobada.
grade(_, fail).

/*
    Cómo funciona paso a paso:

    ?- grade(95, R).
    1) Coincide con la primera regla (Score >= 90).
    2) Llega al ! -> corta las demás opciones.
    3) Resultado: R = excellent.

    ?- grade(75, R).
    1) Falla la primera (75 >= 90 -> falso).
    2) Pasa a la segunda (75 >= 70 -> verdadero).
    3) Llega al ! -> detiene busqueda.
    4) Resultado: R = pass.

    ?- grade(40, R).
    1) Falla las dos primeras.
    2) Solo queda la tercera.
    3) Resultado: R = fail.
*/