package paradigms.operations;

/*Nos va a permitir consultar cuantos operandos requiere cada operacion*/
public class Operators {

    public static int arityOf(Operator oper) {
        switch (oper) {
            case ADD:
            case MINUS:
            case MULT:
            case DIV:
                return 2;
            default:
                throw new IllegalArgumentException("Operator not implemented: " + oper);
        }
    }
}
