public class main {
    /*T extends Comparable<? super T> permite que T use compareTo, para compararse con su tipo o super-tipos.*/
    public static <T extends Comparable<? super T>> T max(T a, T b) {
        /*compareTo devuelve:
         * 1. Un numero positivo si a > b
         * 2. Un cero si a == b
         * 3. Un numero negativo si a < b*/
        return (a.compareTo(b) > 0) ? a : b;
    }

    public static void main(String[] args) {
        Integer x = 5, y = 10;
        System.out.println(max(x, y));

        Double a = 666.5, b = 665.8;
        System.out.println(max(a, b));
    }
}
