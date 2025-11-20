/*Representa el sucesor de un numero natural*/
public final class Succ implements Nat {
    private final Nat prev;

    public Succ(Nat prev) {
        this.prev = prev;
    }

    public Nat getPrev() {
        return prev;
    }

    @Override
    public int toInt() {
        return 1 + prev.toInt();
    }

    @Override
    public String toString() {
        return "Sucesor(" + prev.toString() + ")";
    }
}
