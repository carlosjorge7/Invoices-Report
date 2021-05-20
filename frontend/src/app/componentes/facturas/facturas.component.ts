import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { NgForm } from "@angular/forms";
import { Factura } from "../../modelos/Factura";

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  page: number = 1;

  textoBuscar = '';

  constructor(public facturasService: FacturasService) {}

  ngOnInit() {
    this.getFacturas();
  }

  buscarFactura(event) {
    const valor = event.target.value;
    this.textoBuscar = valor;
    console.log(this.textoBuscar)
  }

  createFactura(form?: NgForm) {
    if (form.value._id) {
      this.facturasService.updateFactura(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getFacturas();
      });
    } else {
      this.facturasService.createFactura(form.value).subscribe((res) => {
        this.getFacturas();
        this.resetForm(form);
      });
    }
  }

  getFacturas() {
    this.facturasService.getFacturas().subscribe((res) => {
      this.facturasService.facturas = res;
    });
  }

  updateFactura(factura: Factura) {
    this.facturasService.selectedFactura = factura;
  }

  deleteFactura(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.facturasService.deleteFactura(_id).subscribe((res) => {
        this.getFacturas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.facturasService.selectedFactura = new Factura();
    }
  }

}
