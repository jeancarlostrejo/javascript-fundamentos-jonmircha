/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

/* function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste una candena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
} */

/* const contarCaracteres = (cadena) =>
  !cadena
    ? console.warn("No ingresaste una candena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteres("hola peje"); */

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

/* const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una candena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : longitud <= 0
    ? console.warn("El valor de la longitud no es valido")
    : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 2);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("hola a todos los presentes", -5); */

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
/* const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo("Hola a todos los humanos", " ");
cadenaAArreglo("Hola a todos los humanos");
cadenaAArreglo("", " ");
cadenaAArreglo("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
cadenaAArreglo(); */

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
/* const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste el texto");
  if (veces == undefined)
    return console.warn(
      "No ingresaste la cantidad de veces a repetir el texto"
    );
  if (veces === 0) return console.error("El numero de veces no puede ser cero");
  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no puede ser negativo");

  for (let i = 0; i < veces; i++) {
    console.info(`${texto}, ${i + 1}`);
  }
};

repetirTexto("Peraspera ad astra", 0);
repetirTexto("Hola Mundo", 5);
repetirTexto("Hola Mundo", -2);
repetirTexto("", 2);
repetirTexto("Roronoa Zoro"); */

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
/* const invertirTexto = (cadena = "") =>
  !cadena
    ? console.warn("No introduciste ninguna cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

invertirTexto();
invertirTexto("Hola Mundo");
invertirTexto("El mundo de One Piece es increible, grande Oda"); */

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
/* const contPalabras = (cadena = "", palabra = undefined) => {
  if (!cadena) {
    return console.warn("No introduciste una cadena");
  }

  if (palabra === undefined) {
    return console.warn("No ingresaste la palabra a evaluar");
  }

  let cont = 0;
  const arrayCadena = cadena.split(" ");

  for (let i = 0; i < arrayCadena.length; i++) {
    if (arrayCadena[i] === palabra) {
      cont++;
    }
  }

  console.log(`La palabra ${palabra} se repite ${cont} veces`);
};

contPalabras("Hola chicos y chicas hola", "hola"); */
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
/* const palindromo = (cadena = "") => {
  if (!cadena) {
    return console.warn("No introduciste una cadena");
  }

  //Guardo la palabra invertida tal cual como la ingresan
  const invertida = cadena.split("").reverse().join("");

  //Coloco todas las letras de la palabra/frase juntas sin espacios en blanco y en minuscula
  const cadena2 = cadena.split(" ").join("").toLowerCase();

  //Invierto la palabra anterior.
  const invertida2 = cadena2.split("").reverse().join("").toLowerCase();

  //Comparo las dos palabras para ver si es palindroma o no
  cadena2 === invertida2
    ? console.log(
        `Sí es palindroma, la palabra original es ${cadena} y palabra invertida es ${invertida}`
      )
    : console.log(
        `No es palindroma, la palabra original ${cadena} y palabra invertida ${invertida}`
      );
};

palindromo();
palindromo("Hola Mundo");
palindromo("Salas");
palindromo("ΝΙΨΟΝ ΑΝΟΜΗΜΑΤΑ ΜΗ ΜΟΝΑΝ ΟΨΙΝ"); */

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
/* const eliminarCaracteres = (cadena = "", patron = "") =>
  !cadena
    ? console.warn("No introduciste ninguna cadena de texto")
    : !patron
    ? console.warn("No introduciste ningun patron")
    : console.info(cadena.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); */

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */
/* const aleatorio = (min, max) => {
  console.info(Math.floor(Math.random() * (max - min + 1) + min));
};
aleatorio(501, 600); */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */
/* const capicua = (numero = 0) => {
  if (!numero) {
    return console.warn("No ingresaste un numero");
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} ingresado NO es un numero`);
  }

  //Pasamos el numero a string para manejarlo como cadena y hacer la transformacion
  numero = numero.toString();
  let reves = numero.split("").reverse().join("");

  //Convertimos los string a numeros
  numero = parseInt(numero);
  reves = parseInt(reves);

  return numero === reves
    ? console.info(
        `El numero ingresado ${numero} SI es "capicua", el inverso es ${reves}`
      )
    : console.info(
        `El numero ingresado ${numero} NO es "capicua", el inverso es ${reves}`
      );
};
capicua();
capicua("dansd");
capicua(2002);
capicua(18165); */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */
/* const factorial = (numero = undefined) => {
  if (numero === undefined) {
    return console.warn("No ingresaste un numero");
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} ingresado NO es un numero`);
  }

  if (Math.sign(numero) === -1) {
    return console.error("No puede ingresar numeros negativos");
  }

  let fac = 1;

  for (let i = 0; i < numero; i++) {
    fac *= i + 1;
  }
  console.log(`El factorial de ${numero} es ${fac}`);
};

factorial();
factorial("201");
factorial(0);
factorial(5);
factorial(-25); */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */
/* const numeroPrimo = (numero) => {
  if (numero === undefined) {
    return console.warn("No ingresaste un numero");
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} ingresado NO es un numero`);
  }

  if (Math.sign(numero) === -1) {
    return console.error("No puede ingresar numeros negativos");
  }

  if (numero === 0) {
    return console.error("El numero no puede ser 0");
  }

  if (numero === 1) {
    return console.error("El numero no puede ser 1");
  }

  let band = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      band = true;
      break;
    }
  }

  return band
    ? console.info(`NO es primo el numero ${numero}`)
    : console.info(`SI es primo el numero ${numero}`);
}; */

