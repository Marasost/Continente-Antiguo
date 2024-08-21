
//Llamado de funciones
crearSelect(generaciones)
crearInformacionJugadores(jugadoresPrimeraGeneracion, "1")
crearInformacionJugadores(jugadoresSegundaGeneracion, "2")
crearInformacionJugadores(jugadoresTerceraGeneracion, "3")

// Abrir modales 
const modal = document.getElementById("mainModal")
const openModal = document.getElementById("open-modal")
openModal.addEventListener("click", () => {
    modal.showModal()
})

//Calificaciones Dark
document.querySelectorAll('.valueInputDark').forEach(input => {
    input.addEventListener('input', function () {
        this.previousElementSibling.textContent = this.value;
    });
});

let btnEnviarCalificacionesDark =document.getElementById ("btn-enviar-calificaciones-dark")
btnEnviarCalificacionesDark.addEventListener("click", ()=>{
    let creatividad = document.getElementById ("valueCreatividadInputDark").value
    let funcionalidad = document.getElementById ("valueFuncionalidadInputDark").value
    let gustoPersonal = document.getElementById ("valueGustoPersonalInputDark").value
    let inputVotante = document.getElementById ("input-votante-dark").value
    fetch('https://discord.com/api/webhooks/1275584883300896858/mCO3fHigj8VL8Qt2H14d5_ZyzyPTnnwqpBgReXxXR6ZBm8jM8eOraDSEQLFD0aXhezTT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `----------------------------------- \n**Nether de DarkSharkUwU **\nVotacion de ${inputVotante}\nCreatividad: ${creatividad}\nFuncionalidad: ${funcionalidad}\nGusto personal: ${gustoPersonal}\n-----------------------------------`
        })
    })

    btnEnviarCalificacionesDark.setAttribute("disabled", "disabled")
    btnEnviarCalificacionesDark.value = ("Enviado ✔")
    btnEnviarCalificacionesDark.classList.add ("btn-seleccionado")

})

//Calificaciones Potra
document.querySelectorAll('.valueInputPotra').forEach(input => {
    input.addEventListener('input', function () {
        this.previousElementSibling.textContent = this.value;
    });
});

let btnEnviarCalificacionesPotra =document.getElementById ("btn-enviar-calificaciones-potra")
btnEnviarCalificacionesPotra.addEventListener("click", ()=>{
    let creatividad = document.getElementById ("valueCreatividadInputPotra").value
    let funcionalidad = document.getElementById ("valueFuncionalidadInputPotra").value
    let gustoPersonal = document.getElementById ("valueGustoPersonalInputPotra").value
    let inputVotante = document.getElementById ("input-votante-potra").value
    fetch('https://discord.com/api/webhooks/1275584883300896858/mCO3fHigj8VL8Qt2H14d5_ZyzyPTnnwqpBgReXxXR6ZBm8jM8eOraDSEQLFD0aXhezTT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `----------------------------------- \n**Nether de Potra **\nVotacion de ${inputVotante}\nCreatividad: ${creatividad}\nFuncionalidad: ${funcionalidad}\nGusto personal: ${gustoPersonal}\n-----------------------------------`
        })
    })

    btnEnviarCalificacionesPotra.setAttribute("disabled", "disabled")
    btnEnviarCalificacionesPotra.value = ("Enviado ✔")
    btnEnviarCalificacionesPotra.classList.add ("btn-seleccionado")

})

//Calificaciones Potra
document.querySelectorAll('.valueInputMarasost').forEach(input => {
    input.addEventListener('input', function () {
        this.previousElementSibling.textContent = this.value;
    });
});

