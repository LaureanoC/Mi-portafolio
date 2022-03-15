var estadoBoton = false;
var boton = document.querySelector(".boton-enviarDeshabilitado");


function verificarEstado() {

    if (nombreError.estado && asuntoError.estado && emailError.estado && mensajeError.estado) {


        if ((boton.getAttribute("value") == "disabled") && estadoBoton == false) {

            boton.classList.remove("boton-enviarDeshabilitado");
            boton.classList.add("boton-enviar");

        }

        boton.setAttribute("value", "regular");
        boton.removeAttribute("disabled");

        estadoBoton = true;

    }

    if (estadoBoton && (nombreError.estado && asuntoError.estado && emailError.estado && mensajeError.estado) == false) {

        if ((boton.getAttribute("value") == "regular") && estadoBoton) {

            boton.classList.remove("boton-enviar");
            boton.classList.add("boton-enviarDeshabilitado");
        }
       
        boton.setAttribute("value", "disabled");
        boton.setAttribute("disabled", "");


        estadoBoton = false;

    }






}
