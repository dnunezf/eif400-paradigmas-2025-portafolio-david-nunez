import java.util.function.Function;

public class Ejercicio2C {
    // max_function utilizando Math.max
    public static Function<Integer, Integer> maxFunctionWithMath(Function<Integer, Integer> f, Function<Integer, Integer> g) {
        return x -> Math.max(f.apply(x), g.apply(x));
    }

    // max_function sin Math.max
    public static Function<Integer, Integer> maxFunctionWithoutMath(Function<Integer, Integer> f, Function<Integer, Integer> g) {
        return x -> f.apply(x) >= g.apply(x) ? f.apply(x) : g.apply(x);
    }

    public static void main(String[] args) {
        // construimos las funciones
        Function<Integer, Integer> f = x -> 2 * x;
        Function<Integer, Integer> g = x -> x + 5;

        // pruebas maxFunctionWithMath
        System.out.println(maxFunctionWithMath(f, g).apply(2));   // 7
        System.out.println(maxFunctionWithMath(f, g).apply(10));  // 20

        // prueba maxFunctionWithoutMath
        System.out.println(maxFunctionWithoutMath(f, g).apply(2));   // 7
        System.out.println(maxFunctionWithoutMath(f, g).apply(10));  // 20
    }
}
