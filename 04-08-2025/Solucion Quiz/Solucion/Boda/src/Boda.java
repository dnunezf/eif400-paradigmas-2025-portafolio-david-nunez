/**
* Boda model 
* Demo of Design Pattern Decorator (Rol is one of Persona)
@
*/

package boda.model; // Semanticamente, el nombre de la clase es boda.model.Boda.java (nombre calificado) --> crea un namespace

// Esto es codigo declarativo
import java.util.*; 

public class Boda{
    
    public static enum Evento{
        BRINDIS, VALS, FIRMA, JURAMENTO;
    }
    
    public static interface Rol {
		final static Rol NONE = new None(); 
        void actuar(Evento evento, Persona quien);
    }

    public static abstract class Persona {
        private String nombre;
        private Set<Rol> roles = new HashSet<>();
        public Set<Rol> getRoles(){
			return this.roles;
		}

        protected Persona(String nombre) {
            this.nombre = nombre;
        }

        public String getNombre() {
            return nombre;
        }

        public void agregarRol(Rol rol) {
            roles.add(rol);
        }

        public void percive(Evento evento) {
            for (Rol rol : roles) {
                rol.actuar(evento, this);
            }
        }
        @Override
        public boolean equals(Object other){
            if (other == null) return false;
            if (other == this) return true;
            if (other instanceof Persona persona)
                return this.getNombre().equals(persona.getNombre());
            else{
                return false;
            }
        }
    }
    public static class  Mujer extends Persona{
        public Mujer(String nombre){
            super(nombre);
        }
    }
    public static class  Varon extends Persona{
        public Varon(String nombre){
            super(nombre);
        }
    }

    // Roles concretos
	public static class None implements Rol {
        public void actuar(Evento evento, Persona quien) {
			var accion = Math.random() < 0.5 ? "llora" : "rie";
			System.out.println(quien.getNombre() + " " + accion);
        }
		public String toString(){
			return "sin Rol";
		}
	}
    public static class Pareja implements Rol {
        
        public void actuar(Evento evento, Persona quien) {
            if (Evento.JURAMENTO == evento) {
                System.out.println(quien.getNombre() + " da el sí");
            }
        }
		public String toString(){
			return "como Pareja";
		}
    }
    public static class DaDiscurso implements Rol {
        
        public void actuar(Evento evento, Persona quien) {
            if (Evento.BRINDIS == evento) {
                System.out.println(quien.getNombre() + " da un emotivo discurso.");
            }
        }
		public String toString(){
			return "como Discursante";
		}
    }

    public static class FirmaComoTestigo implements Rol {
        public void actuar(Evento evento, Persona quien) {
            if (Evento.FIRMA == evento) {
                System.out.println(quien.getNombre() + " firma como testigo legal.");
            }
        }
		public String toString(){
			return "como Testificante";
		}
    }

    public static class BailaVals implements Rol {
        public void actuar(Evento evento, Persona quien) {
            if (Evento.VALS == evento) {
                System.out.println(quien.getNombre() + " baila el primer vals.");
            }
        }
		public String toString(){
			return "como Bailante";
		}
    }
    
    public static void atencion(String anuncio, Evento e){
        System.out.println();
        System.out.println("*** " + anuncio + " ***");
        for (var person: participantes){
            person.percive(e);
        }
    }
    public static void registrar(List<Persona> personas, Rol rol){
        for (var persona : personas){
            registrar(persona, rol); 
        }
        
    }
    
    private static Set<Persona> participantes = new HashSet<>();
	
	public static void participantes(){
		System.out.println("*** Casting ***");
		for (var persona: participantes){
			System.out.println(persona.getNombre() + ":");
			for (var rol : persona.getRoles())
				System.out.println("\t." + rol);
			
		}
	}
    
    public static void registrar(Persona persona, Rol rol){
        persona.agregarRol(rol); 
        if (!participantes.contains(persona))
            participantes.add(persona);
        
    }

    // Esto es codigo operacional (de ejecucion), ya sea for, if...
    public static void registrar(Persona persona, Rol... roles){
        for (var rol : roles){
            registrar(persona, rol);
        }
    }
    public static void registrar(List<Persona> personas, Rol... roles){
        for (var persona: personas){
            for (var rol : roles){
                registrar(persona, rol);
            }
        }
    }
    public static void registrar(Persona... personas){
        for (var persona: personas)
			registrar(persona, Rol.NONE);
	}

}
