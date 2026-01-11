// ===== VARIABLES =====
const nivelMaximo = 5;
const nivelMinimo = 1;

// Elementos del DOM
const nivelTexto = document.getElementById('nivelActual');
const botonAnterior = document.getElementById('nivelAnterior');
const botonSiguiente = document.getElementById('siguienteNivel');

// ===== FUNCIONES =====

// Actualiza el nivel en la pantalla
function actualizarNivel(nivel) {
    nivelTexto.textContent = `Nivel ${nivel}`;
    // Activar/desactivar botones según nivel
    botonAnterior.disabled = nivel === nivelMinimo;
    botonSiguiente.disabled = nivel === nivelMaximo;
}

// Navegar a nivel anterior
function irNivelAnterior() {
    if (getNivelActual() > nivelMinimo) {
        const nuevoNivel = getNivelActual() - 1;
        history.pushState({nivel: nuevoNivel}, `Nivel ${nuevoNivel}`, `?nivel=${nuevoNivel}`);
        actualizarNivel(nuevoNivel);
    }
}

// Navegar a siguiente nivel
function irSiguienteNivel() {
    if (getNivelActual() < nivelMaximo) {
        const nuevoNivel = getNivelActual() + 1;
        history.pushState({nivel: nuevoNivel}, `Nivel ${nuevoNivel}`, `?nivel=${nuevoNivel}`);
        actualizarNivel(nuevoNivel);
    }
}
//PushState:
// Cambia la URL en la barra del navegador (ej. ?nivel=3)
// Guarda un estado que puedes recuperar con popstate
// No recarga la página (eso es lo que evita la recarga)
// Permite que los botones Atrás / Adelante funcionen con tu estado

// Obtener nivel actual de la URL o de la página
function getNivelActual() {
    const params = new URLSearchParams(window.location.search);
    const nivel = parseInt(params.get('nivel'));
    return isNaN(nivel) ? 1 : nivel;
}
// Esta función obtiene el nivel actual desde la URL y devuelve un valor por defecto si no es válido.

// Manejar eventos de retroceso/avance del navegador
window.addEventListener('popstate', (evento) => {
    const nivel = evento.state?.nivel || 1;
    actualizarNivel(nivel);
});
// El evento popstate permite reaccionar a la navegación del historial
// y restaurar el estado de la aplicación sin recargar la página.
// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const nivelInicial = getNivelActual();
    actualizarNivel(nivelInicial);

    botonAnterior.addEventListener('click', irNivelAnterior);
    botonSiguiente.addEventListener('click', irSiguienteNivel);
});
