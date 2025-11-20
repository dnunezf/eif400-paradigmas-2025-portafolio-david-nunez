/*Reacciona a FIRMA.*/

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

public class FirmaComoTestigo implements Rol {
    @Override
    public boolean reaccionaA(Evento evento) {
        return evento == Evento.FIRMA;
    }

    @Override
    public void ejecutar(Persona persona) {
        System.out.println(persona.getNombre() + " firma como testigo legal.");
    }
}