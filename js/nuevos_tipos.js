/* **********     Curso JavaScript: 49. Symbols     ********** */
/* let id = Symbol("id");
let id2 = Symbol("id2");
console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");
const persona = {
  [NOMBRE]: "Jean Carlos",
  edad: 26,
};
console.log(persona);
persona.NOMBRE = "Ferre";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);
persona[SALUDAR] = function () {
  console.log(`Hola`);
};
console.log(persona);
persona[SALUDAR]();
for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
console.log(Object.getOwnPropertySymbols(persona)); */

/* **********     Curso JavaScript: 50. Sets     ********** */
/* const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOla",
]);
console.log(set);
console.log(set.size);
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
console.log(set2);
console.log(set2.size);
console.log("Recorriendo set");
for (item of set) {
  console.log(item);
}
console.log("Recorriendo set2");
set2.forEach((item) => console.log(item));
let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[9]);
set.delete("HOla");
console.log(set);
console.log(set.has("hola"));
console.log(set.has(19));
set2.clear();
console.log(set2); */

/* **********     Curso JavaScript: 51. Maps     ********** */
/* const mapa = new Map();
mapa.set("nombre", "Jean Carlos");
mapa.set("apellido", "Trejo VIllamizar");
mapa.set("edad", 26);
console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Jean Carlos Trejo");
console.log(mapa.get("nombre"));
mapa.delete("apellido");
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor:${value}`);
}
const mapa2 = new Map([
  ["nombre", "Shushu"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"],
]);
console.log(mapa2);
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2); */

/* **********     Curso JavaScript: 52. WeakSets & WeakMaps     ********** */
//Esto no se hace
/* //const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);

const ws = new WeakSet();
let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };
ws.add(valor1);
ws.add(valor2);
console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor3));
ws.delete(valor2);
console.log(ws);
ws.add(valor2);
ws.add(valor3);
console.log(ws);
setInterval(() => console.log(ws), 1000);
setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000); */

/* const wm = new WeakMap([
  ["nombre", "Shushu"],
  ["edad", 4],
  ["animal", "perro"],
  [null, "nulo"],
]); */

/* const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);
console.log(wm.has(llave1));
console.log(wm.has(llave3));
console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));
wm.delete(llave2);
console.log(wm);
wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);
setInterval(() => console.log(wm), 1000);
setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000); */

/* **********     Curso JavaScript: 53. Iterables & Iterators     ********** */
/* const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "Jean"], ["edad", 26]]);
//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
let next = iterador.next();
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
} */

/* **********     Curso JavaScript: 54. Generators     ********** */
/* function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "hola 3";
  yield "hola 4";
}
let iterador = iterable();
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
for (let y of iterador) {
  console.log(y);
}
const arr = [...iterable()];
console.log(arr);
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}
function* generador() {
  console.log("Inicia Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("Termina Generator");
}
let gen = generador();
for (let y of gen) {
  console.log(y);
} */

/* **********     Curso JavaScript: 55. Proxies     ********** */
/* const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};
const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona.`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}"" sólo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = valor;
  },
};
const jean = new Proxy(persona, manejador);
jon.nombre = "Jean Carlos";
jon.apellido = "Trejo";
jon.edad = 26;
jon.twitter = "@iFerre_11";
console.log(jean);
console.log(persona); */

/* **********     Curso JavaScript: 56. Propiedades Dinámicas     ********** */
/* let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuarios);
const usuarios = ["Jean", "Jose", "Maria", "Zoro", "Shushu"];
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));
console.log(objUsuarios); */
