let totalfactura=0;
let subtotalmostrado=0;
let iva=0;
document.getElementById("btnAgregarProducto").addEventListener("click", agregarFila);
function agregarFila(){
    // Obteniendo valores
    let producto = document.getElementById("producto").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    let subtotal = cantidad * precio; 
    subtotalmostrado += subtotal;
    iva = subtotalmostrado*0.15;
    totalfactura =subtotalmostrado+iva;
    // Crear fila
    const filaNueva = document.createElement("tr");
    
    // Llenar fila con los datos
    filaNueva.innerHTML = `<td>${producto}</td><td>${cantidad}</td><td>${precio}</td><td>${subtotal}</td>`;
    
    // Colocar fila en la tabla
    document.getElementById("detalleFactura").appendChild(filaNueva);
    document.getElementById("IVA").innerHTML="El total del iva es: "+iva;
    document.getElementById("totalf").innerHTML="El total a pagar es: "+totalfactura;
    document.getElementById("subtotalm").innerHTML="El subtotal es de: "+subtotalmostrado;
}
