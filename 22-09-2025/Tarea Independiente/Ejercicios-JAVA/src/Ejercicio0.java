import java.util.function.BiFunction;
import java.util.stream.Stream;

public class Ejercicio0 {
    @FunctionalInterface
    interface Checker {
        boolean checkItOut(Boolean b);
    }

    public static void main(String[] args) {
        // definimos foo
        BiFunction<Stream<Integer>, Checker, Stream<Boolean>> foo =
                (Stream<Integer> a, Checker f) ->
                        a.map(x -> x * x - 2 * x + 1 == 0)
                                .filter(r -> f.checkItOut(r));

        // ejemplo: lista de enteros
        Stream<Integer> numbers = Stream.of(1, 2, 3, 4, 5);

        // CHECKER que solo deja pasar true
        Checker cheker = r -> r;

        // aplicamos foo
        Stream<Boolean> result = foo.apply(numbers, cheker);

        // consumimos el stream
        result.forEach(System.out::println);
    }
}