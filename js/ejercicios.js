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
