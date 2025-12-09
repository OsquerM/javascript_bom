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

// Obtener nivel actual de la URL o de la página
function getNivelActual() {
    const params = new URLSearchParams(window.location.search);
    const nivel = parseInt(params.get('nivel'));
    return isNaN(nivel) ? 1 : nivel;
}

// Manejar eventos de retroceso/avance del navegador
window.addEventListener('popstate', (evento) => {
    const nivel = evento.state?.nivel || 1;
    actualizarNivel(nivel);
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const nivelInicial = getNivelActual();
    actualizarNivel(nivelInicial);

    botonAnterior.addEventListener('click', irNivelAnterior);
    botonSiguiente.addEventListener('click', irSiguienteNivel);
});
