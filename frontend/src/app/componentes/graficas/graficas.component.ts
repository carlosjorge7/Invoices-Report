import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  constructor(public facturasService: FacturasService) { }

  // Semana 1
  mediaConsumo1semana: number;
  sumConsumo1semana: number = 0;

  mediaPrecios1semana: number;
  sumPrecio1semana: number = 0;

  mediaCostes1semana: number;
  sumCostes1semana: number = 0;

  maxConsumo1semana: number = Number.MIN_VALUE;;
  minConsumo1semana: number = Number.MAX_VALUE;

  // semana 2
  mediaConsumo2semana: number;
  sumConsumo2semana: number = 0;

  mediaPrecios2semana: number;
  sumPrecio2semana: number = 0;

  mediaCostes2semana: number;
  sumCostes2semana: number = 0;

  maxConsumo2semana: number = Number.MIN_VALUE;
  minConsumo2semana: number = Number.MAX_VALUE;

  // semana 3
  mediaConsumo3semana: number;
  sumConsumo3semana: number = 0;

  mediaPrecios3semana: number;
  sumPrecio3semana: number = 0;

  mediaCostes3semana: number;
  sumCostes3semana: number = 0;

  maxConsumo3semana: number = Number.MIN_VALUE;
  minConsumo3semana: number = Number.MAX_VALUE;

  // semana 4
  mediaConsumo4semana: number;
  sumConsumo4semana: number = 0;

  mediaPrecios4semana: number;
  sumPrecio4semana: number = 0;

  mediaCostes4semana: number;
  sumCostes4semana: number = 0;

  maxConsumo4semana: number = Number.MIN_VALUE;
  minConsumo4semana: number = Number.MAX_VALUE;

  // otros
  numeroDias: number = 7;
  numeroHoras: number = 24;
  NUM: number = (this.numeroDias * this.numeroHoras);

  ngOnInit(): void {
    this.facturasService.getFacturas().subscribe(facturas => {
      console.log(facturas);
      let comsumo, precio, coste;
      for(let i = 0; i < facturas.length; i++) {
        let semana = facturas[i]['fecha'].substring(8, facturas[i]['fecha'].length);
        if(semana == '01' || semana == '02' || semana == '03' || semana == '04' || semana == '05' || semana == '06' || semana == '07'){
          comsumo = parseFloat(facturas[i]['consumo']);
          precio = parseFloat(facturas[i]['precio']);
          coste = parseFloat(facturas[i]['coste'])
          this.sumConsumo1semana += comsumo;
          this.sumPrecio1semana += precio;
          this.sumCostes1semana += coste;
        }
        else if(semana == '08' || semana == '09' || semana == '10' || semana == '11' || semana == '12' || semana == '13' || semana == '14') {
          comsumo = parseFloat(facturas[i]['consumo']);
          precio = parseFloat(facturas[i]['precio']);
          coste = parseFloat(facturas[i]['coste']);
          this.sumConsumo2semana += comsumo;
          this.sumPrecio2semana += precio;
          this.sumCostes2semana += coste;
        }
        else if(semana == '15' || semana == '16' || semana == '17' || semana == '18' || semana == '19' || semana == '20' || semana == '21') {
          comsumo = parseFloat(facturas[i]['consumo']);
          precio = parseFloat(facturas[i]['precio']);
          coste = parseFloat(facturas[i]['coste']);
          this.sumConsumo3semana += comsumo;
          this.sumPrecio3semana += precio;
          this.sumCostes3semana += coste;
        }
        else {
          comsumo = parseFloat(facturas[i]['consumo']);
          precio = parseFloat(facturas[i]['precio']);
          coste = parseFloat(facturas[i]['coste']);
          this.sumConsumo4semana += comsumo;
          this.sumPrecio4semana += precio;
          this.sumCostes4semana += coste;
        }
      }
      this.mediaConsumo1semana = this.sumConsumo1semana / (this.NUM);
      this.mediaPrecios1semana = this.sumPrecio1semana / (this.NUM);
      this.mediaCostes1semana = this.sumCostes1semana / (this.NUM);

      this.mediaConsumo2semana = this.sumConsumo2semana / (this.NUM);
      this.mediaPrecios2semana = this.sumPrecio2semana / (this.NUM);
      this.mediaCostes2semana = this.sumCostes2semana / (this.NUM);

      this.mediaConsumo3semana = this.sumConsumo3semana / (this.NUM);
      this.mediaPrecios3semana = this.sumPrecio3semana / (this.NUM);
      this.mediaCostes3semana = this.sumCostes3semana / (this.NUM);

      this.mediaConsumo4semana = this.sumConsumo4semana / (this.NUM);
      this.mediaPrecios4semana = this.sumPrecio4semana / (this.NUM);
      this.mediaCostes4semana = this.sumCostes4semana / (this.NUM);


      console.log('Media consumo 1 semana', this.mediaConsumo1semana, 'Media precio 1 semana:', this.mediaPrecios1semana, 'Media costes 1 semana: ', this.mediaCostes1semana);
      console.log('Media consumo 2 semana', this.mediaConsumo2semana, 'Media precio 2 semana:', this.mediaPrecios2semana, 'Media costes 2 semana: ', this.mediaCostes2semana);
      console.log('Media consumo 3 semana', this.mediaConsumo3semana, 'Media precio 3 semana:', this.mediaPrecios3semana, 'Media costes 3 semana: ', this.mediaCostes3semana);
      console.log('Media consumo 4 semana', this.mediaConsumo4semana, 'Media precio 4 semana:', this.mediaPrecios4semana, 'Media costes 2 semana: ', this.mediaCostes4semana);

      this.generateChartConsumos();
      this.generateChartPrecios();
      this.generateChartCostes();
    });
  }

  private generateChartConsumos() {
    const $grafica = document.querySelector("#consumos");
    const etiquetas = ["1 semana", "2 semana", "3 semana", "4 semana"]
    const medias = {
        label: "Media de consumo por semanas",
        data: [this.mediaConsumo1semana, this.mediaConsumo2semana, this.mediaConsumo3semana, this.mediaConsumo4semana],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
     };
    new Chart($grafica, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [
              medias
              //  data1
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
  }

  private generateChartPrecios() {
    const $grafica = document.querySelector("#precios");
    const etiquetas = ["1 semana", "2 semana", "3 semana", "4 semana"]
    const medias = {
        label: "Media de precios por semanas",
        data: [this.mediaPrecios1semana, this.mediaPrecios2semana, this.mediaPrecios3semana, this.mediaPrecios4semana],
        backgroundColor: 'rgb(205, 92, 92, 0.2)',
        borderColor: 'rgb(205, 92, 92, 1)', 
        borderWidth: 1
     };
    new Chart($grafica, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [
              medias
              //  data1
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
  }

  private generateChartCostes() {
    const $grafica = document.querySelector("#costes");
    const etiquetas = ["1 semana", "2 semana", "3 semana", "4 semana"]
    const medias = {
        label: "Media de costes por semanas",
        data: [this.mediaCostes1semana, this.mediaCostes2semana, this.mediaCostes3semana, this.mediaCostes4semana],
        backgroundColor: 'rgba(49, 175, 84, 0.2)',
        borderColor: 'rgba(49, 175, 84, 1)', 
        borderWidth: 1
     };
    // const maximos = {
    //     label: "Maximos de consumo por semana",
    //     data: [this.maxConsumo1semana, this.maxConsumo2semana, this.maxConsumo3semana, this.maxConsumo4semana], 
    //     backgroundColor: 'rgba(0, 162, 235, 0.2)',
    //     borderColor: 'rgba(54, 162, 2, 1)', 
    //     borderWidth: 1
    // };
    new Chart($grafica, {
        type: 'line',
        data: {
            labels: etiquetas,
            datasets: [
              medias
              //  data1
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
  }

}
