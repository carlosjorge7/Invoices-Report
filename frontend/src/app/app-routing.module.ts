import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';

const routes: Routes = [
  {
    path: 'facturas',
    component: FacturasComponent
  },
  {
    path: 'graficas',
    component: GraficasComponent
  },
  {
    path: '**',
    redirectTo: 'facturas'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
