/* **********     Curso JavaScript: 33. Módulos ( import / export )     ********** */
export const PI = Math.PI;

export let usuario = "Jean Carlos";
const password = "qwerty";
//export defautl password

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola modulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola clases +ES6 ");
  }
}
