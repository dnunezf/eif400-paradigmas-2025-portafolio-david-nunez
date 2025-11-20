/*Clase abstracta que representa a una persona con nombre y lista de roles.*/

package boda.model;

import boda.model.rol.*;
import java.util.*;

public abstract class Persona {
    protected String nombre;
    protected List<Rol> roles = new ArrayList<>();

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void agregarRol(Rol rol) {
        roles.add(rol);
    }

    public List<Rol> getRoles() {
        return roles;
    }

    public void reaccionar(Evento evento) {
        boolean reacciono = false;

        for (Rol rol : roles) {
            if (rol.reaccionaA(evento)) {
                rol.ejecutar(this);
                reacciono = true;
            }
        }
        if(!reacciono) {
            // SI no reacciono a ningun rol, usar rol por defecto
            new None().ejecutar(this);
        }
    }

    public void imprimirRoles() {
        if (roles.isEmpty()) {
            System.out.println("\t.sin rol");
            return;
        }

        for (Rol rol : roles) {
            if (rol instanceof Pareja) {
                System.out.println("\t.como Pareja");
            } else if (rol instanceof DaDiscurso) {
                System.out.println("\t.como Discursante");
            } else if (rol instanceof FirmaComoTestigo) {
                System.out.println("\t.como Testificante");
            } else if (rol instanceof BailaVals) {
                System.out.println("\t.como Bailante");
            } else {
                System.out.println("\t.con Rol desconocido");
            }
        }
    }
}
