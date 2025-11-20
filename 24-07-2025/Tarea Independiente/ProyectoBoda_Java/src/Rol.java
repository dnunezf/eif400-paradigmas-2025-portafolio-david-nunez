public abstract class Rol {
    protected String nombre;

    public Rol(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    public String toString() {
        return this.getClass().getSimpleName() + ": " + nombre;
    }
}
