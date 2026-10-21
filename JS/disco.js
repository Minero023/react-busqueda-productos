console.log("hola");

let nombreEstudiante = prompt("Ingrese su nombre :");
let edad = Number(prompt("Ingrese su edad :"));
let mensaje = "";

if (edad >= 18) {
    if (edad <= 25) {
        mensaje = "Tiene acceso a la farra hasta las 22 horas, bienvenido";
    } else if (edad >= 26 && edad <= 35) { // Usamos else if para optimizar
        mensaje = "Tiene acceso a la farra hasta las 00 horas, bienvenido";
    } else if (edad >= 36 && edad <= 45) {
        mensaje = "Tiene acceso a la farra hasta las 2am, bienvenido";
    } else {
        mensaje = "Eres Vip";
    }
} else {
    mensaje = "Regrese a su casa";
}

console.log("nombre estudiante=" + nombreEstudiante);

// Rellenamos los inputs automáticamente al terminar los prompt
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nombre").value = nombreEstudiante;
    document.getElementById("edad").value = edad;
    document.getElementById("mensaje").value = mensaje;
});