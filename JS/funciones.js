document.getElementById("calcularTotal").addEventListener("click", function(){

    let precio=Number(document.getElementById("precio").value);
    let total = calcularTotal(precio);

    //Captura la etiqueta total
    document.getElementById("totalf").innerHTML="El total a pagar es: "+total;
});

//Esta funcion me calcula el 15 porciento de IVA
function calcularIVA(precio){
    return precio*0.15;

}

//Esta funcion me calcula el precio total
function calcularTotal(precio){
    return precio+calcularIVA(precio);
}