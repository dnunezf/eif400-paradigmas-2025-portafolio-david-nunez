package paradigms.utils.test;

import paradigms.operations.Operator;
import paradigms.operations.Stack;

public class TestStack {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        System.out.println("=== Test de pila con operaciones ===");

        //Push de algunos elementos
        stack.push(10);
        stack.push(5);
        System.out.println("Pila después de push(10), push(5): tamaño = " + stack.size());

        //Operacion de suma (10 + 5)
        Integer resultado = stack.operate(Operator.ADD);
        System.out.println("Resultado de ADD: " + resultado);

        // Push de más elementos
        stack.push(3);
        stack.push(2);
        System.out.println("Pila después de push(3), push(2): tamaño = " + stack.size());

        // Multiplicacion (3 * 2)
        resultado = stack.operate(Operator.MULT);
        System.out.println("Resultado de MULT: " + resultado);

        // Resta (15 - 6)
        resultado = stack.operate(Operator.MINUS);
        System.out.println("Resultado de MINUS: " + resultado);

        System.out.println("Top final de la pila: " + stack.top());

        // Probamos division entre cero
        try {
            stack.push(0);
            stack.operate(Operator.DIV);
        }
        catch (Exception e) {
            System.out.println("Division entre cero: " + e.getMessage());
        }

        // Probamos operar sin suficientes elementos
        try{
            stack = new Stack<>();
            stack.push(1);
            stack.operate(Operator.ADD);
        } catch (Exception e) {
            System.out.println("Falta de operandos: " + e.getMessage());
        }
    }
}
