var mensaje = document.querySelector("#mensaje");
mensaje.addEventListener("keyup", function () {

    console.log(`Contenido del mensaje: ${mensaje.value} `);

    if (mensajeError.vacio == false) {

        if (validarVacio(mensaje.value)) {

            mostrarTextoErrorVacio("mensaje", "error-mensajeVacio");
            mensajeError.vacio = true;

        }
    } else {

        borrarElemento("error-mensajeVacio");
        mensajeError.vacio = false;
    }

    if (mensajeError.longitud == false) {

        if (validarLongitud(mensaje.value, 300) == false) {

            mostrarTextoErrorLongitud("mensaje", "error-mensajeLongitud", 300);
            mensajeError.longitud = true;
        }

    } else if (validarLongitud(mensaje.value, 300)) {
        borrarElemento("error-mensajeLongitud");
        mensajeError.longitud = false;

    }

    if ((mensajeError.longitud == false) && (mensajeError.vacio == false)) {

        mensajeError.estado = true;

    } else {

        mensajeError.estado = false;
    }

    /*console.log(`Estado longitud: ${mensajeError.longitud} y Estado Vacio: ${mensajeError.vacio}`)
    console.log(`Estado del error ${mensajeError.estado}`);*/

    verificarEstado();
})