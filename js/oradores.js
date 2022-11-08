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

resumen.addEventListener("click", mostrarPrecio);
borrar.addEventListener("click",reset);

