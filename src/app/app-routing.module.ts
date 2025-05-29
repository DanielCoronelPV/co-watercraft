import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/front-page/front-page.module').then((m) => m.FrontPageModule),
  },
  {
    path: 'seccion',
    loadChildren: () => import('./modules/seccion/seccion.module').then((m) => m.SeccionModule),
  },
  {
    path: 'terminos',
    loadChildren: () => import('./modules/terminos/terminos.module').then((m) => m.TerminosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
