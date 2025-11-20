package demo;

import java.util.Map;
import java.util.function.IntBinaryOperator;

// Interfaz sellada, permite solo que se implemente Num, Op
sealed interface Node permits Num, Op, BinaryOp {}
// El compilador automaticamente agrega getters, toString, hasheable
record Num(int value) implements Node { }
record Op(String name) implements Node { }
record BinaryOp(Op oper, Node left, Node right) implements Node {}

public class Ast {
    // Tabla de operaciones
    private static final Map<String, IntBinaryOperator> OPS = Map.of(
            "+", (a, b) -> a + b,
            "-", (a, b) -> a - b,
            "*", (a, b) -> a * b,
            "/", (a, b) -> a / b,
            "%", (a, b) -> a % b
    );

    // Aqui aplicamos pattern-matching (metodos deben ir dentro de la clase AST, no fuera)
    static int evaluate(Node n) {
        return switch(n) {
            case Num(var value) -> value;
            case Op(var name) -> throw new IllegalStateException("Op not allowed");
            // aplicar operaciones aritmeticas basicas
            case BinaryOp(var oper, var left, var right) -> {
                var f = OPS.get(oper.name());
                if (f == null)
                    throw new IllegalStateException("Unknown op: " + oper.name());
                yield f.applyAsInt(evaluate(left), evaluate(right));
            }
        };
    }

    static public void test_0() {
        System.out.println("***test_0***");

        var ten = new Num(10);
        System.out.println("ten=" + ten + " " + ten.value());

        var twenty = new Num(20);

        var oper = new Op("+");
        System.out.println("oper=" + oper.name());

        var operation = new BinaryOp(oper, ten, twenty);

        System.out.println("operation=" + operation);

        System.out.println("operation=" + evaluate(operation) + "== 30?");

        operation = new BinaryOp(new Op("+"), ten, twenty);
        System.out.println("10 + 20 = " + evaluate(operation));

        operation = new BinaryOp(new Op("-"), twenty, ten);
        System.out.println("20 - 10 = " + evaluate(operation));

        operation = new BinaryOp(new Op("*"), ten, twenty);
        System.out.println("10 * 20 = " + evaluate(operation));

        operation = new BinaryOp(new Op("/"), twenty, ten);
        System.out.println("20 / 10 = " + evaluate(operation));

        operation = new BinaryOp(new Op("%"), twenty, ten);
        System.out.println("20 % 10 = " + evaluate(operation));
    }

    static public void main(String... args) {
        test_0();
    }
}