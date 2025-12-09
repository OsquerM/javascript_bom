// ===== FUNCIONES =====

// 1️⃣ Recuperar el segundo párrafo usando distintos métodos
function obtenerSegundoParrafo() {
    let parrafosDiv = document.getElementById('parrafos');

    let p2_byId = document.getElementsByTagName('p')[1];
    console.log(p2_byId.textContent + " obtenido mediante getElementsByTagName");

    let p2_byClass = document.getElementsByClassName('parrafo')[1]; // no tenemos clase, se podría añadir
    console.log(p2_byClass ? p2_byClass.textContent + " obtenido mediante getElementsByClassName" : "No hay clase asignada");

    let p2_byQuerySelector = document.querySelector('#parrafos p:nth-of-type(2)');
    console.log(p2_byQuerySelector.textContent + " obtenido mediante querySelector");

    let p2_byQuerySelectorAll = document.querySelectorAll('#parrafos p')[1];
    console.log(p2_byQuerySelectorAll.textContent + " obtenido mediante querySelectorAll");
}

// 2️⃣ Modificar segundo y tercer párrafo
function modificar2y3() {
    let parrafos = document.querySelectorAll('#parrafos p');
    if(parrafos[1]) parrafos[1].textContent = "Éste es el nuevo contenido del segundo párrafo";
    if(parrafos[2]) parrafos[2].innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>";
}

// 3️⃣ Eliminar cuarto párrafo
function eliminar4() {
    let parrafos = document.querySelectorAll('#parrafos p');
    if(parrafos[3]) parrafos[3].remove();
}

// 4️⃣ Crear un nuevo párrafo al final
function crearParrafo() {
    let divParrafos = document.getElementById('parrafos');
    let nuevoP = document.createElement('p');
    nuevoP.textContent = "Nuevo párrafo creado mediante botón";
    divParrafos.appendChild(nuevoP);
}

// 5️⃣ Crear párrafo adicional sobre innerHTML y textContent en tercer lugar
function crearParrafoInnerText() {
    let divParrafos = document.getElementById('parrafos');
    let p = document.createElement('p');
    p.textContent = "La diferencia entre innerHTML y textContent es que innerHTML permite insertar HTML mientras que textContent solo inserta texto.";
    divParrafos.insertBefore(p, divParrafos.children[2]); // Tercer lugar
}

// 6️⃣ Modificar imagen
function modificarImagen() {
    let img = document.getElementById('imagenPrincipal');
    img.src = "https://cdn-icons-png.flaticon.com/512/888/888879.png"; // nueva imagen
}

// 7️⃣ Modificar formulario
function modificarFormulario() {
    let labelNombre = document.querySelector('#formulario label[for="nombre"]');
    if(labelNombre) labelNombre.textContent = "Año de nacimiento:";
}

// 8️⃣ Usar document.write
function usarDocumentWrite() {
    document.write("Esto es lo que pasa por usar el método document.write una vez la página se ha cargado");
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar segundo párrafo por distintos métodos
    obtenerSegundoParrafo();

    // Botones
    document.getElementById('modificar2y3').addEventListener('click', modificar2y3);
    document.getElementById('eliminar4').addEventListener('click', eliminar4);
    document.getElementById('crearParrafo').addEventListener('click', crearParrafo);
    document.getElementById('modificarImagen').addEventListener('click', modificarImagen);
    document.getElementById('modificarFormulario').addEventListener('click', modificarFormulario);
    document.getElementById('documentWrite').addEventListener('click', usarDocumentWrite);

    // Crear el párrafo adicional de innerHTML/textContent
    crearParrafoInnerText();
});
