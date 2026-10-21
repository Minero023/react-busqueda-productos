document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('neonForm');
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Detener el envío del formulario por defecto

    // Ocultar mensajes previos
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    // Obtener la fecha de nacimiento ingresada
    const birthDateValue = document.getElementById('birthDate').value;

    if (!birthDateValue) {
      showError('Por favor, ingresa tu fecha de nacimiento.');
      return;
    }

    // Validar edad
    const age = calculateAge(birthDateValue);

    if (age < 18) {
      showError(`Acceso denegado: Tienes ${age} años. Debes ser mayor de 18 años para registrarte.`);
      return;
    }

    // Si la validación es exitosa (es mayor de edad)
    showSuccess(`¡Registro completado! Tienes ${age} años. Te hemos enviado el código QR a tu correo.`);
    form.reset();
  });

  /**
   * Función para calcular la edad exacta en años
   * @param {string} birthDateString - Fecha en formato AAAA-MM-DD
   * @returns {number} Edad en años
   */
  function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Ajustar edad si aún no ha cumplido años en el mes/día actual
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  function showError(message) {
    errorMsg.innerText = message;
    errorMsg.style.display = 'block';
  }

  function showSuccess(message) {
    successMsg.innerText = message;
    successMsg.style.display = 'block';
  }
});