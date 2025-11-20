/*Representa el numero natural sucesor*/
public final class Succ implements Nat{
    private final Nat prev;

    public Succ(Nat prev) {
        this.prev = prev;
    }

    public Nat getPrev() {
        return prev;
    }

    @Override
    public Nat add(Nat other) {
        // Suma(n) + m = Suma(n + m)
        return new Succ(prev.add(other));
    }

    @Override
    public int toInt() {
        return 1 + prev.toInt();
    }

    @Override
    public String toString() {
        return String.valueOf(toInt());
    }
}
