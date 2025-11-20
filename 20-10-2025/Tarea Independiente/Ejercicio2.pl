% indexof(Element, List, Index)
indexof(E, [E | _], 0). % el elemento E esta al inicio, index = 0
indexof(E, [_ | R], I) :- % descarta el primer elemento, y busca en el resto
    indexof(E, R, I1),
    I is I1 + 1.