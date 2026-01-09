function crearVentana() {
    miVentana = window.open("", "", "width=1280,height=720");
    miVentana.document.write("<h1>Mi ventana 1280x720</h1>");
}

document.getElementById("crearVentana").addEventListener("click", crearVentana);




// Terminarlo