// primo();
// primo("320");
// primo(-5);
// primo(1);
// primo(0);
// numeroPrimo(23);

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */
/* const parImpar = (numero = undefined) => {
  if (numero === undefined) {
    return console.warn("No ingresaste un numero");
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} NO es un numero`);
  }

  return numero % 2 === 0
    ? console.info(`El numero ${numero} es Par`)
    : console.log(`El numero ${numero} es Impar`);
};

parImpar();
parImpar("201");
parImpar(20);
parImpar(-100);
parImpar(15);
parImpar(-33); */
/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
/* const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined) {
    return console.warn("No ingresaste los grados");
  }

  if (typeof grados !== "number") {
    return console.error(`El valor ${grados} para los grados NO es un numero`);
  }

  if (unidad === undefined) {
    return console.warn("No ingresaste la unidad de medida a convertir G|F");
  }

  if (typeof unidad !== "string") {
    return console.error(`El valor ${unidad} ingresado, NO es una cadena`);
  }

  if (unidad.length !== 1 || !/C|F/.test(unidad)) {
    return console.warn(`Valor de unidad ${unidad} no reconocido`);
  }

  if (unidad === "C") {
    farenhit = grados * 1.8 + 32;
    console.log(`${grados}°C = ${farenhit} °F`);
  } else {
    celsius = (grados - 32) / 1.8;
    console.log(`${grados}°F = ${celsius} °C`);
  }
};
convertirGrados();
convertirGrados("25");
convertirGrados(20);
convertirGrados(20, true);
convertirGrados(33, "C");
convertirGrados(28, "F"); */

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */
/* const converBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) {
    return console.warn("No ingresaste el numero a convertir");
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} no es un numero`);
  }

  if (base === undefined) {
    return console.warn("No ingresaste la base a convertir");
  }

  if (typeof base !== "number") {
    return console.error(`La valor ${base} de la base no es un numero`);
  }

  if (base !== 10 && base != 2) {
    return console.error("La base no esta dentro de los valores permitidos");
  }

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  }

  if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero.toString(2))} base 2`
    );
  }
};
// converBinarioDecimal();
// converBinarioDecimal(21);
// converBinarioDecimal("414");
// converBinarioDecimal(25);
// converBinarioDecimal(25, "10");
// converBinarioDecimal(100101, 2);
// converBinarioDecimal(37, 10);
// converBinarioDecimal(100, 15); */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
/* const montoFinal = (cantidad = undefined, descuento = 0) => {
  if (cantidad === undefined) {
    return console.warn("No ingresaste la cantidad");
  }

  if (typeof cantidad !== "number") {
    return console.error(`El valor ${cantidad} no es un numero`);
  }

  if (cantidad === 0) {
    return console.error(`La cantidad no puede ser cero`);
  }

  if (Math.sign(cantidad) === -1) {
    return console.error("No puede ingresar numeros negativos");
  }

  if (descuento === undefined) {
    return console.warn("No ingresaste el porcentaje");
  }

  if (typeof descuento !== "number") {
    return console.error(
      `EL valor ${descuento} del porcentaje no es un numero`
    );
  }

  if (Math.sign(descuento) === -1) {
    return console.error("No puede ingresar porcentajes negativos");
  }

  return console.info(
    `Cantidad: $${cantidad}, descuento: ${descuento}%. Monto final: $${
      cantidad - cantidad * (descuento / 100)
    }`
  );
};

// montoFinal();
// montoFinal(1000);
// montoFinal(-1000);
// montoFinal("1000");
// montoFinal(1000);
// montoFinal(1000, "25");
// montoFinal(1000, -25);
// montoFinal(1000, 20); */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */
/* const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.log("No ingresaste una fecha");

  if (!(fecha instanceof Date)) {
    return console.log("El valor no es una fecha valida");
  }

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} anios desde la fecha ${fecha.getFullYear()}`
      )
    : console.log(`"Estamos en el anio actual ${aniosHumanos}"`);
};

// calcularAnios();
// calcularAnios({});
// calcularAnios(true);
// calcularAnios(new Date());
// calcularAnios(new Date(2050, 10, 11)); */

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
/* const cuentaLetras = (cadena = undefined) => {
  if (cadena === undefined) {
    return console.warn("No ingresaste la cadena");
  }

  if (typeof cadena !== "string") {
    return console.error(`El valor ${cadena} ingresado no valida`);
  }

  //RegExp que acepta vocales (mayús/minús)
  const patronVocales = /[aeiouáéíóú]/i;
  //RegExp que acepta consonantes (mayús/minús)
  const patronConsonantes = /[bcdfghjklmnñpqrstvwxyz]/i;
  let vocales = 0;
  let consonantes = 0;

     //Una forma: usando el metodo match que evalua expresiones regulares
  let voc = cadena.match(/[aeiouáéíóú]/gi).length;
  let conso = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length;
  console.log(voc);
  console.log(conso); 

  //Recorriendo con un ciclo for tradicional
     for (let i = 0; i < cadena.length; i++) {
    if (patronVocales.test(cadena[i])) {
      vocales++;
    }

    if (patronConsonantes.test(cadena[i])) {
      consonantes++;
    }
  } 

  //Recorriendo con un for of en objetos que son iterables
  for (const letra of cadena) {
    if (patronVocales.test(letra)) {
      vocales++;
    }

    if (patronConsonantes.test(letra)) {
      consonantes++;
    }
  }

  return console.info({ cadena, vocales, consonantes });
};
cuentaLetras();
cuentaLetras(5);
cuentaLetras("CONTADÓRES De VoCáLéS Y CÓNSONANTES"); */

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */
/* const validarNombre = (nombre = undefined) => {
  if (nombre === undefined) {
    return console.warn("No ingresaste un nombre");
  }

  if (typeof nombre !== "string") {
    return console.error(`El valor ${nombre} ingresado no es valido`);
  }

  let regExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

  return regExp
    ? console.info(`${nombre}, es valido`)
    : console.info(`${nombre}, NO es valido`);
};

// validarNombre();
// validarNombre(615);
// validarNombre("Jean Carlos");
// validarNombre("Jean Carlos, 26"); */

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
/* const validarEmail = (email = undefined) => {
  if (email === undefined) {
    return console.warn("No ingresaste un email");
  }

  if (typeof email !== "string") {
    return console.error(
      `El valor ${email} ingresado no es una cadena de texto`
    );
  }

  let regExp =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return regExp
    ? console.info(`"${email}" es un email valido`)
    : console.info(`"${email}" NO es un email valido`);
};

// validarEmail();
// validarEmail(34);
// validarEmail();
// validarEmail("jeancarlostrejo@unet.edu.ve");
// validarEmail("jeancarlostrejo@unet"); */

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */
/* const elevarCuadrado = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }

  //Validamos que los valores del arreglo sean numeros
  for (const numero of arr) {
    if (typeof numero !== "number") {
      return console.error(`El valor "${numero}" NO es un numero`);
    }
  }
  const newArr = arr.map((el) => el * el);
  return console.info(
    `Arreglo original: ${arr}\nArreglo elevado al cuadrado: ${newArr}`
  );
};

// elevarCuadrado();
// elevarCuadrado({});
// elevarCuadrado([3, 4, 8, 9, "pera"]);
// elevarCuadrado([4, 5, 2, 1, 10, 14]); */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */
/* const arrMinMax = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }

  //Validamos que los valores del arreglo sean numeros
  for (const numero of arr) {
    if (typeof numero !== "number") {
      return console.error(`El valor "${numero}" NO es un numero`);
    }
  }

  return console.info(
    `Arreglo original: ${arr}\nValor minimo: ${Math.min(
      ...arr
    )}\nValor mayor: ${Math.max(...arr)}`
  );
};

// arrMinMax();
// arrMinMax({});
// arrMinMax([]);
// arrMinMax(true);
// arrMinMax([2, 5, "8"]);
// arrMinMax([49, 4156, 74, 161, 874, 0, -2]); */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */
/* const arrsParImpar = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }

  //Validamos que los valores del arreglo sean numeros
  for (const numero of arr) {
    if (typeof numero !== "number") {
      return console.error(`El valor "${numero}" NO es un numero`);
    }
  }
  // const pares = arr.filter((el) => el % 2 === 0);
  // const impares = arr.filter((el) => el % 2 !== 0);

  return console.info({
    arr,
    pares: arr.filter((el) => el % 2 === 0),
    impares: arr.filter((el) => el % 2 !== 0),
  });
};

// arrsParImpar();
// arrsParImpar(false);
// arrsParImpar([]);
// arrsParImpar([1, 2, 3, 4, 5, 6, 7, 8, "pera"]);
// arrsParImpar([5, 2, 3, 6, 4, 7, 13, 17, 14, 20]);
 */
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/
/* const arrsAscDesc = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }

  //Validamos que los valores del arreglo sean numeros
  for (const numero of arr) {
    if (typeof numero !== "number") {
      return console.error(`El valor "${numero}" NO es un numero`);
    }
  }

  return console.log({
    arreglo: arr,
    ascendente: [...arr].sort((a, b) => a - b), //Si bien el metodo sort() es mutable (modifica el arreglo original) con el uso del spread operator se puede sacar una copia para que el original no se vea afectado.
    descendente: [...arr].sort((a, b) => b - a),
  });
};

// arrsAscDesc();
// arrsAscDesc([]);
// arrsAscDesc({});
// arrsAscDesc([2, 5, 8, 9, 15, 484, 15, 53, 1]); */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */
/* const eliminarDuplicados = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }
  if (arr.length === 1) {
    return console.error("El arreglo debe tener almenos 2 elementos");
  }

  //   return console.info({
  //   arreglo: arr,
  //   sinDuplicados: arr.filter(
  //     (value, index, arr) => arr.indexOf(value) === index
  //   ),
  // });

  return console.info({
    arreglo: arr,
    sinDuplicados: [...new Set(arr)],
  });
};

// eliminarDuplicados();
// eliminarDuplicados({});
// eliminarDuplicados([]);
// eliminarDuplicados([5]);
// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]); */

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */
/* const promedio = (arr = undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de numeros ");
  }

  //Validamos que sea una instancia de Array
  if (!(arr instanceof Array)) {
    return console.error("Es valor ingresado no es un arreglo");
  }

  //Validamos que el arreglo no este vacio
  if (arr.length === 0) {
    return console.error("El arreglo esta vacio");
  }

  //Validamos que los valores del arreglo sean numeros
  for (const numero of arr) {
    if (typeof numero !== "number") {
      return console.error(`El valor "${numero}" NO es un numero`);
    }
  }

  return console.info({
    arreglo: arr,
    promedio:
      arr.reduce((acumulador, actual) => acumulador + actual) / arr.length,
  });
};
// promedio();
// promedio({});
// promedio([]);
// promedio([1, 2, 3, "4"]);
//promedio([9, 8, 7, 6, 5, 45, 3, 2, 1, 0]); */

/* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */

/* class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = this.validarIMDB(id);
    this.titulo = this.validarTitulo(titulo);
    this.director = this.validarDirector(director);
    this.estreno = this.validarAnioEstreno(estreno);
    this.pais = this.validarPais(pais);
    this.generos = this.validarGeneros(generos);
    this.calificacion = this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad}  esta vacio`);
    }

    if (typeof valor !== "string") {
      return console.error(`${propiedad} "${valor}" NO es una cadena`);
    }
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) {
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`
      );
    }

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} esta vacio`);
    }

    if (typeof valor !== "number") {
      return console.error(`${propiedad} "${valor}"  NO es un numero`);
    }
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (valor === undefined) {
      return console.warn(`${propiedad} esta vacio`);
    }

    //Validamos que sea una instancia de Array
    if (!(valor instanceof Array)) {
      return console.error(`${propiedad} "${valor}" No es un arreglo`);
    }

    //Validamos que el arreglo no este vacio
    if (valor.length === 0) {
      return console.error(`${propiedad} "${valor}" no tiene datos`);
    }

    //Validamos que los valores del arreglo sean strings
    for (const cadena of valor) {
      if (typeof cadena !== "string") {
        return console.error(`El valor "${cadena}" NO es un cadena de texto`);
      }
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id "${id}" NO es valido, debe tener 9 caracteres: los 2 primeros letras y los 7 restantes numeros`
        );
      }

      return id;
    }

    return undefined;
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      if (this.validarLongitudCadena("Titulo", titulo, 100)) {
        return titulo;
      }
      return undefined;
    }

    return undefined;
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      if (this.validarLongitudCadena("Director", director, 50)) {
        return director;
      }
      return undefined;
    }

    return undefined;
  }

  validarAnioEstreno(estreno) {
    if (this.validarNumero("Estreno", estreno)) {
      if (Math.sign(estreno) === -1) {
        return console.error("No se permiten numeros negativo");
      }

      if (!/^[0-9]{4}$/.test(estreno)) {
        return console.error(
          `El anho de estreno "${estreno}" debe ser un numero de 4 digitos`
        );
      }

      return estreno;
    }

    return undefined;
  }

  validarPais(pais) {
    if (this.validarArreglo("Pais", pais)) {
      return pais;
    }
    return undefined;
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
          return undefined;
        }
      }
      return generos;
    }
    return undefined;
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      if (Math.sign(calificacion) === -1) {
        return console.error("No se permiten numeros negativo");
      }

      return calificacion < 0 || calificacion > 10
        ? console.error("La calificacion tiene que estar entre 0 y 10")
        : calificacion.toFixed(1);
    }

    return undefined;
  }

  fichaTecnica() {
    return console.info(
      `*****Ficha Tecnica*****\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAnio: "${this.estreno}"\nPais: "${this.pais}"\nGeneros: "${this.generos}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`
    );
  }
}

//Pelicula.generosAceptados();
const peli = new Pelicula({
  id: "tt4877877",
  titulo: "El efecto mariposa",
  director: "Jean Carlos Villamizar ",
  estreno: 2021,
  pais: ["Venezuela", "Mexico"],
  generos: ["Comedy", "Sci-Fi"],
  calificacion: 8.15,
});

const misPelis = [
  {
    id: "tt0485947",
    titulo: "Las vidas posibles de Mr. Nobody",
    director: "Jaco Van Dormael",
    estreno: 2009,
    pais: ["Estados Unidos", "Inglaterra"],
    generos: ["Fantasy", "Sci-Fi"],
    calificacion: 7.89,
  },
  {
    id: "tt0903747",
    titulo: "Breaking Bad",
    director: "Vince Gilligan",
    estreno: 2008,
    pais: ["Estados Unidos"],
    generos: ["Crime", "Drama"],
    calificacion: 9.5,
  },
  {
    id: "tt4154796",
    titulo: "Avengers: End Game",
    director: "Anthonny Russo & Joe Russo",
    estreno: 2019,
    pais: ["USA"],
    generos: ["Adventure", "Drama", "Action"],
    calificacion: 8.34,
  },
];
// console.log(peli);
// peli.fichaTecnica();
// misPelis.forEach((el) => new Pelicula(el).fichaTecnica()); */