let btnEnviarCalificacionesMarasost =document.getElementById ("btn-enviar-calificaciones-marasost")
btnEnviarCalificacionesMarasost.addEventListener("click", ()=>{
    let creatividad = document.getElementById ("valueCreatividadInputMarasost").value
    let funcionalidad = document.getElementById ("valueFuncionalidadInputMarasost").value
    let gustoPersonal = document.getElementById ("valueGustoPersonalInputMarasost").value
    let inputVotante = document.getElementById ("input-votante-marasost").value
    fetch('https://discord.com/api/webhooks/1275584883300896858/mCO3fHigj8VL8Qt2H14d5_ZyzyPTnnwqpBgReXxXR6ZBm8jM8eOraDSEQLFD0aXhezTT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `----------------------------------- \n**Nether de Marasost **\nVotacion de ${inputVotante}\nCreatividad: ${creatividad}\nFuncionalidad: ${funcionalidad}\nGusto personal: ${gustoPersonal}\n-----------------------------------`
        })
    })

    btnEnviarCalificacionesMarasost.setAttribute("disabled", "disabled")
    btnEnviarCalificacionesMarasost.value = ("Enviado ✔")
    btnEnviarCalificacionesMarasost.classList.add ("btn-seleccionado")

})





// Funcionalidades
function crearSelect(generacion) {
    //Acceder al div de generaciones

    let generaciones = document.getElementById("generaciones")
    //Crear select
    let select = document.createElement("select")
    select.setAttribute("class", "clasificacion")
    select.setAttribute("id", "clasificacion")
    generaciones.appendChild(select)

    let optionElement = document.createElement("option")
    let optionText = document.createElement("p")
    let option = document.createTextNode("Seleccione Generación")
    optionText.appendChild(option)
    optionElement.appendChild(optionText)
    select.appendChild(optionElement)

    //Crear opciones
    for (let i = 0; i < generacion.length; i++) {
        let optionElement = document.createElement("option")
        let optionText = document.createElement("p")
        let option = document.createTextNode(generacion[i])
        optionText.appendChild(option)
        optionElement.appendChild(optionText)
        select.appendChild(optionElement)
    }
}

function crearInformacionJugadores(jugadores, generacion) {
    let contenedorGeneral = document.getElementById("generaciones")
    let contendorJugadores = document.createElement("div")
    contendorJugadores.setAttribute("class", "contenido ocultar")
    contendorJugadores.setAttribute("id", "contendor-jugadores" + generacion)

    jugadores.forEach(jugador => {
        let contenedor = document.createElement("div")
        contenedor.setAttribute("class", "jugador")


        //Crear foto
        let foto = document.createElement("img")
        foto.setAttribute("src", jugador.foto)
        foto.setAttribute("title", "Foto de perfil de " + jugador.nombre)
        foto.setAttribute("class", "fotoJugador")
        contenedor.appendChild(foto)

        //Crear nombre jugador
        let nombreJugador = document.createElement("p")
        let nombreJugadorTexto = document.createTextNode(jugador.nombre)
        nombreJugador.appendChild(nombreJugadorTexto)
        contenedor.appendChild(nombreJugador)

        //Crear interaciones jugador
        let interaciones = document.createElement("p")
        let interacionesTexto = document.createTextNode("Interacciones: " + jugador.interacciones)
        interaciones.setAttribute("class", "interacciones")
        interaciones.appendChild(interacionesTexto)
        contenedor.appendChild(interaciones)

        contendorJugadores.appendChild(contenedor)
    })
    contenedorGeneral.appendChild(contendorJugadores)
}

// Funcionamiento de clasificación de generaciones
var select = document.getElementById("clasificacion").addEventListener("change", mostrarContenido);

function mostrarContenido() {
    var select = document.getElementById("clasificacion");
    var opcionSeleccionada = select.value;

    var contenidos = document.getElementsByClassName("contenido");
    for (var i = 0; i < contenidos.length; i++) {
        contenidos[i].classList.add("ocultar");
    }

    if (opcionSeleccionada) {
        var contenido = document.getElementById("contendor-jugadores" + opcionSeleccionada.slice(-1));
        if (contenido) {
            contenido.classList.remove("ocultar");
        }
    }
}