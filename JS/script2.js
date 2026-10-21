//Tabla  de multiplicar de un número x
//let num= Number(prompt("Ingresa el número"))
//capturar la etiqueta
//const result=document.getElementById("resultado");
//result.innerHTML="";
//for(let i=1;i<=10;i++){
    //console.log(":"+num+"*"+i+"="+num*i)
    //result.innerHTML+=": "+num+"*"+i+" = "+(num*i)+"<br>";
//}

//Tabla  de multiplicar de un número x a otro numero y
let num= Number(prompt("Ingresa el número de inicio"))
let num1= Number(prompt("Ingresa el número del fin"))
//capturar la etiqueta
const result = document.getElementById("cuerpoTabla");
//const result=document.getElementById("resultado");
//result.innerHTML="";
let filasHTML = "";
while(num<=num1){
    //for(let i=1;i<=10;i++){
        //result.innerHTML+=": "+num+"*"+i+" = "+(num*i)+"<br>";  
    //}

    //hecho en lugar de en un h3 en una tabla
    for (let i = 1; i <= 10; i++) {
        filasHTML += `<tr>
            <td>${num}</td>
            <td>${i}</td>
            <td>${num * i}</td>
        </tr>`;
    }
    num+=1;
    
}
result.innerHTML = filasHTML;

//capturando los valores de los inputs
document.getElementById("btnsumanr").addEventListener("click", function(){
    let nume1=parseInt(document.getElementById("n1").value);
    let nume2=parseInt(document.getElementById("n2").value);

    let suma = nume1+nume2;

    const resulth2 = document.getElementById("resulsum").innerHTML="La suma es: "+suma;


});


//TALLER EN CLASE
document.getElementById("btncalcular").addEventListener("click", function(){
    let nume3=parseInt(document.getElementById("n3").value);
    let nume4=parseFloat(document.getElementById("n4").value);

    let mul =nume4*nume4;
    let cal = nume3/mul;

    const calculo = document.getElementById("resulsum1").innerHTML="El imc es: "+cal;

    const calculo2=document.getElementById("resulsum2");
    let respuesta1 = "";

    if(cal<=18.5){
        respuesta1="El tiene bajo peso"
        calculo2.innerHTML=respuesta1;

    }
    if(cal>18.5){
        if(cal<=24.9){
            respuesta1="El tiene peso saludable"
            calculo2.innerHTML=respuesta1;
        }
    }


});

