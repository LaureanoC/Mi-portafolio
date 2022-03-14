function validarLongitud(palabra) {

    if (palabra.length <= 50) {

        return true

    } else {


        return false
    }
}

function validarVacio(palabra) {

    if (palabra.length == 0) {

        return true

    } else {

        return false
    }
}

function mostrarTextoError(campo, texto) {

    if (validarVacio(texto)) {

        console.log(`El campo ${campo} se encuentra vacío`);
    }

    else if (validarLongitud(texto) == false) {

        console.log(`El campo ${campo} no puede superar los 50 caracteres`);

    }
}

var nombre = document.querySelector("#nombre-apellido");

nombre.addEventListener("keyup", function(){
 
    
    console.log(`Contenido del nombre: ${nombre.value} `);

    mostrarTextoError("Nombre", nombre.value);
    

    
})



