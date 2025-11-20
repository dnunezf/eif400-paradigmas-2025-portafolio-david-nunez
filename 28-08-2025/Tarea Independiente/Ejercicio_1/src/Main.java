import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.IntBinaryOperator;
import java.util.function.Supplier;

public class Main {
    public static void main(String[] args) {
        /*
        a) ??? foo = () -> 666
           print( foo.???() )
        * */
        Supplier<Integer> foo = () -> 666;
        System.out.println(foo.get());

        /*
        * ??? goo = x -> print(x)
          goo.???(666)
        * */
        Consumer<Integer> goo = x -> System.out.println(x); // NOTA: PUEDO COLOCAR IntConsumer insteadOf Consumer
        goo.accept(666);

        /*
        * ??? hoo = (x, y) -> x*x - 2*x*y + y*y
          print( hoo.???(666, 0) )
        * */
        IntBinaryOperator hoo = (x, y) -> x*x - 2*x*y + y*y;
        System.out.println(hoo.applyAsInt(666, 0));

        /*Alternativa ejercicio c*/
        BiFunction<Integer, Integer, Integer> hoo2 = (x, y) -> x*x - 2*x*y + y*y;
        System.out.println(hoo2.apply(666, 0));
    }
}
