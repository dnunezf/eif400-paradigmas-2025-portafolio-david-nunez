import java.util.function.Function;

public class Ejercicio2B
{
    // add: suma de funciones
    public static Function<Integer, Integer> add(Function<Integer, Integer> f, Function<Integer, Integer> g) {
        return x -> f.apply(x) + g.apply(x);
    }

    // zero: elemento neutro
    public static Function<Integer, Integer> zero = x -> 0;

    public static void main(String[] args) {
        // creamos las funciones
        Function<Integer, Integer> f = x -> 2 * x;
        Function<Integer, Integer> g = x -> x + 1;

        // prueba
        System.out.println(add(zero, f).apply(5)); // 10
        System.out.println(add(f, zero).apply(5)); // 10
        System.out.println(add(zero, zero).apply(5)); // 0
    }
}
