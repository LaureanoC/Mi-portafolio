class Error {
    constructor() {
        this.vacio = false;
        this.longitud = false;
    }
}

var nombreError = new Error();
var asuntoError = new Error();
var mensajeError = new Error();
var emailError = new Error();


function validarLongitud(palabra,n) {

    if (palabra.length <= n) {

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

function mostrarTextoErrorVacio(campo,id) {

    crearElementoError(campo, `El campo ${campo} no puede estar vacío`,id);

}

function mostrarTextoErrorEmail(campo,id) {

    crearElementoError(campo, `El campo ${campo} debe tener la siguiente estructura: usuario@dominio.com`,id);

}

function mostrarTextoErrorLongitud(campo,id,n) {

    crearElementoError(campo, `El campo ${campo} no puede tener mas de ${n} caracteres`,id );

}


function crearElementoError(campo, texto, id) {

    var campoSeleccionado = document.querySelector(`#${campo}`);
    var parrafo = document.createElement("p");
    parrafo.className = "error";
    parrafo.textContent = texto;
    parrafo.id = id;
    campoSeleccionado.insertAdjacentElement("beforebegin", parrafo);


}

function borrarElemento(id){


   var elemento = document.querySelector(`#${id}`);
   elemento.remove();

}




