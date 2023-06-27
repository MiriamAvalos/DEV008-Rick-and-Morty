//aqui van los eventos del DOOM

import { obtenerData } from './data.js';
const resultado= obtenerData();
//console.log(resultado);
const primerContenedor = document.getElementById("contenedorPadre")
const ventanaModal = document.getElementById("modal")

//console.log(listadePersonajes);
function mostrarPersonajes(arregloDePersonajes){
    for (let i = 0; i < arregloDePersonajes.length; i=i+1) {
        const personajes = arregloDePersonajes[i];
       //console.log(personajes.image,personajes.name);
      // console.log(personajes.name);
      
     //ingreso de tarjeta con todos los personajes
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
       
      //funcion para modal
     segundoContenedor.addEventListener("click",()=>{
        //console.log(personajes.image,personajes.name);
      ventanaModal.innerHTML= ""
        //creación de div de modal con los datos especificos de cada personaje
        const ContenedorModal=document.createElement("div")
        ContenedorModal.classList.add("contenedorModal")

        const nombrePersonajesModal=document.createElement("h3")
        nombrePersonajesModal.classList.add("nombreModal")
        nombrePersonajesModal.textContent = personajes.name;
        
        const imagenPersonajeModal=document.createElement("img")
        imagenPersonajeModal.classList.add("imagenModal")
        imagenPersonajeModal.src=personajes.image;

        
        const ContenedorDetalle=document.createElement("div")
        ContenedorDetalle.classList.add("detalle")

        const ContenedorLista=document.createElement("div")
        ContenedorLista.classList.add("contenedordeLista")
        

        const statusPersonaje=document.createElement("li")
        statusPersonaje.classList.add("lista")
        statusPersonaje.textContent="Status:" + " " + personajes.status;
        
        ContenedorLista.appendChild(statusPersonaje)

        const speciesPersonaje=document.createElement("li")
        speciesPersonaje.classList.add("lista")
        speciesPersonaje.textContent="Specie:"+ " " + personajes.species;

        ContenedorLista.appendChild(speciesPersonaje)

        const generoPersonaje=document.createElement("li")
        generoPersonaje.classList.add("lista")
        generoPersonaje.textContent="Gender:"+ " "+ personajes.gender;

        ContenedorLista.appendChild(generoPersonaje)

        const origenPersonaje=document.createElement("li")
        origenPersonaje.classList.add("lista")
        origenPersonaje.textContent="Origin:" + " " + personajes.origin.name;

        ContenedorLista.appendChild(origenPersonaje)

        const locacionPersonaje=document.createElement("li")
        locacionPersonaje.classList.add("lista")
        locacionPersonaje.textContent= "Location:" + " " + personajes.location.name;

        ContenedorLista.appendChild(locacionPersonaje)


        ContenedorModal.appendChild(nombrePersonajesModal)
        ContenedorDetalle.appendChild(imagenPersonajeModal)
        ContenedorDetalle.appendChild(ContenedorLista)
        ContenedorModal.appendChild(ContenedorDetalle)

        ventanaModal.appendChild(ContenedorModal)
        ventanaModal.showModal();

     })

    }
}
mostrarPersonajes(resultado);



//console.log(resultado);