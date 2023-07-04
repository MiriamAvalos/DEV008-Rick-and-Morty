import data from './data/rickandmorty/rickandmorty.js';
//  esta es para obtener, procesar y manipular datos (tus funciones puras).

//console.log(data.results[0].name);

//creo una funcion con el nombre obtenerData que me devuelva solo la propiedad resultados de la data rick and morty osea los personajes 
export function obtenerData() {
  return data.results
  
};
  //la siguiente constante todosLosPersonajes fue para hacer la prueba de que la funcion todosLosFiltros funcionaba
  const todosLosPersonajes= obtenerData();


  //funcion para todos los filtros , recibe el valor del sele

 export function todosLosFiltros(valorDeinput, arregloDePersonajes , propiedadDeObjeto) {
  let arregloResultado = [];
  
  for (let i=0; i<arregloDePersonajes.length; i++){
    
  if ( valorDeinput === arregloDePersonajes[i][propiedadDeObjeto]){
    arregloResultado.push(arregloDePersonajes[i])
  }
}
  // averiguar que es status, ya sabemos que status es un string que puede tener 2 valores:
  // "Alive" o "dead"
  // si estatus === "Alive" -> 
  // vamos a recorrer nuestro arreglo de personajes preguntando si ese personaje esta vivo
  // es decir su status tiene la propiedad "Alive"
  // si si cumple esta condicion agregamos a ese personaje a nuestro arreglo resultado 
  // al terminar de recorrer el arreglo devolvemos arreglo resultado 


  
  //console.log(arregloResultado);
  return arregloResultado;
}
 /*filtrarporStatus("Dead", todosLosPersonajes)  fue la prueba para ver que la función se ejecutaba correctamente e importarla a mains.js*/

 export const ordenaPersonajes = (valorOpcion,arregloDePersonajes) => {
  const dataOrdenar= [...arregloDePersonajes]  //copiar y duplica el arreglo
  let sortData= [];

   if (valorOpcion==="A-Z"){
     sortData= dataOrdenar.sort((personaje1, personaje2) => {
      
      if (personaje1.name> personaje2.name){
       return 1;
      }
      if (personaje1.name < personaje2.name){
        return -1; 
       
      } 
      return 0; 
  }); 
  return sortData;
  //console.log(sortData);
  
  
} 

else if (valorOpcion === "Z-A") {
  sortData= dataOrdenar.sort((personaje1, personaje2) => {
      
    if (personaje1.name> personaje2.name){
     return 1;
    }
    if (personaje1.name < personaje2.name){
      return -1; 
     
    } 
    return 0; 
}); 
  
   
  return sortData.reverse();
 

}

 //aqui termina la función
 }
 ordenaPersonajes("Z-A",todosLosPersonajes);

 /*export const ordenarPersonajes = (valorDeinput, arregloDePersonajes) => { 
  
   
   if ( valorDeinput === 'A-Z'){
    return arregloDePersonajes.sort((personaje1, personaje2)=>{
      if (personaje1.name>personaje2.name){
        return 1;
      }
      if (personaje1.name < personaje2.name){
        return -1;
      }
      return 0;
    }); 
   } else {
    return arregloDePersonajes.sort
   }

  }*/