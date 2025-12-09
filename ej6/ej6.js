// Función para cambiar el estilo del párrafo
function cambiarEstiloParrafo() {
    const parrafo = document.getElementById('parrafo');
    parrafo.style.color = "blue";
    parrafo.style.fontSize = "25px";
}

// Inicializar evento del botón
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('cambiarEstilo');
    boton.addEventListener('click', cambiarEstiloParrafo);
});
