/*Reacciona solo a JURAMENTO.*/

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

public class Pareja implements Rol{
    @Override
    public boolean reaccionaA(Evento evento) {
        return evento == Evento.JURAMENTO;
    }

    @Override
    public void ejecutar(Persona persona) {
        System.out.println(persona.getNombre() + " da el si");
    }
}
