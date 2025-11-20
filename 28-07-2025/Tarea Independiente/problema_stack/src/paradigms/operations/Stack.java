package paradigms.operations;

import java.util.LinkedList;
import java.util.NoSuchElementException;

/*Para efectos de este ejercicio, debemos crear nuestra propia clase Stack<T> generica,
* "Haga una clase Stack<T> en un paquete paradigms.operations". Por lo tanto, no podemos
* utilizar java.util.Stack; asi, recurrimos a LinkedList<T>, ya que proporciona todos los
* metodos necesarios para una pila.*/
public class Stack<T> {
    private LinkedList<T> elements;

    public Stack() {
        elements = new LinkedList<>();
    }

    /*Cantidad de elementos*/
    public int size() {
        return elements.size();
    }

    /*Indica si esta vacia*/
    public boolean isEmpty() {
        return elements.isEmpty();
    }

    /*Consulta el tope*/
    public T top() {
        if (isEmpty()) {
            throw new NoSuchElementException("Stack is empty - cannot top");
        }
        return elements.getFirst();
    }

    /*Inserta un elemento*/
    public void push(T item) {
        elements.addFirst(item);
    }

    /*Saca y retorna el tope*/
    public T pop() {
        if (isEmpty()) {
            throw new NoSuchElementException("Stack is empty - cannot pop");
        }
        return elements.removeFirst();
    }

    /*Aplica una operación aritmetica, definida en Operator, sobre los elementos de la pila.
    * 1. Consulta cuantos operandos se necesitan, usando Operators.arityOf()
    * 2. Hace pop a los operandos de la pila.
    * 3. Aplica la operacion aritmetica (solo soportando Integer).
    * 4. Inserta el resultado de vuelta en la pila y retorna.*/
    public T operate(Operator oper) {
        // Consultamos la aridad (cantidad de operandos que requiere la operacion)
        int arity = Operators.arityOf(oper);

        // Validamos que hayan sificientes elementos en la pila
        if (size() < arity) {
            throw new IllegalStateException("No hay suficientes elementos en la pila para esta operacion: " + oper);
        }

        // Extraemos los operandos desde la pila (Last In, First Out)
        T[] operands = (T[]) new Object[arity];
        for(int i = arity - 1; i >= 0; i--) {
            operands[i] = pop(); // Se guardan en orden inverso, para operar correctamente
        }

        /*Asegurar que el tipo T es Integer*/
        if(!(operands[0] instanceof Integer)) {
            throw new UnsupportedOperationException("Only Integer operations are supported.");
        }

        /*Realizar la operacion, segun el tipo*/
        int result = (Integer) operands[0];
        for(int i = 1; i < arity; i++) {
            int value = (Integer) operands[i];

            switch (oper) {
                case ADD:
                    result += value;
                    break;
                case MINUS:
                    result -= value;
                    break;
                case MULT:
                    result *= value;
                    break;

                case DIV:
                    if (value == 0) {
                        throw new ArithmeticException("Division by zero");
                    }
                    result /= value;
                    break;

                default:
                    throw new UnsupportedOperationException("Unsupported operation: " + oper);
            }
        }

        // Hacemos push al resultado devuelta en la pila
        T resultWrapped = (T) Integer.valueOf(result);
        push(resultWrapped);
        return resultWrapped;
    }
}
