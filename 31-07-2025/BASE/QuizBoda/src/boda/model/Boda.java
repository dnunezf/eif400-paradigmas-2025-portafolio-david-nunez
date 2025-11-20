package boda.model;

import boda.model.rol.*;
import java.util.*;

public class Boda {
    public static final List<Persona> participantes = new ArrayList<>();

    // Registrar una persona sin roles
    public static void registrar(Persona persona){
        participantes.add(persona);
    }

    //Registrar a varias personas sin roles
    public static void registrar(Persona... persona) {
        participantes.addAll(Arrays.asList(persona));
    }

    // Registrar a una persona con uno o mas roles
    public static void registrar(Persona persona, Rol... roles) {
        for (Rol rol: roles) {
            persona.agregarRol(rol);
        }
        if (!participantes.contains(persona)) {
            participantes.add(persona);
        }
    }

    // Registrar a varias personas una lista de roles
    // Iteramos doble, porque recorremos una lista de personas y roles
    public static void registrar(List<Persona> personas, Rol... roles){
        for(Persona persona : personas) {
            for (Rol rol : roles) {
                persona.agregarRol(rol);
            }
            if (!participantes.contains(persona)) {
                participantes.add(persona);
            }
        }
    }

    // Mostrar participantes y sus roles
    public static void participantes() {
        System.out.println("*** Casting ***");

        for(Persona p : participantes) {
            System.out.println(p.getNombre() + ":");
            p.imprimirRoles();
        }
        System.out.println();
    }

    // Ejecutar un evento y notificar a todos los participantes
    public static void atencion(String titulo, Evento evento) {
        System.out.println("*** " + titulo + " ***");
        for (Persona p : participantes) {
            p.reaccionar(evento);
        }
        System.out.println();
    }

}
