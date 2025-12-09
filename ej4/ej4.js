// Función para obtener un valor aleatorio 0,1,2
function generarValorAleatorio() {
    return Math.floor(Math.random() * 3);
}

// Función que redirige según el valor aleatorio
function redirigirWebmail() {
    const valor = generarValorAleatorio();

    switch(valor) {
        case 0:
            window.location.href = "https://login.live.com/"; // Hotmail / Outlook
            break;
        case 1:
            window.location.href = "https://accounts.google.com/signin"; // Gmail
            break;
        case 2:
            window.location.href = "https://www.correos.es/"; // Servicio de Correos
            break;
    }
}

// Inicializar evento del enlace
function inicializarEnlace() {
    const enlace = document.getElementById('enlaceWebmail');
    enlace.addEventListener('click', (evento) => {
        evento.preventDefault(); // Evita que recargue la página y siga el enlace
        redirigirWebmail();
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', inicializarEnlace);
