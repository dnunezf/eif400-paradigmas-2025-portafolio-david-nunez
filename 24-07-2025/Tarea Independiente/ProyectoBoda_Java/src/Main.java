public class Main {
    public static void main(String[] args) {
        Boda boda = new Boda();

        Persona novio = new Novio("David");
        Persona novia = new Novio("Lucía");
        Persona padre = new Padre("Ernesto");
        Persona padrino = new Padrino("Chavarría");
        Persona invitado =  new Invitado("Gabriel");

        boda.agregarPersona(novio);
        boda.agregarPersona(novia);
        boda.agregarPersona(padre);
        boda.agregarPersona(padrino);
        boda.agregarPersona(invitado);

        Rol vals = new BailarPrimerVals();
        Rol discurso = new DarDiscurso();
        Rol pastel = new CostarPastel();
        Rol testigo = new FirmarComoTestigo();

        boda.asignarRol(novio, vals);
        boda.asignarRol(novia, vals);
        boda.asignarRol(padre, discurso);
        boda.asignarRol(padrino, testigo);
        boda.asignarRol(invitado, pastel);

        System.out.println("==ROLES POR PERSONA==");
        boda.mostrarRolesPorPersona();

        System.out.println("\nPERSONAS POR ROL");
        boda.mostrarPersonasPorRol();
    }
}