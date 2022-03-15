var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g
var estadoEmail = false;
console.log(regEmail.test("laau262@gmail"));

var email = document.querySelector("#email");
email.addEventListener("keyup", function (evento) {

    //  console.log(`Contenido del email: ${email.value}`);


    if ((emailError.longitud == false) && (asuntoError.vacio == false)) {

        emailError.estado = true;

    } else {

        emailError.estado = false;
    }


    if (emailError.vacio == false) {

        if (validarVacio(email.value)) {

            mostrarTextoErrorVacio("email", "error-emailVacio");
            emailError.vacio = true;

        }
    } else {

        if (validarEntrada(evento.key)){
            borrarElemento("error-emailVacio");
            emailError.vacio = false;
        }    
    }

    if (emailError.longitud == false) {

        if (validarLongitud(email.value, 256) == false) {

            mostrarTextoErrorLongitud("email", "error-emailLongitud", 256);
            emailError.longitud = true;
        }

    } else if (validarLongitud(email.value, 256)) {
        borrarElemento("error-emailLongitud");
        emailError.longitud = false;

    }

    if (estadoEmail == false) {

        if (regEmail.test(email.value) == false) {

            mostrarTextoErrorEmail("email", "error-emailReg");
            estadoEmail = true;
        }

    }


    if (regEmail.test(email.value) && (estadoEmail)) {

        borrarElemento("error-emailReg");
        estadoEmail = false;
        emailError.estado = true;

    } else {

        emailError.estado = false;
    }

    // console.log(`Longitud: ${emailError.longitud} Vacio: ${emailError.vacio} Mail: ${estadoEmail} Estado final: ${emailError.estado}`);

    verificarEstado();

})