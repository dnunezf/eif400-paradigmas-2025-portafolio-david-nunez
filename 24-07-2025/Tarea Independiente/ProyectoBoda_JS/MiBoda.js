/*Crear a la Persona, con el nombre y el tipo*/

function crearPersona(nombre, tipo) {
  return {
    nombre,
    tipo,
    toString: function () {
      return `${tipo}: ${nombre}`;
    },
  };
}

/*Crear el Rol, con el nombre*/

function crearRol(nombre) {
  return { nombre };
}

/*Funcion que estructura la boda*/

function crearBoda() {
  const personas = [];
  const rolesAsignados = new Map(); /*Es decir, Map<Rol, Set<Persona>>*/

  function agregarPersona(persona) {
    personas.push(persona);
  }

  function asignarRol(persona, rol) {
    if (!rolesAsignados.has(rol)) {
      rolesAsignados.set(rol, new Set());
    }
    rolesAsignados.get(rol).add(persona);
  }

  function mostrarRolesPorPersona() {
    /*Recorremos todas las personas agregadas a la boda*/
    for (const persona of personas) {
      console.log(persona.toString());

      /*Recorremos todas las asignaciones de roles*/
      for (const [rol, personasAsignadas] of rolesAsignados.entries()) {
        /*Si la persona tiene ese rol asignado, lo muestra*/
        if (personasAsignadas.has(persona)) {
          console.log(` -> ${rol.nombre}`);
        }
      }
    }
  }

  function mostrarPersonasPorRol() {
    /*Recorremos las asignaciones de roles*/
    for (const [rol, personasAsignadas] of rolesAsignados.entries()) {
      console.log(`${rol.nombre}:`);

      /*Muestra el nombre de cada persona que tiene asignado ese rol*/
      for (const persona of personasAsignadas) {
        console.log(` - ${persona.nombre}`);
      }
    }
  }

  return {
    agregarPersona,
    asignarRol,
    mostrarRolesPorPersona,
    mostrarPersonasPorRol,
  };
}

/*Crear la boda*/
const boda = crearBoda();

/*Personas*/
const david = crearPersona("David", "Novio");
const lucia = crearPersona("Lucia", "Novia");
const ernesto = crearPersona("Ernesto", "Padre");
const chavarria = crearPersona("Chavarria", "Padrino");
const sofia = crearPersona("Sofia", "Invitada");

/*Agregar personas*/
boda.agregarPersona(david);
boda.agregarPersona(lucia);
boda.agregarPersona(ernesto);
boda.agregarPersona(chavarria);
boda.agregarPersona(sofia);

/*Roles*/
const vals = crearRol("Bailar el primer vals");
const discurso = crearRol("Dar el discurso");
const pastel = crearRol("Cortar el pastel");
const testigo = crearRol("Firmar como testigo");

/*Asignar roles*/
boda.asignarRol(david, vals);
boda.asignarRol(lucia, vals);
boda.asignarRol(ernesto, discurso);
boda.asignarRol(chavarria, testigo);
boda.asignarRol(sofia, pastel);

console.log("=== ROLES POR PERSONA ===");
boda.mostrarRolesPorPersona();

console.log("\n=== PERSONAS POR ROL ===");
boda.mostrarPersonasPorRol();
