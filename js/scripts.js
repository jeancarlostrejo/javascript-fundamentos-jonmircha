/* **********     Curso JavaScript: 3. Variables: var VS let      ********** */

/* var hola = "Hola Mundo";
         let hello = "Hello World";
         console.log(hola);
         console.log(hello);
         console.log(window);
         console.log(window.hola);
         console.log(window.hello); */
//Ambito de bloque
//Esto es un bloque - comentario de una lines
/*
         Esto
         es
         un
         comentario
         de
         varias
         líneas */
/* console.log ("****************var*****************");
         var musica = "Rock";
         console.log("Variable Música antes del Bloque", musica);
         {
           var musica = "Pop";
           console.log("Variable Música dentro del Bloque", musica);
         }
         console.log("Variable Música después del Bloque", musica);
         console.log("****************let*****************");
         let musica2 = "Rock";
         console.log("Variable Música antes del Bloque", musica2);
         {
           let musica2 = "Pop";
           console.log("Variable Música dentro del Bloque", musica2);
         }
         console.log("Variable Música después del Bloque", musica2); */

/* **********     Curso JavaScript: 4. Constantes (const)     ********** */

/*  let a;
          const PI = 3.1416;
          //const NUEVE;
          console.log(PI);
          //PI = 3.15;
          a = "kenai";
          console.log(a);
          const objeto = {
            nombre: "Jon",
            edad: 35
          }
          const colores = ["blanco", "negro", "azul"];
          console.log(objeto);
          console.log(colores);
          objeto.correo = "jonmircha@gmail.com";
          colores.push("anaranjado");
          console.log(objeto);
          console.log(colores); */

/* **********     Curso JavaScript: 5. Cadenas de Texto (Strings)      ********** */

/*
             //Cadenas de Texto aka Strings
             let nombre = "Jon";
             let apellido = 'MirCha';
             let saludo = new String("Hola Mundo");
             let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";
             console.log(nombre, apellido, saludo);
             console.log(
               nombre.length,
               apellido.length,
               saludo.length,
               nombre.toUpperCase(),
               apellido.toLowerCase(),
               lorem.includes("amet"),
               lorem.includes("jon"),
               lorem,
               lorem.trim(),
               lorem.split(" "),
               lorem.split(",")
             );
          */

/* **********     Curso JavaScript: 6. Template Strings     ********** */

/* let nombre = "Jon";
         let apellido = "MirCha";
      */
//Concatenación
//let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
//console.log(saludo);

//Interpolción de variables
//Template String
/* let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
         console.log(saludo2);
         let ul = "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul > ";
         console.log(ul);
         let ul2 = `
           <ul>
             <li>Primavera</li>
             <li>Verano</li>
             <li>Otoño</li>
             <li>Invierno</li>
         </ul>
         `;
         console.log(ul2);
         let ul3 = "<ul>";
         ul3 += "<li> Primavera</li>";
         ul3 += "<li>Verano</li>";
         ul3 += "<li>Otoño</li>";
         ul3 += "<li>Invierno</li>";
         ul3 += "</ul>";
         console.log(ul3);
      */

/* **********     Curso JavaScript: 7. Números (Numbers)     ********** */

/* let a = 2;
         let b = new Number(1);
         let c = 7.19;
         let d = "5.6";
         console.log(a, b);
         console.log(c.toFixed(1));
         console.log(c.toFixed(5));
         console.log(parseInt(c));
         console.log(parseFloat(c));
         console.log(typeof c, typeof d);
         console.log(a + b);
         console.log(c + parseInt(d));
         console.log(c + parseFloat(d));
         console.log(c + Number.parseInt(d));
         console.log(c + Number.parseFloat(d)); */

/* **********     Curso JavaScript: 8. Booleans -       ********** */

/* let verdadero = true;
         let falso = false;
         let v = Boolean(true);
         let f = Boolean(false);
         console.log(verdadero, falso, v, f);
         console.log(typeof verdadero, typeof falso);
         console.log(Boolean(0));
         console.log(Boolean(-7));
         console.log(Boolean(""));
         console.log(Boolean(" ")); */

/* **********     Curso JavaScript: 9. undefined, null & NaN -        ********** */

