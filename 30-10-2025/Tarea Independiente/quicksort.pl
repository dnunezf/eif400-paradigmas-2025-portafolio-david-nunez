% quicksort divides the list by choosing (arbitrary) the first element (pivot) and using this element to
% split the list into Left and Right. Left has all the elements smaller than the pivot. Right has all the elements
% larger than the pivot. [Left, pivot, Right].

quicksort([], []).
quicksort([X|Xs], Ys) :-
    partition(Xs, X, Left, Right),
    quicksort(Left, Ls),
    quicksort(Right, Rs),
    append(Ls, [X|Rs], Ys).

partition([], _, [], []).
partition([X|Xs], Y, [X|Ls], Rs) :-
    X =< Y,
    partition(Xs, Y, Ls, Rs).
partition([X|Xs], Y, Ls, [X|Rs]) :-
    X > Y,
    partition(Xs, Y, Ls, Rs).

append([], Ys, Ys).
append([X|Xs], Ys, [X|Zs]) :-
    append(Xs, Ys, Zs).

% quicksort(Xs, Ys) sorts list Xs into ascending order list Ys (or Ys is an ordered permutation of Xs).
% Ys is a sorted [X|Xs] where Left and Right is a result of partitioning Xs by X, Ls and Rs are the sorted
% Left and Right recursively, and Ys is the result of appending [X|Rs] to Ls.
% partitioning[X|Xs] with Y gives list Ls (left) and Rs (right), if X is less than or equal Y and partitioning
% Xs with Y gives Ls and Rs.
% Base case is the empty list. 

test :-
    quicksort([3,1,4,1,5,9,2,6], Sorted),
    writeln(Sorted).

:- initialization(test).