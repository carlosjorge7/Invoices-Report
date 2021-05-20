import { Pipe, PipeTransform } from '@angular/core';
import { Factura } from '../modelos/Factura';

@Pipe({
  name: 'filtroFacturas'
})
export class FiltroFacturasPipe implements PipeTransform {

  transform(facturas: Factura[], valor: string): Factura[] {
    if(valor.length == 0){
      return facturas;
    }
    valor = valor.toLowerCase();

    return facturas.filter((factura) => {
      return factura.fecha == valor || factura.hora == valor || factura.precio == valor || factura.consumo == valor || factura.coste == valor; 
      //return factura.hora.includes(valor)
    });
  }

}
