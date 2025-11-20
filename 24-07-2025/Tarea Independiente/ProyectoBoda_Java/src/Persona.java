public abstract class Persona {
    protected String nombre;

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    /*toString que permite obtener el nombre concreto de la clase, para mostrarlo en el mensaje*/
    public String toString() {
        return this.getClass().getSimpleName() + ": " + nombre;
    }
}