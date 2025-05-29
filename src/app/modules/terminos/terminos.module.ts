import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminosComponent } from './terminos.component';
import { RouterModule } from '@angular/router';
import { TerminosRoutingModule } from './terminos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EliminarCuentaComponent } from './eliminar-cuenta/eliminar-cuenta.component';
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field'
import { MatInputModule } from "@angular/material/input";
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DocumentacionesComponent } from './documentaciones/documentaciones.component';
import { HeaderComponent } from '../front-page/components/header/header.component';
import { FrontPageModule } from '../front-page/front-page.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TerminosRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    AngularSvgIconModule,
    FrontPageModule
  ],
  // providers: [ prov
  //   MatFormFieldControl],
  declarations: [TerminosComponent, EliminarCuentaComponent, BienvenidaComponent, DocumentacionesComponent]
})
export class TerminosModule { }
