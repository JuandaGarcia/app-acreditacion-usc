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
    return this.buscarPorSemana(semana).length;
  }

  buscarPorSemana(semana) {
    var preguntasSemana = [];

    for (let i = 0; i < this.size - 1; i++)
      if (this.jsonPreguntas[i].week == semana)
        preguntasSemana.push(this.jsonPreguntas[i]);

    return preguntasSemana;
  }
}
