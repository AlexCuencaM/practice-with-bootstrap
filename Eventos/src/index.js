function parrafo(){
    //let despedida = document.getElementById("despedida");

    //Innerhtml Innertext
    //Insutrcciones
    // let y const    
    //Un elemento del html, nodo
    let botonAlerta = document.getElementById("boton-alerta");
    let saludoParrafo = document.getElementById("saludo");
    saludoParrafo.innerHTML = "Estoy aprendiendo JS :)";    

    console.log(saludoParrafo);
    console.log(botonAlerta);
}
//parrafo();

function cambiarTodo(){
    //Te devuelve un array de elementos HTML
    let parrafos = document.getElementsByClassName("parrafo");   
     
    for(let  i = 0; i<parrafos.length; i++){
        parrafos[i].innerHTML = "Modificado por el JS";
    }
}
cambiarTodo();

// Funcion en la que se ejecuta cada vez que presiona un click con onClick
function pruebaInicial(){
    let despedida = document.getElementById("despedida");
    despedida.innerHTML = "Hey, he cambiado";    
}

function addEventButton(params) {
    let button = document.getElementById("boton-msj");
    button.addEventListener("click", function(e){
        alert("Hey, soy el boton sin Onclick");
    })
}

