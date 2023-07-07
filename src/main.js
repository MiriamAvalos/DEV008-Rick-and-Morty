//aqui van los eventos del DOOM
import { obtenerData } from './data.js';
import { todosLosFiltros } from './data.js';
import { ordenaPersonajes } from './data.js';
const resultado = obtenerData();
//console.log(resultado);
const primerContenedor = document.getElementById("contenedorPadrePersonajes")
const ventanaModal = document.getElementById("modal")

function mostrarPersonajes(arregloDePersonajes) {
  //limpia para el filtro  
  primerContenedor.innerHTML = ""
  for (let i = 0; i < arregloDePersonajes.length; i = i + 1) {
    const personajes = arregloDePersonajes[i];
    //console.log(personajes.image,personajes.name);
    // console.log(personajes.name);

    //ingreso de tarjeta con todos los personajes
    const contenedorTarjetas = document.createElement("div")
    contenedorTarjetas.classList.add("tarjetasPersonajes")
    const imagenPersonaje = document.createElement("img")
    imagenPersonaje.classList.add("imagenPersonajes")
    imagenPersonaje.src = personajes.image;
    const nombrePersonajes = document.createElement("h2")
    nombrePersonajes.classList.add("nombrePersonaje")
    nombrePersonajes.textContent = personajes.name;

    contenedorTarjetas.appendChild(imagenPersonaje)
    contenedorTarjetas.appendChild(nombrePersonajes)
    primerContenedor.appendChild(contenedorTarjetas)

    //inicia el Modal
    contenedorTarjetas.addEventListener("click", () => {
      //console.log(personajes.image,personajes.name);
      //limpia el Modal
      ventanaModal.innerHTML = ""

      //creación de div de modal con los datos especificos de cada personaje
      const ContenedorModal = document.createElement("div")
      ContenedorModal.classList.add("contenedorModal")

      //cerrar modal
      const cierraModal = document.createElement("div")
      cierraModal.classList.add("desapareceModal")
      cierraModal.textContent = "X";

      cierraModal.addEventListener("click", () => {
        modal.close();
      })


      ventanaModal.appendChild(cierraModal)

      const nombrePersonajesModal = document.createElement("h3")
      nombrePersonajesModal.classList.add("nombreModal")
      nombrePersonajesModal.textContent = personajes.name;
      const imagenPersonajeModal = document.createElement("img")
      imagenPersonajeModal.classList.add("imagenModal")
      imagenPersonajeModal.src = personajes.image;
      const ContenedorDetalle = document.createElement("div")
      ContenedorDetalle.classList.add("detalle")
      const ContenedorLista = document.createElement("div")
      ContenedorLista.classList.add("contenedordeLista")
      const statusPersonaje = document.createElement("li")
      statusPersonaje.classList.add("lista")
      statusPersonaje.textContent = "Status:" + " " + personajes.status;
      ContenedorLista.appendChild(statusPersonaje)
      const speciesPersonaje = document.createElement("li")
      speciesPersonaje.classList.add("lista")
      speciesPersonaje.textContent = "Specie:" + " " + personajes.species;
      ContenedorLista.appendChild(speciesPersonaje)
      const generoPersonaje = document.createElement("li")
      generoPersonaje.classList.add("lista")
      generoPersonaje.textContent = "Gender:" + " " + personajes.gender;
      ContenedorLista.appendChild(generoPersonaje)

      const origenPersonaje = document.createElement("li")
      origenPersonaje.classList.add("lista")
      origenPersonaje.textContent = "Origin:" + " " + personajes.origin.name;
      ContenedorLista.appendChild(origenPersonaje)

      const locacionPersonaje = document.createElement("li")
      locacionPersonaje.classList.add("lista")
      locacionPersonaje.textContent = "Location:" + " " + personajes.location.name;

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

/*filtro por Estado */
const estadodeVida = document.getElementById("filtroEstado")
estadodeVida.addEventListener("change", function () {
  const valorOpcion = estadodeVida.value;
  const primerFiltro = todosLosFiltros(valorOpcion, resultado, "status"); //asigno el argumento a la función

  //console.log(valorOpcion, primerFiltro);

  mostrarPersonajes(primerFiltro);
});

/*filtro por Especie*/
const filtroEspecie = document.getElementById("filtroEspecie")
filtroEspecie.addEventListener("change", function () {
  const valorEspecie = filtroEspecie.value;
  const segundoFiltro = todosLosFiltros(valorEspecie, resultado, "species");
  mostrarPersonajes(segundoFiltro);
});

/*filtro por Genero*/
const filtroGenero = document.getElementById("filtroGenero")
filtroGenero.addEventListener("change", function () {
  const valorGenero = filtroGenero.value;
  const tercerFiltro = todosLosFiltros(valorGenero, resultado, "gender");

  mostrarPersonajes(tercerFiltro);
});

/*Ordenamiento*/
const ordenaLaData = document.getElementById("ordenData")
ordenaLaData.addEventListener("change", function () {
  const valordeOrden = ordenaLaData.value;
  const ordenarData = ordenaPersonajes(valordeOrden, resultado);

  mostrarPersonajes(ordenarData);
});