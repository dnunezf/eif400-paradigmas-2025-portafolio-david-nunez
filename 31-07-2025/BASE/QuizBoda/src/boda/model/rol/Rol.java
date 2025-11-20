// Interfaz que todos los roles deben implementar

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

public interface Rol {
    boolean reaccionaA(Evento evento);
    void ejecutar(Persona persona);
}
