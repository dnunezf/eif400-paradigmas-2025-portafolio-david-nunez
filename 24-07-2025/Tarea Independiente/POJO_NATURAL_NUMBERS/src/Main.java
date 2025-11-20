public class Main {
    public static void main(String[] args) {
        Nat zero = new Zero();
        Nat one = new Succ(zero);
        Nat two = new Succ(one);
        Nat three = new Succ(two);

        System.out.println("cero: " + zero.toString() + " = " + zero.toInt());
        System.out.println("uno: " + one.toString() + " = " + one.toInt());
        System.out.println("dos: " + two.toString() + " = " + two.toInt());
        System.out.println("tres: " + three.toString() + " = " + three.toInt());
    }
}
