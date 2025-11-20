// Implementa el factorial de un numero entero positivo (utilizando Streams + reduce).
import java.util.stream.IntStream;

public class Ejercicio1 {

    public static long factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("n must be >= 0");
        }

        // Genera el rango [1, n] inclusive como stream de enteros, y reduce multiplicando cada elemento. Valor inicial
        // de 1
        return IntStream.rangeClosed(1, n)
                .reduce(1, (a, b) -> a * b);
    }

    public static void main(String[] args) {
        System.out.println("0! = " + factorial(0));
        System.out.println("1! = " + factorial(1));

        System.out.println("5! = " + factorial(5));
        System.out.println("10! = " + factorial(10)); 
    }
}
