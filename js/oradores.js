/*Trabajo Práctico Integrador JS

Deberán replicar la siguiente sección (es una sección que se debe agregar al integrador front-End) al presionar en el enlace “tickets”.

Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior
*/








const resumen = document.querySelector(".button_Resumen");
const toltalAPagar = document.querySelector(".Total_a_pagar"); 
const cantidad = document.querySelector(".Input_Cantidad");
const categoria = document.querySelector(".Selector_Descuentos");
const borrar = document.querySelector(".button_Borrar")
const valorTicket = 200;
const descuentoEstudiante = 0.20;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.85;


function valorTicketEstudiante(){
    let precioEstudiante = 0 ;
    if (categoria.value == "Estudiante") {
        precioEstudiante = parseInt(cantidad.value)*valorTicket*descuentoEstudiante;
    }
    return precioEstudiante;
}

function valorTicketTrainee(){
    let precioTrainee = 0 ;
    if (categoria.value == "Trainee") {
        precioTrainee = parseInt(cantidad.value)*valorTicket*descuentoTrainee;
    }
    return precioTrainee;
}

function valorTicketJunior(){
    let precioJunior = 0 ;
    if (categoria.value == "Junior") {
        precioJunior = parseInt(cantidad.value)*valorTicket*descuentoJunior;
    }
    return precioJunior;
}

function mostrarPrecio(e) {
    let precioFinal;
    e.preventDefault();
    precioFinal= valorTicketEstudiante() + valorTicketTrainee() + valorTicketJunior();
    if (precioFinal < 0) {
        return toltalAPagar.innerHTML = "No es una catidad valida";
    }

    return toltalAPagar.innerHTML = `Total a pagar: $${precioFinal}`;
       
}

function reset() {
    return toltalAPagar.innerHTML = `Total a pagar: $`;
}

resumen.addEventListener("click", mostrarPrecio); //EL EVENTO VA ENTRE COMILLAS Y LA FUNCION EL UNICO PARAMTRO QUE RECIBE ES EL: EVENTO;
borrar.addEventListener("click",reset);

/*
let cantidad = document.getElementsByClassName("Input_Cantidad"); //devuelve un array

console.log(parseInt((cantidad[0].value)));

let cantidad2 = document.querySelector(".Input_Cantidad"); //devuelve un valor

console.log(parseInt((cantidad2.value))); */