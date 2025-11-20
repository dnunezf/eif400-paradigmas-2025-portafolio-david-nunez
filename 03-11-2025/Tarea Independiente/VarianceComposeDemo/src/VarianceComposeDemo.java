import java.util.function.Function;

class Thing {}                  // supertipo mas general
class Fruit extends Thing {}    // intermedio
class Apple extends Fruit {}    // subtipo mas especifico

public class VarianceComposeDemo
{
    public static void main(String[] args) {
        // this: Function<T, R> con T = Fruit, R = String
        Function<Fruit, String> fruitToReport =
                f -> "OK: recibi un " + f.getClass().getSimpleName() + " y regreso String";

        // before: Function<? super V, ? extends T>
        // Elegimos V = Apple, T = Fruit
        // Contravarianza en el argumento: acepto algo MAS GENERAL que Apple -> Thing
        // Covarianza en el retorno: produzco algo MAS ESPECIFICO que Fruit -> Apple
        Function<Thing, Apple> thingToApple =
                f -> new Apple();

        // compose: (fruitToReport * thingToApple) : Function<V,R> -> Function<Thing, String>
        Function<Thing, String> pipeline = fruitToReport.compose(thingToApple);

        // Demostracion 1: paso un Thing; before lo consume (contravariante) y produce Apple (covariante)
        System.out.println(pipeline.apply(new Thing()));

        // Demostracion 2: tambien funciona con subtipos de Thing
        System.out.println(pipeline.apply(new Fruit()));
        System.out.println(pipeline.apply(new Apple()));

        // Caso alterno: before que acepta exactamente Apple y devuelve un subtipo de Fruit (Apple)
        Function<Apple, Apple> idApple =
                a -> a;
        Function<Apple, String> applePipeline = fruitToReport.compose(idApple);
        System.out.println(applePipeline.apply(new Apple()));
    }
}