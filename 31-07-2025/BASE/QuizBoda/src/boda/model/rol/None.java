/*Rol por defecto, reacciona a cualquier evento con una accion aleatoria*/

package boda.model.rol;

import boda.model.Evento;
import boda.model.Persona;

import java.util.Random;

public class None implements Rol {
    private static final Random random = new Random();

    @Override
    public boolean reaccionaA(Evento evento) {
        return true; // siempre reacciona
    }

    @Override
    public void ejecutar(Persona persona) {
        if (random.nextBoolean()) {
            System.out.println(persona.getNombre() + " llora");
        }
        else {
            System.out.println(persona.getNombre() + " rie");
        }
    }
}
