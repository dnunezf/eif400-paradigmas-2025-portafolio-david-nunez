package boda.test;

import java.util.*;
import boda.model.*;
import boda.model.rol.*;


public class TestBoda {
    public static void main(String[] args) {
        testAll();
    }

    static void testAll() {
        // Actores y Roles
        var ana = new Mujer("Ana");
        var luis = new Varon("Luis");
        var maria = new Mujer("María");
        var pedro = new Varon("Pedro");
        var refugios = new Varon("Refugios");

        Boda.registrar(pedro, refugios);
        Boda.registrar(ana, new DaDiscurso(), new FirmaComoTestigo());
        Boda.registrar(Arrays.asList(luis, maria),
                new Pareja(), new BailaVals());

        Boda.participantes();

        // Eventos
        Boda.atencion("Probando Evento: Casamiento", Evento.JURAMENTO);
        Boda.atencion("Probando Evento: Firma", Evento.FIRMA);
        Boda.atencion("Probando Evento: Brindis", Evento.BRINDIS);
        Boda.atencion("Probando Evento: Vals", Evento.VALS);
    }
}
