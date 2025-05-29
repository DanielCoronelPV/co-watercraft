import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion.component';
import { GuiaPrestadoresComponent } from './components/guia-prestadores/guia-prestadores.component';
import { VisacionesOnlineComponent } from './components/visaciones-online/visaciones-online.component';
import { GuiaMedicaComponent } from './components/guia-medica/guia-medica.component';

const routes: Routes = [
  {
    path: '',
    component: SeccionComponent,
    children: [
      // {
      //   path: 'guia-medica',
      //   component: GuiaMedicaComponent,
      // },
      // {
      //   path: 'guia-prestadores',
      //   component: GuiaPrestadoresComponent,
      // },
      // {
      //   path: 'visaciones-online',
      //   component: VisacionesOnlineComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeccionRoutingModule {}
