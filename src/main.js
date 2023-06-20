//aqui van los eventos del DOOM

import { obtenerData } from './data.js';
const resultado= obtenerData();
//console.log(resultado);
const primerContenedor = document.getElementById("contenedorPadre")

//console.log(listadePersonajes);
function mostrarPersonajes(arregloDePersonajes){
    for (let i = 0; i < arregloDePersonajes.length; i++) {
        const personajes = arregloDePersonajes[i];
       //console.log(personajes.image,personajes.name);
      // console.log(personajes.name);
      

      const segundoContenedor = document.createElement("div")
      segundoContenedor.classList.add("estiloSegundo")
      const imagenPersonaje=document.createElement("img")
      imagenPersonaje.classList.add("imagenP")
      imagenPersonaje.src= personajes.image;
      const nombrePersonajes= document.createElement("h2")
      nombrePersonajes.classList.add("nombre2")
      nombrePersonajes.textContent = personajes.name;
      
      segundoContenedor.appendChild(imagenPersonaje)
      segundoContenedor.appendChild(nombrePersonajes)
      primerContenedor.appendChild(segundoContenedor)
     
     segundoContenedor.addEventListener("click",()=>{
        console.log(personajes.name);
     })
    }
}
mostrarPersonajes(resultado);

function pantallaEmergente(informacion){


}
pantallaEmergente(personajes);

//console.log(resultado);