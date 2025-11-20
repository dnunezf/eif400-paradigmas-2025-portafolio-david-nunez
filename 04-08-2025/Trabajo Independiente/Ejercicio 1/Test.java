import static paquete1.A.value;
import static paquete2.B.value;

public class Test {
    public static void main(String[] args) {
        System.out.println(value); // Aqui se genera la ambiguedad
    }
}
