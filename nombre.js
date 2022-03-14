
var nombre = document.querySelector("#nombre-apellido");
nombre.addEventListener("keyup", function () {

    console.log(`Contenido del nombre: ${nombre.value} `);

    if (nombreError.vacio == false){

        if(validarVacio(nombre.value)){

            mostrarTextoErrorVacio("nombre-apellido","error-nombreVacio");
            nombreError.vacio = true;

        }
    } else {

        borrarElemento("error-nombreVacio");
        nombreError.vacio = false;
    }

    if (nombreError.longitud == false){

        if(validarLongitud(nombre.value,50)== false){

            mostrarTextoErrorLongitud("nombre-apellido","error-nombreLongitud",50);
            nombreError.longitud = true;
        }
        
        } else if (validarLongitud(nombre.value,50)){
            borrarElemento("error-nombreLongitud");
            nombreError.longitud = false;
               
    }

})