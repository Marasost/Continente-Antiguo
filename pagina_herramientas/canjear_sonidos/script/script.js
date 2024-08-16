audios.forEach(audio => {
        //Accedo al contenedor general
        let contenedorSonidos = document.getElementById("sounds-container")

        // Crear div container text-center 
        let containerTextCenter = document.createElement("div")
        containerTextCenter.classList.add("container", "text-center")
        contenedorSonidos.appendChild(containerTextCenter)

        // Crear div row 
        let row = document.createElement("div")
        row.classList.add("row")
        row.classList.add("row-audio")
        containerTextCenter.appendChild(row)

        // Crear div col y nombre de audio 
        let col1 = document.createElement("div")
        col1.classList.add("col")
        row.appendChild(col1)
        let nombreAudio = document.createElement("p")
        col1.classList.add("nombre-canjeables")
        let nombreAudioTexto = document.createTextNode(audio.nombre)
        nombreAudio.appendChild(nombreAudioTexto)
        col1.appendChild(nombreAudio)

        // Crear div col y audio 
        let col2 = document.createElement("div")
        col2.classList.add("col")
        row.appendChild(col2)
        // Crear audio controls
        let audioControls = document.createElement("audio")
        audioControls.setAttribute("controls", "true")
        audioControls.classList.add("audio")
        col2.appendChild(audioControls)
        // Crear source
        let source = document.createElement("source")
        source.setAttribute("src", audio.ruta)
        source.setAttribute("type", "audio/mpeg")
        audioControls.appendChild(source)

        // Crear div col y titulo necesario
        let col3 = document.createElement("div")
        col3.classList.add("col")
        col3.classList.add("col-input")
        row.appendChild(col3)
        // Requisito
        let requisito = document.createElement("p")
        col3.classList.add("requisito-audio")
        let requisitoTexto = document.createTextNode(audio.requisito)
        requisito.appendChild(requisitoTexto)
        col3.appendChild(requisito)
        //Boton ir a titulo
        let btnIr = document.createElement("a")
        btnIrtexto = document.createTextNode ("Ir")
        btnIr.appendChild(btnIrtexto)
        btnIr.classList.add ("btn-ir")
        btnIr.setAttribute("href", "../canjear_titulos/canjear_titulos.html")
        requisito.appendChild(btnIr)
});
