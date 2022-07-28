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

/* const numeros = [1, 2, 3];

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
}; */

/* os nombre de las variables deben coincidir con las propiedades del objeto. Se puede renombrar una variable con los dos puntos */
/* let { nombre, apellido, edad: age } = persona;

console.log(nombre, apellido, age); */

/* **********     Curso JavaScript: 19. Objetos literales     ********** */

/* const nombre = "Shushu";
let edad = 12;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Guaaauu guaaau!!!");
  },
};

console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("Guaau Guaauuu guaaau!!");
  },
};

console.log(dog);
dog.ladrar(); */

/* **********     Curso JavaScript: 20. Parámetros REST & Operador Spread     ********** */
//Parametro REST
/* function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

//Operador Spread
const arr3 = [...arr1, ...arr2];

console.log(arr3); */

/* **********     Curso JavaScript: 21. Arrow Functions - #jonmircha     ********** */

/* const saludar = () => console.log(`hola`);

saludar(); */

/* const saludar = (nombre) => {
  console.log(`hola ${nombre}`);
};

saludar("Jean Carlos"); */

/* const sumar = function (a, b) {
  return a + b;
}; */

/* const sumar = (a, b) => a + b;

console.log(sumar(8, 7));

const funcionDEVariasLineas = () => {
  console.log("uno");
  console.log("dos");
  console.log("tres");
};

funcionDEVariasLineas();

const numeros = [1, 2, 3, 4];

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posicion ${index}`)
); */

/* function Perro() {
  console.log(this);
}

Perro(); */

/* Con arrows functions, el objeto this captura el contexto del objeto en el que se encuentra declarada,
asi que no es bueno declarar metodos con arrow function dentro de un objeto literal, sino declararlas como lo piden los como objetos literales */
/* const perro = {
  nombre: "Shushu",
  edad: 12,
  ladrar: () => {
    console.log(this);
  },
}; */
/* const perro = {
  nombre: "Shushu",
  edad: 12,
  ladrar() {
    console.log(this);
  },
};

perro.ladrar(); */

/* **********     Curso JavaScript: 22. Prototipos y Curso JavaScript: 23. Herencia     ********** */
// POO
/*
    Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
     */

/* const animal = {
  nomrbre: "Snoopy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

const animal2 = {
  nomrbre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

console.log(animal);
console.log(animal2); */

//Función constructora
/* function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  };
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };
} */
//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
/* function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
} */

//Métodos agregados al prototipo de la función constructora
/* Animal.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}; */

//Herencia Prototípica
/* function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio; 
}*/

//Perro está heredando de Animal
/* Perro.prototype = new Animal();
Perro.prototype.constructor = Perro; */

//Sobreescritura de métodos del Prototipo padre en el hijo
/* Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();
lolaBunny.sonar();
lolaBunny.saludar(); */

/* **********     Curso JavaScript: 24. Clases y Curso JavaScript: 25. Métodos estáticos, getters y setters      ********** */

/* class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanho) {
    //Con el metodo super() se manda a llamar al constuctor de la clase padre
    super(nombre, genero);
    this.tamanho = tamanho;
    this.raza = null;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido!");
  }

  ladrar() {
    console.log("Guaau Guaaauu!!");
  }
  //un método estático se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log(
      "Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre."
    );
  }

  //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
Perro.queEres();
console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza); */

/* **********     Curso JavaScript: 26. Objeto console     ********** */
/* console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");
let nombre = "Jon",
  apellido = "MirCha",
  edad = 35;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
console.clear();
console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
console.clear();
console.log(console);
console.table(Object.entries(console).sort());
const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);
const perro = {
  nombre: "Boni",
  raza: "Boxer",
  color: "cafe",
};
console.table(perro);
console.clear();
console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi código");
//console.log(arreglo);
console.clear();
for (let i = 0; i <= 100; i++) {
  console.count("código for");
  console.log(i);
}
console.clear();
let x = 3,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY }); */

/* **********     Curso JavaScript: 27. Objeto Date     ********** */

/* console.log(Date());

let fecha = new Date();
console.log(fecha);
//Dia del mes
console.log(fecha.getDate());
//día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
const cumpleJean = new Date(1995, 10, 11);
console.log(cumpleJean); */

/* **********     Curso JavaScript: 28. Objeto Math - #jonmircha     ********** */
/* console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.49));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 5));
console.log(Math.sign(-0.3)); // -1 0 1
console.log(Math.random());
console.log(Math.round(Math.random() * 1000)); */

/* **********     Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha     ********** */
/*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto*/
/*function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Jon");
saludar();
console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
console.log("cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");*/

/* **********     Curso JavaScript: 30. alert, confirm y prompt     ********** */
//console.log(window);
//alert("Hola esto es una alerta");
//confirm("Hola esto es una confirmación");
//prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");

/* let alerta = alert("Hola esto es una alerta"),
  confirmacion = confirm("Hola esto es una confirmación"),
  aviso = prompt(
    "Hola esto es un aviso y le permite al usuario ingresar un valor"
  );
console.log(alerta);
console.log(confirmacion);
console.log(aviso); */

/* **********     Curso JavaScript: 31. Expresiones Regulares - #jonmircha     ********** */
/*
     Expresiones Regulares
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    */

/* let cadena =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi molestiae, tenetur accusamus corporis voluptatum dolore nam numquam dolorem hic blanditiis repellendus ducimus laboriosam libero error rerum, veniam cupiditate voluptatem.";

// let expReg = new RegExp("lorem", "ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

let expReg2 = /lorem{1,}/gi;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena)); */

/* **********     Curso JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha     ********** */
/* 
(function () {
  console.log("Mi primer IIFE");
})();

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Esto es un console.log");
})(document, window, console);

//Clásica
(function () {
  console.log("versión Clásica");
})();
//La Crockford (JavaScript The Good Parts)
(function () {
  console.log("versión Crockford");
})();
//Unaria
+(function () {
  console.log("versión Unaria");
})();
//Facebook
!(function () {
  console.log("versión Facebook");
})(); */
