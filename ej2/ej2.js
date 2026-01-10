function crearVentana() {
    const miVentana = window.open("", "", "width=1280,height=720,resizable=yes,scrollbars=yes");
    //resizable=yes permite redimensionar la ventana
    //scrollbars=yes añade barras de desplazamiento si el contenido es mayor que la ventana
    // Contenido principal
    miVentana.document.write("<h1>Mi ventana 1280x720</h1>");

    // Crear botón Maximizar/Minimizar
    const botonToggle = miVentana.document.createElement("button");
    botonToggle.textContent = "Maximizar";

    // Añadir botón al body
    miVentana.document.body.appendChild(botonToggle);

    // Estado actual de la ventana
    let maximizada = false;
    const margin = 50; // margen de 50px

    botonToggle.addEventListener("click", () => {
        if (!maximizada) {
            // Maximizar ventana
            miVentana.resizeTo(screen.width, screen.height);
            botonToggle.textContent = "Minimizar";
            maximizada = true;
        } else {
            // Minimizar ventana centrada con margen de 50px
            const ancho = screen.width - margin * 2;
            const alto = screen.height - margin * 2;
            miVentana.resizeTo(ancho, alto);
            miVentana.moveTo(margin, margin); // 50px arriba e izquierda
            botonToggle.textContent = "Maximizar";
            maximizada = false;
        }
    });
}

document.getElementById("crearVentana").addEventListener("click", crearVentana);
