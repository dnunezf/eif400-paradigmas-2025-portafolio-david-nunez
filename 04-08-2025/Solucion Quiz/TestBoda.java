package boda.test;

// import java.lang.x; // es un import implicito
import java.util.*; // Semantica, una opcion seria A -> java.util.A;. Basicamente, hay un espacio de nombre (.class) donde yo quiero buscar
import boda.model.Boda; // Si A no esta en java.util, otra opcion seria boda.model.Boda.A, y asi hasta encontrar A... Basicamente, yo quiero especificamente Boda
import static boda.model.Boda.*; // Esta buscando miembros de la clase Boda (por ejemplo, variables) 


// Es de tipo declarativo.
// public: Su semantica, es un modificador de visibilidad, quiere decir que ese paquete deja que el mundo externo pueda ver esa clase. Publico a nivel de paquete
public class TestBoda {
    // public int x; // semantica, x es visible fuera de la clase
    
    public static void main(String[] args) {
        testAll();
    }

    // No poner nada. Su semantica es 'amigable', en el paquete eso es publico, visible dentro del paquete.
    static void testAll(){
        
        // Actores y Roles

        // Semantica, var = principio 'DRY', por ejemplo, es equivalente a decir Mujer ana = new Mujer("Ana");
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
        
        Boda.atencion("Probando Evento; Casamiento", Evento.JURAMENTO);
        
        Boda.atencion("Probando Evento: Firma", Evento.FIRMA);
        
        Boda.atencion("Probando Evento: Brindis", Evento.BRINDIS);
        
        Boda.atencion("Probando Evento: Vals", Evento.VALS);
        
    }
}
