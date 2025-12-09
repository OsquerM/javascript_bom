// Detectar el navegador
function obtenerNombreNavegador() {
    const agenteUsuario = navigator.userAgent.toLowerCase();

    if ((agenteUsuario.includes("chrome") || agenteUsuario.includes("crios")) && !agenteUsuario.includes("edg")) {
        return "Google Chrome";
    }
    if (agenteUsuario.includes("firefox")) {
        return "Mozilla Firefox";
    }
    if (agenteUsuario.includes("safari") && !agenteUsuario.includes("chrome")) {
        return "Apple Safari";
    }
    if (agenteUsuario.includes("edg")) {
        return "Microsoft Edge";
    }
    if (agenteUsuario.includes("opera") || agenteUsuario.includes("opr")) {
        return "Opera";
    }
    return "Desconocido";
}

// Obtener versión del navegador
function obtenerVersionNavegador() {
    const agenteUsuario = navigator.userAgent;
    const navegador = obtenerNombreNavegador();
    let coincidencia;

    switch (navegador) {
        case "Google Chrome":
            coincidencia = agenteUsuario.match(/Chrome\/([\d.]+)/);
            break;
        case "Mozilla Firefox":
            coincidencia = agenteUsuario.match(/Firefox\/([\d.]+)/);
            break;
        case "Apple Safari":
            coincidencia = agenteUsuario.match(/Version\/([\d.]+)/);
            break;
        case "Microsoft Edge":
            coincidencia = agenteUsuario.match(/Edg\/([\d.]+)/);
            break;
        case "Opera":
            coincidencia = agenteUsuario.match(/(Opera|OPR)\/([\d.]+)/);
            break;
        default:
            coincidencia = ["", "desconocida"];
    }
    return coincidencia ? coincidencia[1] : "desconocida";
}

// Abrir ventana de descarga
function abrirVentanaDescarga() {
    const alturaMaxima = window.screen.availHeight;
    const anchoVentana = 500;
    const posicionIzquierda = (window.screen.width - anchoVentana) / 2;

    const navegador = obtenerNombreNavegador();
    const version = obtenerVersionNavegador();

    // Pasar datos al HTML de descarga
    const urlDescarga = `descarga.html?navegador=${encodeURIComponent(navegador)}&version=${encodeURIComponent(version)}`;

    const ventanaDescarga = window.open(
        urlDescarga,
        'Descarga',
        `width=${anchoVentana},height=${alturaMaxima},top=0,left=${posicionIzquierda},resizable=yes,scrollbars=yes`
    );

    if (!ventanaDescarga) {
        alert("Por favor, permite ventanas emergentes para este sitio.");
    }
}

// Inicializar el botón de descarga
document.addEventListener('DOMContentLoaded', () => {
    const botonDescargar = document.getElementById('descargar');
    botonDescargar.addEventListener('click', abrirVentanaDescarga);
});
