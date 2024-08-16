
//Llamado de funciones
crearSelect(generaciones)
crearInformacionJugadores(jugadoresPrimeraGeneracion,"1")
crearInformacionJugadores(jugadoresSegundaGeneracion,"2")
crearInformacionJugadores(jugadoresTerceraGeneracion,"3")
















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
        let interacionesTexto = document.createTextNode("Interacciones: "+ jugador.interacciones)
        interaciones.setAttribute ("class", "interacciones")
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