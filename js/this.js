/* **********     Curso JavaScript: 57. this     ********** */
/* console.log(this);
// console.log(window);
// console.log(this === window);
this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre: "Contexto Objeto",
  impimir: function () {
    console.log(this.nombre);
  },
};

obj.impimir();

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  const that = this;
  //this.nombre = nombre;
  that.nombre = nombre;
  //return console.log(this.nombre);
  //return function () {
  //console.log(this.nombre);
  //}
  //return () => console.log(this.nombre);
  return function () {
    console.log(that.nombre);
  };
}

let jean = new Persona("Jean Carlos");
jean(); */

/* **********     Curso JavaScript: 58. call, apply, bind     ********** */
/* console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "Shushu");

const obj = {
  lugar: " Contexto Objeto ",
};

saludar.call(obj, "Hola", "Jean Carlos");
//Con null va al contexto global en este caso
saludar.call(null, "Hola", "Jean Carlos");
saludar.call(this, "Hola", "Jean Carlos");
saludar.apply(obj, ["Adios", "Jean"]);
saludar.apply(null, ["Adios", "Jean"]);
saludar.apply(this, ["Adios", "Jean"]);

const persona = {
  nombre: "Jean Carlos Trejo",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  saludar: persona.saludar,
};

otraPersona.saludar(); */
