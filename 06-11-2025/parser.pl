% blanks(+I, -O): I and O being lists, O is the list I skipping the prefix white spaces
/*
I = [32, 32, 32, 97, 98, 99, 32, 61, 32]
after blanks:
O = [97, 98, 99, 32, 61, 32]
*/

% whitespaces %

ws(C) :- member(C, [32,10,9,13]). % space, newline, tab, carriage return 
                                  % member(C, [0' , 0'\n, 0'\t, 0'\r]).

blanks([C | RC], O) :-
    ws(C), !, % preguntamos si el caracter es un espacion en blanco
    blanks(RC, O). % si es asi, seguimos con el resto de la lista
blanks(I, I). % si no hay espacios en blanco, devolvemos la lista tal cual

% token %
token(Token, Codes, RestCodes) :-
    blanks(Codes, CodesWithoutBlanks),
    id_token(Token, CodesWithoutBlanks, RestCodes).

% letters %
id_start(C) :- code_type(C, alpha).
id_continue(C) :- code_type(C, alnum).

id_token(Id, [C | RC], O) :- 
    id_start(C),
    id_rest(IdRest, RC, O),
    atom_codes(Id, [C | IdRest]).

id_rest([C | IdRest], [C | RC], O) :-
    id_continue(C), !,
    id_rest(IdRest, RC, O).
id_rest([], I, I).

% 

test_tokenizer_0 :-
    writeln('*** test_tokenizer_0 ***'),
    Text = '   \n \tabc   123',
    atom_codes(Text, TextCodes),
    blanks(TextCodes, RestTextCodes),
    atom_codes(RestText, RestTextCodes),
    format('Text="~w" --blanks--> Rest="~w"~n ', [Text, RestText]).

test_tokenizer_1 :-
    writeln('*** test_tokenizer_1 ***'),
    Text = 'abc   123',
    atom_codes(Text, TextCodes),
    blanks(TextCodes, RestTextCodes),
    atom_codes(RestText, RestTextCodes),
    format('Text="~w" --blanks--> Rest="~w"~n ', [Text, RestText]).

test_tokenizer_2 :-
    writeln('*** test_tokenizer_1 ***'),
    Text = '    abc   123',
    atom_codes(Text, TextCodes),
    token(Token, TextCodes, RestTextCodes),
    atom_codes(RestText, RestTextCodes),
    format('Text="~w" --token--> Token=~w Rest="~w"~n ', [Text, Token, RestText]).

:-
    test_tokenizer_0,
    test_tokenizer_1,
    test_tokenizer_2.