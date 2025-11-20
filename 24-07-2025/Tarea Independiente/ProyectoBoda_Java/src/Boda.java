import java.util.*;

public class Boda {
    private List<Persona> personas;

    /*Este atributo va a representar la relación dinámica entre roles y personas
    * La clave es Rol, y el valor (SetPersona) es quien desempeña.
    * Se una un set para evitar duplicados, ya que una misma persona no aparece en dos roles*/
    private Map<Rol, Set<Persona>> rolesAsignados;

    public Boda() {
        this.personas = new ArrayList<>();
        this.rolesAsignados = new HashMap<>();
    }

    public void agregarPersona(Persona persona) {
        personas.add(persona);
    }

    public void asignarRol(Persona persona, Rol rol) {
        rolesAsignados.computeIfAbsent(rol, k -> new HashSet<>()).add(persona);
    }

    /*Se va a recorrer la lista de personas y, para cada una, busca en el mapa de roles si se encuentra
    * asignada a algun rol*/
    public void mostrarRolesPorPersona() {
        for (Persona persona : personas) {
            System.out.println(persona);

            for(Map.Entry<Rol, Set<Persona>> entry : rolesAsignados.entrySet()) {
                if (entry.getValue().contains(persona)) {
                    System.out.println(" -> " + entry.getKey().getNombre());
                }
            }
        }
    }

    /*Muestra todas las personas agrupadas por el rol a desempeñar*/
    public void mostrarPersonasPorRol() {
        for(Map.Entry<Rol, Set<Persona>> entry :  rolesAsignados.entrySet()) {
            System.out.println(entry.getKey().getNombre() + ":");

            for(Persona persona : entry.getValue()) {
                System.out.println(" - " + persona.getNombre());
            }
        }
    }
}
