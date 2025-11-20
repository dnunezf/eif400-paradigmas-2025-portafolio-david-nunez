/*Representa el numero 0*/

public final class Zero implements Nat {

    public Zero() {

    }

    @Override
    public int toInt() {
        return 0;
    }

    @Override
    public String toString() {
        return "cero";
    }
}
