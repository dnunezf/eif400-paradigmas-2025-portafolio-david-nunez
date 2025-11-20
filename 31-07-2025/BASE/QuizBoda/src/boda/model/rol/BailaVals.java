/*Reacciona a VALS.*/

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

public class BailaVals implements Rol {
    @Override
    public boolean reaccionaA(Evento evento) {
        return evento == Evento.VALS;
    }

    @Override
    public void ejecutar(Persona persona) {
        System.out.println(persona.getNombre() + " baila el primer vals.");
    }
}