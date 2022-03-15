var asunto = document.querySelector("#asunto");
asunto.addEventListener("keyup", function (evento) {

    console.log(`Contenido del asunto: ${asunto.value} `);

    if (asuntoError.vacio == false) {

        if (validarVacio(asunto.value)) {

            mostrarTextoErrorVacio("asunto", "error-asuntoVacio");
            asuntoError.vacio = true;


        }
    } else {

        if (validarEntrada(evento.key)){

            borrarElemento("error-asuntoVacio");
            asuntoError.vacio = false;
        }

    }

    if (asuntoError.longitud == false) {

        if (validarLongitud(asunto.value, 50) == false) {

            mostrarTextoErrorLongitud("asunto", "error-asuntoLongitud", 50);
            asuntoError.longitud = true;
        }

    } else if (validarLongitud(asunto.value, 50)) {
        borrarElemento("error-asuntoLongitud");
        asuntoError.longitud = false;

    }

    if ((asuntoError.longitud == false) && (asuntoError.vacio == false)) {

        asuntoError.estado = true;

    } else {

        asuntoError.estado = false;
    }

    /* console.log(`Estado longitud: ${asuntoError.longitud} y Estado Vacio: ${asuntoError.vacio}`)
    console.log(`Estado del error ${asuntoError.estado}`); */

    verificarEstado();

})