//undefined indica que no se ha inicializado una variable y que el valor está ausente
/* let indefinida;
         console.log(indefinida); */

//null es un valor especial que indica la ausencia de un valor
/* let nulo = null;
         console.log(null); */

//NaN - Not a Number
/*let noEsUnNumero = "hola" * 3.7;
           console.log(noEsUnNumero);*/

/* **********     Curso JavaScript: 10. Funciones -        ********** */
/*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.
    Las funciones en JavaScript son objetos, un tipo especial de objetos:
    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

//Declaración de función
/*  function estoEsUnaFuncion() {
       console.log("Uno");
       console.log("Dos");
       console.log("Tres");
     } */

//Invocación de función
/* estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion(); */

/* function unaFuncionQueDevuelveValor() {
      console.log("Uno");
      return 19;
      console.log("Dos");
      console.log("Tres");
      return "La función ha retornado una Cadena de texto";
    } */

//let valorDeFuncion = unaFuncionQueDevuelveValor();

//console.log(valorDeFuncion);

/*  function saludar(nombre = "Desconocido", edad = 0) {
       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
     } */

//saludar("kEnAi", 7);
//saludar();

//Funciones declaradas VS funciones expresadas

//funcionDeclarada();

/* function funcionDeclarada() {
      console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    } */

//funcionDeclarada();

//funcionExpresada();

//función anónima
/* const funcionExpresada = function () {
  console.log(
    "Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, siinvocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'"
  );
};
 */
// funcionExpresada();

/* **********     Curso JavaScript: 11. Arreglos (Arrays) -     ********** */

/* const a = [];
const b = [
  1,
  true,
  "hola",
  ["A", "B", "C", [1, 2, 3]],
  { nombre: "jean", apellido: "carlos" },
];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);
console.log(b[4].apellido);

const c = Array.of("X", "Y", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, false, true);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Blanco");
console.log(colores);

colores.pop();
console.log(colores);

colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
}); */

/* **********     Curso JavaScript: 12. Objetos -        ********** */

/* let a = new String("Hola");
console.log(a);
const b = {};
console.log(b);
const c = new Object();
console.log(c); */

/* dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */

/* const jean = {
  nombre: "Jean Carlos",
  apellido: "Trejo Villamizar",
  edad: 26,
  pasatiempos: ["Leer", "Ver videos", "One Piece"],
  soltero: true,
  contacto: {
    email: "jeancarlostrejo19@gmail.com",
    telefono: "+5842412345678",
    twitter: "@iFerre_11",
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} anhos y me puedes seguir como ${this.contacto.twitter} en Twitter.`
    );
  },
};

console.log(jean);
console.log(jean["nombre"]);
console.log(jean["apellido"]);
console.log(jean.nombre);
console.log(jean.apellido);
console.log(jean.edad);
console.log(jean.soltero);
console.log(jean.pasatiempos);
console.log(jean.pasatiempos[2]);
console.log(jean.contacto.twitter);

jean.saludar();
jean.decirMiNombre();
console.log(Object.keys(jean));
console.log(Object);
console.log(Object.values(jean));
console.log(jean.hasOwnProperty("nombre"));
console.log(jean.hasOwnProperty("nacimiento"));

let carlos = new Object();
Object.assign(carlos, jean);
console.log(carlos); */

/* **********     Curso JavaScript: 13. Tipos de Operadores -        ********** */

/* Operadores */
/* Aritméticos:  + - * / % ()  */

/* let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;
console.log(a);
console.log(modulo); */

/*  Relacionales: >, <,   >=, <=, ==, ===, !=, !== */
/* console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7); */
/*
= 1 igual es asignación  de variable
== 2 iguales es comparacion de valores
=== 3 igulaes es comparación de tipo de dato y de valor
*/

/* console.log(7 == 7);
console.log(7 == "7");
console.log(0 == false);

console.log(7 === 7);
console.log(7 === "7");
console.log(0 === false); */

/* Incremento Decremento */
/* let i = 2;
console.log(i++);
console.log(++i);

i = i + 2;
i *= 3; */

//operador unario
/* i++;
i--;
++i;
--i;
console.log(i); */

/*
    Lógicos
      ! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
      || - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
      && - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide 
*/

