/*Representa el numero 0*/
public final class Zero implements Nat{
    public Zero() {

    }

    @Override
    public Nat add(Nat other) {
        /*0 + n = n*/
        return other;
    }

    @Override
    public int toInt() {
        return 0;
    }

    @Override
    public String toString() {
        /*Convierte un entero a su representacion en cadena*/
        return String.valueOf(toInt());
    }
}
