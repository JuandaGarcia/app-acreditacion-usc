import * as preguntas from "./preguntas.json";

export default class Preguntas {
  constructor() {
    this.jsonPreguntas = preguntas;
    this.size = Object.keys(preguntas).length--;
  }

  buscarPorId(id) {
    for (let i = 0; i < this.size; i++)
      if (this.jsonPreguntas[i].id == id) return this.jsonPreguntas[i];
  }

  cantPorSemana(semana) {
    var cantSem = 0;

    for (let i = 0; i < this.size; i++)
      if (this.jsonPreguntas[i].week == semana) cantSem++;
    return cantSem;
  }
}
