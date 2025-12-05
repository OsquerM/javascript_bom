function crearVentana() {
    miVentana = window.open("", "", "width=1280,height=720,resizable=yes,scrollbars=yes");

    // Contenido principal
    miVentana.document.write("<h1>Mi ventana 1280x720</h1>");

    // Crear botón Maximizar
    let botonMax = miVentana.document.createElement("button");
    botonMax.textContent = "Maximizar";
    

    // Añadir botón al body
    miVentana.document.body.appendChild(botonMax);

    // Función para maximizar
    botonMax.addEventListener("click", () => {
        miVentana.resizeTo(screen.width, screen.height);
    });
}

document.getElementById("crearVentana").addEventListener("click", crearVentana);
