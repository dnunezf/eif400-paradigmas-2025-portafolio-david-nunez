# EIF400 – Paradigmas de Programación  
## Portafolio personal · II Ciclo 2025

Este documento resume mis aportes y trabajos desarrollados durante el curso **Paradigmas de Programación (EIF400)** de la **Universidad Nacional de Costa Rica**, bajo la guía del **Dr. Carlos Loría-Sáenz**.  
El curso explora los fundamentos teóricos y prácticos de los paradigmas **funcional**, **lógico**, **imperativo** y de **diseño de lenguajes**, apoyándose en análisis sintáctico, semántico, ASTs, recursión, evaluación y construcción de mini-lenguajes. :contentReference[oaicite:0]{index=0}

---

## Paradigmas estudiados y procesos de aprendizaje

A lo largo del semestre profundicé en:

### Paradigma funcional
- Cálculo lambda: sintaxis, α-conversión, β-reducciones, combinadores, Church numerals y booleans.  
- Funciones de orden superior, composición, clausuras, inmutabilidad.  
- Implementación de evaluadores funcionales para expresiones.  

### Paradigma lógico
- Bases del razonamiento declarativo y resolución en Prolog.  
- Patrones de listas (append, reverse, member), ordenamientos (quicksort, mergesort).  
- Árboles, recorridos, predicados estructurales.  
- Extensión de evaluadores con operadores aritméticos, relacionales y booleanos.

### Traducción y diseño de lenguajes
- Gramáticas libres de contexto, recursividad izquierda, factorización, ambigüedades.  
- Construcción de parsers con **ANTLR4**.  
- Diseño de **ASTs**, visitors, evaluadores y transpiladores.  
- Comprensión del proceso completo: *parseo → AST → análisis semántico → generación de código*.

---

## Proyecto principal: el lenguaje Expresso

Durante el semestre construí **Expresso**, un mini-lenguaje funcional con sintaxis moderna, operadores, lambdas, tipos y patrones, que se transpila a Java 23+.

El proyecto incluye:

- **Diseño de sintaxis y gramática** usando ANTLR4.  
- **Construcción de un árbol de sintaxis abstracta (AST)** y el correspondiente conjunto de visitantes para recorridos y transformaciones.  
- **Implementación de análisis semántico y sistema de tipos**, con tabla de símbolos, detección de errores, verificación de funciones, tipos algebraicos, coincidencia de patrones y anotaciones.  
- **Transpilación a Java 23+**, generando código fuente equivalente mediante:
  - funciones expresadas como métodos estáticos,  
  - tipos algebraicos mapeados a `sealed interfaces` y `record`,  
  - expresiones complejas traducidas a construcciones idiomáticas de Java.  
- **Integración en una CLI profesional (`expressor`)**, capaz de tomar un archivo `.expresso`, verificarlo, generar Java, compilarlo y ejecutarlo.  
- **Casos de prueba finales**, cubriendo funciones, tipos, algebraicos, patrones, expresiones y coerciones.

El proyecto consolida todos los contenidos de teoría de lenguajes vistos en el curso, desde gramáticas hasta generación de código, pasando por análisis sintáctico, semántico y tipado estático.

---

## Trabajos complementarios

### Ejercicios funcionales
- Evaluadores recursivos de expresiones.  
- Representaciones lambda del cálculo funcional.  
- Manipulaciones estructurales de árboles y listas en estilo funcional.

### Ejercicios lógicos en Prolog
- Patrones de programación declarativa usando resolución.  
- Ordenamientos declarativos.  
- Extensión de mini-lenguajes con operadores lógicos.  

### Demos con ANTLR
- Construcción de `Expr.g4`: expresiones aritméticas, ASTs y evaluadores.  
- Experimentos con visitors/listeners y recorridos de árbol.  

### Tareas de investigación
- Comparación de CS2 y evolución en profundidad de POO en universidades del país.  
- Relación entre paradigmas, enseñanza y diseño de lenguajes de programación.  
- Reflexiones ligadas al uso de IA generativa como herramienta de apoyo académico.

---

## Competencias adquiridas

- Dominio práctico del ciclo completo de construcción de un lenguaje.  
- Comprensión profunda de paradigmas funcional y lógico.  
- Capacidad para diseñar gramáticas extensibles y ASTs coherentes.  
- Manejo de transpilación hacia Java con features modernas (records, sealed types).  
- Uso avanzado de Prolog, ANTLR4 y programación funcional recursiva.

---

## Créditos

- Autor: **David Alberto Núñez Franco**  
- Curso: **EIF400 – Paradigmas de Programación**, II Ciclo 2025  
- Profesor: **Dr. Carlos Loría-Saénz**  
- Documento base del curso incluido en este repositorio ("EIF400_II-2025_CLoria_NRC_51386_51387_51389.pdf"). :contentReference[oaicite:1]{index=1}
