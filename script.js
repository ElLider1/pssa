// Función para verificar el peso ingresado
function verificarPeso() {
    const peso = document.getElementById('pesoInput').value;
    const resultado = document.getElementById('resultado');
    const imagen = document.getElementById('imagen');
    const audio = document.getElementById('audio');

    // Validar si el peso es mayor o igual a 100
    if (peso >= 100) {
        resultado.innerHTML = ''; // Limpiar resultados previos
        imagen.classList.remove('oculto'); // Mostrar imagen
        audio.play(); // Reproducir audio
    } else if (peso < 100) {
        resultado.innerHTML = "El hueso mami entra entra"; // Mostrar mensaje
        imagen.classList.add('oculto'); // Ocultar imagen si no cumple la condición
    } else {
        resultado.innerHTML = "Por favor, ingresa un peso válido."; // Mensaje de error si no se ingresa un número
    }
}