/* console.log(!true);
console.log(!false);
console.log(9 === 9 || "9" === 9);
console.log(9 === 9 && "9" === 9);
console.log(9 === 9 && "9" === "9"); */

/* **********     Curso JavaScript: 14. Condicionales -        ********** */
/* if - else */
/* let edad = 9;
if (edad > 17) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
if (edad >= 18) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
if (edad < 18) {
  console.log("Eres menor de Edad");
} else {
  console.log("Eres mayor de Edad");
}
if (edad <= 17) {
  console.log("Eres menor de Edad");
} else {
  console.log("Eres mayor de Edad");
} */

/* if - else if - else */
/*
      Déjame Dormir - 0hrs - 5hrs
      Buenos dias 6hrs - 11hrs
      Buenas tardes 12hrs - 18hrs
      Buenas noches 19hrs - 23hrs
    */

/* let hora = 1;

if (hora >= 0 && hora <= 5) {
  console.log("Dejame Dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos Dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas Noches");
}

if (hora < 6) {
  console.log("Déjame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("Buenos días");
} else if (hora > 11 && hora < 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
} */

/* Operador Ternario (condición) ? verdadero : falsa */
/* console.log("Operador Ternario");
let eresMayor = edad >= 18 ? "Eres mayor de Edad" : "Eres menor de Edad";
console.log(eresMayor); */

/* switch - case */
/*domingo -0
    lunes - 1
    martes - 2
    miércoles - 3
    jueves - 4
    viernes - 5
    sábado - 6
    */

/* let dia = 7;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;

  case 2:
    console.log("Martes");
    break;

  case 3:
    console.log("Miercoles");
    break;

  case 4:
    console.log("Jueves");
    break;

  case 5:
    console.log("Viernes");
    break;

  case 6:
    console.log("Sabado");
    break;

  default:
    console.log("El dia no existe");
    break;
} */

/* **********     Curso JavaScript: 15. Ciclos (Loops) -        ********** */

/* let contador = 0;

while (contador < 10) {
  console.log(`while ${contador}`);
  contador++;
}

do {
  console.log(`do while ${contador}`);
} while (contador < 10); */

/* for (inicialización de variable; condición; decremento o incremento) {
      sentencias que ejecuta el for
      sentencias que ejecuta el for
      sentencias que ejecuta el for
    } */

/* for (let i = 0; i < 10; i++) {
  console.log(`for ${i}`);
}
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const jean = {
  name: "Jean Carlos",
  lastName: "Trejo Villamizar",
  age: 26,
};

//en los for in, para imprimir lo valores de una propiedad, la notacion del punto no sirve, hay que usar la notacion de los corchetes. For in nos permite recorrer propiedades de un objeto
for (const propiedad in jean) {
  console.log(`Key: ${propiedad}, Value: ${jean[propiedad]}`);
}

//for of permite iterar sobre objetos que son iterables.
for (const iterator of numeros) {
  console.log(iterator);
}

let cadena = "Hola Mundo";
for (const caracter of cadena) {
  console.log(caracter);
} */

/* **********     Curso JavaScript: 16. Manejo de Errores     ********** */

/* try {
  console.log("En el try se agrega el codigo a evaluar");
  noExiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("En el catch se captura el error generado o lanzado por el try");
  console.log(error);
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de un bloque try-catch"
  );
}

try {
  let numero = "y";

  if (isNaN(numero)) {
    throw Error("El valor ingresado no es un numero");
  }

  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo un error: ${error}`);
} */

/* **********     Curso JavaScript: 17. break & continue      ********** */
/* break y continue no puede utilizarse en metodos de arreglos, sino en estructuras de control
for, while, do while */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
} */

/* **********     Curso JavaScript: 18. Destructuración     ********** */

const numeros = [1, 2, 3];

//Sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

//Con destructuracion
const [one, two, three] = numeros;

console.log(one, two, three);

const persona = {
  nombre: "Jean Carlos",
  apellido: "Trejo Villamizar",
  edad: 26,
};

//os nombre de las variables deben coincidir con las propiedades del objeto. Se puede renombrar una variable con los dos puntos
let { nombre, apellido, edad: age } = persona;

console.log(nombre, apellido, age);
