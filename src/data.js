import data from './data/rickandmorty/rickandmorty.js';
//archivo para obtener, procesar y manipular datos (funciones puras).
//console.log(data.results[0].name);
//creo una funcion con el nombre obtenerData que me devuelva solo la propiedad resultados de la data rick and morty osea los personajes 
export function obtenerData() {
  return data.results
}
//la siguiente constante todosLosPersonajes fue para hacer la prueba de que la funcion todosLosFiltros funcionaba
const todosLosPersonajes = obtenerData();
export function todosLosFiltros(valorDeinput, arregloDePersonajes, propiedadDeObjeto) {
  const arregloResultado = [];
  for (let i = 0; i < arregloDePersonajes.length; i++) {
    if (valorDeinput === arregloDePersonajes[i][propiedadDeObjeto]) {
      arregloResultado.push(arregloDePersonajes[i])
    }
  }
  return arregloResultado;
}
/*filtrarporStatus("Dead", todosLosPersonajes)  fue la prueba para ver que la función se ejecutaba correctamente e importarla a mains.js*/

export const ordenaPersonajes = (valorOpcion, arregloDePersonajes) => {
  const dataOrdenar = [...arregloDePersonajes]  //copiar y duplica el arreglo
  let sortData = [];
  if (valorOpcion === "A-Z") {
    sortData = dataOrdenar.sort((personaje1, personaje2) => {
      if (personaje1.name > personaje2.name) {
        return 1;
      }
      if (personaje1.name < personaje2.name) {
        return -1;
      }
    });
    return sortData;  //también podria utilizar .reverse()
    //console.log(sortData);
  }
  else if (valorOpcion === "Z-A") {
    sortData = dataOrdenar.sort((personaje1, personaje2) => {
      if (personaje1.name < personaje2.name) {
        return 1;
      }
      if (personaje1.name > personaje2.name) {
        return -1;
      }
      return 0;
    });
    return sortData;
  }
  //aqui termina la función
}
ordenaPersonajes("Z-A", todosLosPersonajes);

