import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { EliminarCuentaComponent } from './eliminar-cuenta/eliminar-cuenta.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TerminosComponent } from './terminos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DocumentacionesComponent } from './documentaciones/documentaciones.component';

const routes: Routes = [
  { path: 'terminos',  component: TerminosComponent },
  { path: 'politicas',  component: PoliticasComponent },
  { path: 'eliminar-cuenta',  component: EliminarCuentaComponent },
  { path: 'documentaciones',  component: DocumentacionesComponent },
  { path: 'bienvenida',  component: BienvenidaComponent },
  
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Esta línea se asegura de que se restablezca la posición del scroll
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosRoutingModule {}
