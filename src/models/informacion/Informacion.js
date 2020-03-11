import * as informacion from "./informacion.json";

export default class Informacion {
  constructor() {
    this.jsonInformacion = informacion;
    this.size = Object.keys(informacion).length--;
  }

  buscarPorId(id) {
    for (let i = 0; i < this.size; i++)
      if (this.jsonInformacion[i].id == id) return this.jsonInformacion[i];
  }
}
