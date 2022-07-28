/* **********     Curso JavaScript: 33. Módulos ( import / export )     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { restar, sumar, aritmetica as calculos } from "./aritmetica.js";

console.log("Los modulos en js");
console.log(`El valor de PI: ${PI}`);
console.log(`Usuario es: ${usuario}`);

console.log(sumar(5, 5));
console.log(restar(25, 13));
console.log(calculos.sumar(105, 65));
console.log(calculos.restar(80, 50));
saludar();
let saludo = new Saludar();
saludo;
