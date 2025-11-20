/*Interfaz que simula los numeros naturales*/
public interface Nat {
    Nat add(Nat other); // Esta es nuestra suma recursiva
    int toInt(); // Conversion a Int
    String toString(); // Texto decimal
}
