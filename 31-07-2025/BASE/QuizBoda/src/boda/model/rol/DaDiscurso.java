/*Reacciona a BRINDIS.*/

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

public class DaDiscurso implements Rol {
    @Override
    public boolean reaccionaA(Evento evento) {
        return evento == Evento.BRINDIS;
    }

    @Override
    public void ejecutar(Persona persona) {
        System.out.println(persona.getNombre() + " da un emotivo discurso.");
    }
}
