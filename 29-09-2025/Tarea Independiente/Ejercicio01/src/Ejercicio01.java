// Punto 5: Convertir un Person en Tuple<String, Integer> usando Pattern-Matching en Switch

import java.util.function.*;

public class Ejercicio01 {
    // record generico que almacena dos valores de tipo arbitrario
    public record Tuple<X, Y> (X x, Y y) {}
    // recorde que representa una persona con nomre y edad
    public record Person(String name, int age) {}

    // convierte un objeto en una tupla (nombre, edad) si es de tipo Person. Usamos PM en Switch
    public static Tuple<String, Integer> personToTuple(Object p) {
        return switch (p) {
            case Person(var name, var age) -> new Tuple<>(name, age);
            default -> throw new RuntimeException("not a person");
        };
    }

    public static void main(String[] args) {
        // Instanciacion de prueba
        var p = new Person("David", 21);

        // Conversion aplicando PM
        var t1 = personToTuple(p);
        System.out.println("t1 = (" + t1.x() + ", " +  t1.y() + ")");

        // Equivalente pero en lambda function
        Function<Person, Tuple<String, Integer>> f = x -> new Tuple<>(x.name(), x.age());
        var t2 = f.apply(p);
        System.out.println("t2 = (" + t2.x() + ", " +  t2.y() + ")");
    }
}
