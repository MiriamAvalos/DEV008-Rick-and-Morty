import data from './data/rickandmorty/rickandmorty.js';
//  esta es para obtener, procesar y manipular datos (tus funciones puras).

//console.log(data.results[0].name);

//creo una funcion con el nombre obtenerData que me devuelva solo la propiedad resultados de la data rick and morty osea los personajes 
export function obtenerData() {
  return data.results
  
};
  //const todosLosPersonajes= obtenerData();
  

 export function filtrarPorStatus(status, arregloDePersonajes , option) {
  let arregloResultado = [];
  
  for (let i=0; i<arregloDePersonajes.length; i++){
    
  if ( status === arregloDePersonajes[i][option]){
    arregloResultado.push(arregloDePersonajes[i])
  }
}
  // averiguar que es status, ya sabemos que status es un string que puede tener 2 valores:
  // "Alive" o "dead"
  // si estatus === "Alive" -> 
  // vamos a recorrer nuestro arreglo de personajes preguntando si ese personaje esta vivo
  // es decir su status tiene la propiedad "Alive"
  // si si cumple esta condicion agregamos a ese personaje a nuestro arregl oresultado 
  // al terminar de recorrer el arreglo devolvemos arreglo resultado 


  
  //console.log(arregloResultado);
  return arregloResultado;
}
 /*filtrarporStatus("Dead", todosLosPersonajes)*/

 export function filtrarPorSpecie(specie, arregloDePersonajes) {
  let arregloResultadoEspecies = [];
  
  for (let i=0; i<arregloDePersonajes.length; i++){
    
  if ( specie === arregloDePersonajes[i].species){
    arregloResultadoEspecies.push(arregloDePersonajes[i])
  }
}
  
  return arregloResultadoEspecies;
}