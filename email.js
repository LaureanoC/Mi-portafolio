var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g
var estadoEmail = false;
console.log(regEmail.test("laau262@gmail"));

var email = document.querySelector("#email");
email.addEventListener("keyup", function () {

    console.log(`Contenido del email: ${email.value}`);

    if (emailError.vacio == false){

        if(validarVacio(email.value)){

            mostrarTextoErrorVacio("email","error-emailVacio");
            emailError.vacio = true;

        }
    } else {

        borrarElemento("error-emailVacio");
        emailError.vacio = false;
    }

    if (emailError.longitud == false){

        if(validarLongitud(email.value,256)== false){

            mostrarTextoErrorLongitud("email","error-emailLongitud",256);
            emailError.longitud = true;
        }
        
        } else if (validarLongitud(email.value,256)){
            borrarElemento("error-emailLongitud");
            emailError.longitud = false;
               
    }

    console.log(`Estado mail: ${estadoEmail} y test: ${regEmail.test(email.value)}`);
    if (estadoEmail == false){

        if(regEmail.test(email.value)== false) {

            mostrarTextoErrorEmail("email","error-emailReg");
            estadoEmail = true;
        }

    }
     console.log(regEmail.test(email.value));
     console.log(estadoEmail);

    if (regEmail.test(email.value) && (estadoEmail)){

        borrarElemento("error-emailReg");
        console.log("SE BORRA?");
        estadoEmail = false;

    }

})