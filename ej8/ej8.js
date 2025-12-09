// ===== VARIABLES =====
const nivelMinimo = 1;
const nivelMaximo = 5;
let nivelActual = 1;

// Elementos del DOM
const nivelTexto = document.getElementById('nivelActual');
const botonAnterior = document.getElementById('nivelAnterior');
const botonSiguiente = document.getElementById('siguienteNivel');
const imagenNivel = document.getElementById('imagenNivel');
const botonJugar = document.getElementById('jugarNivel');

const imagenesPorNivel = {
    1: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg"
};

// ===== FUNCIONES =====
function actualizarNivel(nuevoNivel) {
    nivelActual = nuevoNivel;
    nivelTexto.textContent = `Nivel ${nivelActual}`;
    botonAnterior.disabled = nivelActual === nivelMinimo;
    botonSiguiente.disabled = nivelActual === nivelMaximo;

    imagenNivel.src = imagenesPorNivel[nivelActual] || "";
    botonJugar.textContent = `Jugar al nivel ${nivelActual}`;
}

function irNivelAnterior() {
    if (nivelActual > nivelMinimo) {
        actualizarNivel(nivelActual - 1);
        history.pushState({nivel: nivelActual}, `Nivel ${nivelActual}`, `?nivel=${nivelActual}`);
    }
}

function irSiguienteNivel() {
    if (nivelActual < nivelMaximo) {
        actualizarNivel(nivelActual + 1);
        history.pushState({nivel: nivelActual}, `Nivel ${nivelActual}`, `?nivel=${nivelActual}`);
    }
}

function jugarNivel() {
    const ancho = 500;
    const alto = 500;
    const izquierda = (window.screen.width - ancho) / 2;
    const arriba = (window.screen.height - alto) / 2;

    const nuevaVentana = window.open(
        'Buscaminas.html',
        'Buscaminas',
        `width=${ancho},height=${alto},top=${arriba},left=${izquierda},resizable=yes`
    );

    if (nuevaVentana) {
        setTimeout(() => {
            nuevaVentana.postMessage({nivel: nivelActual}, '*');
        }, 100);
    } else {
        alert("Activa las ventanas emergentes para este sitio");
    }
}

// Manejar retroceso/avance del navegador
window.addEventListener('popstate', (evento) => {
    const nivel = evento.state?.nivel || nivelMinimo;
    actualizarNivel(nivel);
});

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nivelUrl = parseInt(params.get('nivel'));
    nivelActual = !isNaN(nivelUrl) ? nivelUrl : 1;
    actualizarNivel(nivelActual);

    botonAnterior.addEventListener('click', irNivelAnterior);
    botonSiguiente.addEventListener('click', irSiguienteNivel);
    botonJugar.addEventListener('click', jugarNivel);
});
