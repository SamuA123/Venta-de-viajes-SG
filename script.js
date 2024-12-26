import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo') 
let subTituloElemento = document.getElementById('subtitulo') 
let parrafoElemento = document.getElementById('parrafo') 
let precioElemento = document.getElementById('precio')

//Agregar un evento CLICK a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        //REMOVER ACTIVO
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //Agregar la clase "active" al enlace actual
        this.classList.add('Active')

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        //Mostrar el cotenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio


    })

    //AGREGAR ACTIVE AL QUE CORRESPONDA

    //TRAER LA INFORMACION DEL OBJETO CORRESPONDIENTE A LA ELECCION

    //MOSTRAR EL CONTENIDO EN EL DOM
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}
