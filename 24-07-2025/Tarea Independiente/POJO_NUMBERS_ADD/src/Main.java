public class Main {
    public static void main(String[] args) {
        Nat zero = new Zero();
        Nat one = new Succ(zero);
        Nat two = new Succ(one);
        Nat three = new Succ(two);

        Nat suma1 = two.add(three); // 2 + 3
        Nat suma2 = three.add(three); // 3 + 3
        Nat suma3 = three.add(zero); // 3 + 0

        System.out.println(suma1.toString());
        System.out.println(suma2.toString());
        System.out.println(suma3.toString());
    }
}
