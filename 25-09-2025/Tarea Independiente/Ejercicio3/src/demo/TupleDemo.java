package demo;

// Tuple generico de dos elementos
record Tuple<X, Y>(X x, Y y) { }

public class TupleDemo {
    public static void main(String[] args) {
        // EJEMPLO 1: String e Integer
        var manzana_peso_100 = new Tuple<String, Integer>("manzana",100);
        System.out.println("El peso de la " + manzana_peso_100.x() + " es: " + manzana_peso_100.y());

        // EJEMPLO 2: Double y Double
        var longitud_latitud_Heredia = new Tuple<Double, Double>(9.99872, -84.11587);
        System.out.println("Coordenadas Heredia: (" + longitud_latitud_Heredia.x() + ", " + longitud_latitud_Heredia.y() + ")");
    }
}
