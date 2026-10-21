let  nombreEstudiante="Andrée"
let edad=19;
console.log("Hola soy "+nombreEstudiante+" mi edad es de "+edad+"años , este es mi primer taller JS");
//console.log('Hola soy ${nombreEstudiante} mi edad es de {edad} años y estoy mas feliz que nunca aprendiendo JS');
//Suma de tres numeros
let num1=Number(prompt("Ingresa numero 1"));
let num2=Number(prompt("Ingresa numero 2"));
let num3=Number(prompt("Ingresa numero 3"));

var suma=num1+num2+num3;
console.log("La suma es "+suma);

//capturando el control h por id
const result1= document.getElementById("resultado");
result1.textContent= "La suma es "+suma;
