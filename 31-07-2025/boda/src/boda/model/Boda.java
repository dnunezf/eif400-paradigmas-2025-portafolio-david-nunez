/**
Quiz #1 Boda Horario: 6pm
@since 31/07/2025
@author David Alberto Núñez Franco 119080008
@author Amanda Zamora Ramírez 901160963
@author Mariana Villalobos Ramírez 119150046
@author Sofía Lizano Alfaro 208620067
*/

package boda.model;

import java.util.*;

public class Boda {
    private static List<Persona> participantes = new ArrayList<>();

    public static void registrar(Persona... personas) {
        for (Persona p : personas) {
            if (!participantes.contains(p)) {
                participantes.add(p);
                p.agregarRol(new None());
            }
        }
    }

    public static void registrar(Persona persona, Rol... roles) {
        if (!participantes.contains(persona)) {
            participantes.add(persona);
        }
        for (Rol r : roles) {
            persona.agregarRol(r);
        }
    }

    public static void registrar(List<Persona> personas, Rol... roles) {
        for (Persona p : personas) {
            registrar(p, roles);
        }
    }

    public static void participantes() {
        System.out.println("*** Casting ***");
        for (Persona p : participantes) {
            System.out.print(p); 
        }
    }

    public static void atencion(String descripcion, Evento evento) {
        System.out.println("\n*** " + descripcion + " ***");
        for (Persona p : participantes) {
            p.reaccionar(evento);
        }
    }

    public static abstract class Persona {
        protected String nombre;
        protected List<Rol> roles = new ArrayList<>();

        public Persona(String nombre) {
            this.nombre = nombre;
        }

        public void agregarRol(Rol rol) {
            roles.add(rol);
        }

        public void reaccionar(Evento evento) {
            for (Rol rol : roles) {
                if (rol.aplica(evento)) {
                    rol.reaccion(this);
                }
            }
        }

        public String getNombre() {
            return nombre;
        }

        @Override
        public String toString() {
            StringBuilder sb = new StringBuilder(nombre + ":\n");
            boolean tieneRolReal = false;
            for (Rol rol : roles) {
                if (!(rol instanceof None)) {
                    sb.append("\t.como ").append(rol.toString()).append("\n");
                    tieneRolReal = true;
                }
            }
            if (!tieneRolReal) {
                sb.append("\t.sin Rol\n");
            }
            return sb.toString();
        }
    }

    public static class Mujer extends Persona {
        public Mujer(String nombre) {
            super(nombre);
        }
    }

    public static class Varon extends Persona {
        public Varon(String nombre) {
            super(nombre);
        }
    }

    public interface Rol {
        boolean aplica(Evento evento);
        void reaccion(Persona p);
    }

    public enum Evento {
        JURAMENTO, BRINDIS, VALS, FIRMA
    }

    public static class Pareja implements Rol {
        public boolean aplica(Evento evento) {
            return evento == Evento.JURAMENTO;
        }

        public void reaccion(Persona p) {
            System.out.println(p.getNombre() + " da el sí");
        }

        public String toString() {
            return "Pareja";
        }
    }

    public static class DaDiscurso implements Rol {
        public boolean aplica(Evento evento) {
            return evento == Evento.BRINDIS;
        }

        public void reaccion(Persona p) {
            System.out.println(p.getNombre() + " da un emotivo discurso.");
        }

        public String toString() {
            return "Discursante";
        }
    }

    public static class BailaVals implements Rol {
        public boolean aplica(Evento evento) {
            return evento == Evento.VALS;
        }

        public void reaccion(Persona p) {
            System.out.println(p.getNombre() + " baila el primer vals.");
        }

        public String toString() {
            return "Bailante";
        }
    }

    public static class FirmaComoTestigo implements Rol {
        public boolean aplica(Evento evento) {
            return evento == Evento.FIRMA;
        }

        public void reaccion(Persona p) {
            System.out.println(p.getNombre() + " firma como testigo legal.");
        }

        public String toString() {
            return "Testificante";
        }
    }

    public static class None implements Rol {
        private static final Random rand = new Random();

        public boolean aplica(Evento evento) {
            return true;
        }

        public void reaccion(Persona p) {
            if (rand.nextBoolean()) {
                System.out.println(p.getNombre() + " llora");
            } else {
                System.out.println(p.getNombre() + " rie");
            }
        }

        public String toString() {
            return "sin Rol";
        }
    }
}

