import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { FiltroFacturasPipe } from './pipes/filtro-facturas.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FacturasComponent,
    GraficasComponent,
    FiltroFacturasPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
