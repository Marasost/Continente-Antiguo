// Abrir modales
const modal = document.getElementsByClassName("mainModal")
const openModal = document.getElementsByClassName("open-modal")
for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", () => {
        modal[i].showModal()
    })
}

// Cerrar modales
const btnCloseModal = document.getElementsByClassName("btn-close-modal")
for (let i = 0; i < btnCloseModal.length; i++) {
    btnCloseModal[i].addEventListener("click", () => {
        modal[i].close()
    })
}

// Lógica botón seleccionar plan de pago
const btnSeleccionar = document.getElementsByClassName("btn-seleccionar-plan")
const btnPagarDiv = document.getElementsByClassName("btn-pagar")
for (let i = 0; i < btnSeleccionar.length; i++) {
    btnSeleccionar[i].addEventListener("click", () => {
        btnSeleccionar[i].value = ("Seleccionado ✔")
        btnPagarDiv[i].classList.remove("ocultar")
        const btnPagar = document.getElementsByClassName("btn-pagar")
        for (let i = 0; i < btnPagar.length; i++) {
            btnPagar[i].addEventListener("click", () => {
                modal[0].close()
                ocultarDesocultar ()
            })
        }
        for (let i = 0; i < btnSeleccionar.length; i++) {
            btnSeleccionar[i].setAttribute("disabled", "true")
        }
    })
}

// Lógica botón cancelar selección
const btnCancel = document.getElementById("btn-cancel")
btnCancel.addEventListener("click", () => {
    for (let i = 0; i < btnSeleccionar.length; i++) {
        btnSeleccionar[i].removeAttribute("disabled", "true")
        btnPagarDiv[i].classList.add("ocultar")
        btnSeleccionar[i].value = ("Seleccionar")
    }
})

// Mostrar seccion para pagar con paypal
const btnAbrirPaypal = document.getElementById ("open-paypal-div")
btnAbrirPaypal.addEventListener ("click", ()=>{
    ocultarDesocultar()
    const contenedorPaypal = document.getElementById("mainPaypal")
    contenedorPaypal.classList.remove("ocultar")
})

function ocultarDesocultar () {
    const contenedorMetodosPago = document.getElementById("payment-method-container")
    contenedorMetodosPago.classList.add("ocultar")

    const formularioComprobante = document.getElementById ("form-comprobante")
    formularioComprobante.classList.remove("ocultar")

    const contenedorPostPagar = document.getElementById("post-payment-container")
    contenedorPostPagar.classList.remove("ocultar")
}