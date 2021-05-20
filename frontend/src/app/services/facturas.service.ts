import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../modelos/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  selectedFactura: Factura;
  facturas: Factura[];
  API = "http://localhost:3600/api/facturas";

  constructor(private http: HttpClient) {
    this.selectedFactura = new Factura();
  }

  createFactura(factura: Factura) {
    return this.http.post(this.API, factura);
  }

  getFacturas() {
    return this.http.get<Factura[]>(this.API);
  }

  updateFactura(factura: Factura) {
    return this.http.put(this.API + `/${factura._id}`, factura);
  }

  deleteFactura(_id: string) {
    return this.http.delete(this.API + `/${_id}`);
  }
}
