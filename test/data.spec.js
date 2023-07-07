import {
  personajesNoOrdenados,
  personajesOrdenadosAsc,
  personajesOrdenadosDesc,
  personajesFiltro,
  personajesDead,
  personajesHuman,
  personajesMale,
} from "./const.js";
import { obtenerData, ordenaPersonajes, todosLosFiltros } from "../src/data.js";

describe("obtenerData", () => {
  it("is a function", () => {
    expect(typeof obtenerData).toBe("function");
  });
});

describe("ordenaPersonajes", () => {
  it("is a function", () => {
    expect(typeof ordenaPersonajes).toBe("function");
  });

  it("debe ordenar la lista de personajes de la A-Z", () => {
    expect(ordenaPersonajes("A-Z", personajesNoOrdenados)).toEqual(
      personajesOrdenadosAsc
    );
  });

  it("debe ordenar la lista de personajes de la Z-A", () => {
    expect(ordenaPersonajes("Z-A", personajesNoOrdenados)).toEqual(
      personajesOrdenadosDesc
    );
  });
});

describe("todosLosFiltros", () => {
  it("is a function", () => {
    expect(typeof todosLosFiltros).toBe("function");
  });

  it("debe retornar la lista de personajes filtrada por Estado", () => {
    const filtroporEstado= "status"
    const opcionUsuarioEstado= "Dead"
    

    expect(todosLosFiltros(opcionUsuarioEstado,personajesFiltro, filtroporEstado)).toEqual(personajesDead
    )
  });

  it("debe retornar la lista de personajes filtrada por Especie", () => {
    const filtroporEspecie= "species"
    const opcionUsuarioEspecie= "Human"
    

    expect(todosLosFiltros(opcionUsuarioEspecie,personajesFiltro, filtroporEspecie)).toEqual(personajesHuman
    )
  });

  it("debe retornar la lista de personajes filtrada por Genero", () => {
    const filtroporGenero= "gender"
    const opcionUsuarioGenero= "Male"
    

    expect(todosLosFiltros(opcionUsuarioGenero,personajesFiltro, filtroporGenero)).toEqual(personajesMale
    )
  });
});
