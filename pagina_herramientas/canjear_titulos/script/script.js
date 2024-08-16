//Llamado de funciones
CrearCardsCanjearTitulos(monumentos, "Monumentos")
CrearCardsCanjearTitulos(hitos, "Hitos")
botonSeleccionar(monumentos, "Monumentos")
botonSeleccionar(hitos, "Hitos")

function CrearCardsCanjearTitulos(titulos, nombre) {
        let contenedorTitulos = document.getElementById("titles-container")

        let nombreTitulos = document.createElement("h1")
        let nombreTitulostext = document.createTextNode(nombre)
        nombreTitulos.appendChild(nombreTitulostext)
        contenedorTitulos.appendChild(nombreTitulos)

        titulos.forEach(titulo => {
                //Accedo al contenedor general

                // Crear div container text-center 
                let containerTextCenter = document.createElement("div")
                containerTextCenter.classList.add("container", "text-center")
                contenedorTitulos.appendChild(containerTextCenter)

                // Crear div row 
                let row = document.createElement("div")
                row.classList.add("row")
                row.classList.add("row-audio")
                containerTextCenter.appendChild(row)

                // Crear div col y nombre del título
                let col1 = document.createElement("div")
                col1.classList.add("col")
                row.appendChild(col1)
                let nombreAudio = document.createElement("p")
                col1.classList.add("nombre-canjeables")
                let nombreAudioTexto = document.createTextNode(titulo.nombre)
                nombreAudio.appendChild(nombreAudioTexto)
                col1.appendChild(nombreAudio)

                // Crear div col y descripción del tíulo
                let col2 = document.createElement("div")
                col2.classList.add("col")
                row.appendChild(col2)
                col2.classList.add("decripcion-titulo")
                let descripcion = document.createElement("p")
                let descripcionTexto = document.createTextNode(titulo.descripcion)
                descripcion.appendChild(descripcionTexto)
                col2.appendChild(descripcion)

                // Crear div col y botón
                let col3 = document.createElement("div")
                col3.classList.add("col")
                col3.classList.add("col-input")
                row.appendChild(col3)
                let btnSeleccionar = document.createElement("input")
                btnSeleccionar.classList.add("btn-seleccionar" + nombre, "btn-seleccionar")
                btnSeleccionar.setAttribute("type", "button")
                btnSeleccionar.setAttribute("value", "Seleccionar")
                col3.appendChild(btnSeleccionar)

                // Botón quitar selección
                let btnQuitarSeleccion = document.createElement("input")
                btnQuitarSeleccion.classList.add("btn-quitar-seleccion" + nombre, "btn-quitar-seleccion")
                btnQuitarSeleccion.setAttribute("type", "button")
                btnQuitarSeleccion.setAttribute("value", "X")
                col3.appendChild(btnQuitarSeleccion)
        });
}

function botonSeleccionar(titulo, nombre) {
        let btnSeleccionar = document.getElementsByClassName("btn-seleccionar" + nombre);
        let btnQuitarSeleccionar = document.getElementsByClassName("btn-quitar-seleccion" + nombre);
        let textarea = document.getElementById("textarea-solicitud-titulo");

        for (let i = 0; i < btnSeleccionar.length; i++) {
                btnSeleccionar[i].addEventListener("click", () => {
                        btnSeleccionar[i].value = "Seleccionado ✔";
                        btnSeleccionar[i].classList.add("btn-seleccionado");
                        btnSeleccionar[i].setAttribute("disabled", "disabled");

                        textarea.value += `-${titulo[i].nombre}\n`;
                });

                btnQuitarSeleccionar[i].addEventListener("click", () => {
                        btnSeleccionar[i].value = "Seleccionar";
                        btnSeleccionar[i].classList.remove("btn-seleccionado");
                        btnSeleccionar[i].removeAttribute("disabled");

                        const lines = textarea.value.split('\n');
                        const titleToRemove = `-${titulo[i].nombre}`;
                        const index = lines.indexOf(titleToRemove);
                        if (index > -1) {
                                lines.splice(index, 1);
                        }
                        textarea.value = lines.join('\n');
                });
        }
}

// Botoón canjear título
let btnCanjearTitulo = document.getElementById("btn-canjear-titulo")
btnCanjearTitulo.addEventListener("click", () => {
        let btnVolver = document.getElementById("btn-volver-titulo")
        let contenedorTitulos = document.getElementById("titles-container")
        let contenedorForm = document.getElementById("div-form-titulo")
        contenedorForm.classList.remove("ocultar")
        contenedorTitulos.classList.add("ocultar")
        btnCanjearTitulo.classList.add("ocultar")
        btnVolver.classList.remove("ocultar")

        btnVolver.addEventListener("click", () => {
                contenedorTitulos.classList.remove("ocultar")
                btnVolver.classList.add("ocultar")
                btnCanjearTitulo.classList.remove("ocultar")
                contenedorForm.classList.add("ocultar")
        })
})

// Enviar forumalario de sonidos a discord
let btnEnviarSolicitud = document.getElementById("btn-enviar-solicitud")
btnEnviarSolicitud.addEventListener("click", message)
function message() {
        let nickname = document.getElementById("nickname-solicitud-titulo")
        let textArea = document.getElementById("textarea-solicitud-titulo")
        fetch('https://discordapp.com/api/webhooks/1273047747808989255/TGPL8_w6NtQqWXHrchtp-oB5M8qhqFzU6LXY9KF6yZirPkg8FdHvuEC7DTVIXs7cjzm9', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        content: `----------------------------------- \nNombre:  ${nickname.value}\nDeseo canjear:\n${textArea.value}\n-----------------------------------`
                })
        })
        btnEnviarSolicitud.value = ("Enviado ✔")
        btnEnviarSolicitud.setAttribute ("disabled", "disabled")
        btnEnviarSolicitud.classList.add ("btn-enviar-seleccionado")

        nickname.setAttribute ("disabled", "disabled")
}