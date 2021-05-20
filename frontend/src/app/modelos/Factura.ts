export class Factura {
    constructor(_id = "", fecha = "", hora = "", consumo = "", precio = "", coste = "") {
        this._id = _id;
        this.fecha = fecha;
        this.hora = hora;
        this.consumo = consumo;
        this.precio = precio;
        this.coste = coste;
      }
    
    _id: string;
    fecha: string;
    hora: string;
    consumo: string;
    precio: string;
    coste: string
}