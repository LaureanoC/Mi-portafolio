var asunto = document.querySelector("#asunto");
asunto.addEventListener("keyup", function () {

    console.log(`Contenido del asunto: ${asunto.value} `);

    if (asuntoError.vacio == false){

        if(validarVacio(asunto.value)){

            mostrarTextoErrorVacio("asunto","error-asuntoVacio");
            asuntoError.vacio = true;

        }
    } else {

        borrarElemento("error-asuntoVacio");
        asuntoError.vacio = false;
    }

    if (asuntoError.longitud == false){

        if(validarLongitud(asunto.value,50)== false){

            mostrarTextoErrorLongitud("asunto","error-asuntoLongitud",50);
            asuntoError.longitud = true;
        }
        
        } else if (validarLongitud(asunto.value,50)){
            borrarElemento("error-asuntoLongitud");
            asuntoError.longitud = false;
               
    }

})