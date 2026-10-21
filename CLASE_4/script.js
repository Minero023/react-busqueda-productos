alert("hola mundo")
alert("hola Jona")
console.log("hola sript");
let nombreEstudiante="Jonathan";
let edad=21;

console.log("hola soy: "+nombreEstudiante+" y mi edad es de: "+edad+" Este es mi primer taller JS");

console.log(`hola soy: ${nombreEstudiante} y mi edad es de: ${+edad} Este es mi primer taller JS`);

//SUMA DE TRES

let num1=Number(prompt("ingrese num 1"));
let num2=Number(prompt("ingrese num 2"));
let num3=Number(prompt("ingrese num 3"));

var suma=num1+num2+num3;
console.log('la suma es: '+suma)

const resul=document.getElementById("resultado");
resul.textContent="SUMA VA A SER"+suma;
