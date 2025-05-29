import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionComponent } from './seccion.component';
import { GuiaPrestadoresComponent } from './components/guia-prestadores/guia-prestadores.component';
import { VisacionesOnlineComponent } from './components/visaciones-online/visaciones-online.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { SeccionRoutingModule } from './seccion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerPrestadorComponent } from './components/guia-medica/ver-prestador/ver-prestador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FrontPageModule } from '../front-page/front-page.module';
import { GuiaMedicaComponent } from './components/guia-medica/guia-medica.component';
import { VerMedicoComponent } from './components/guia-medica/ver-medico/ver-medico.component';
import { CardComponent } from './components/guia-medica/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    SeccionRoutingModule,
    FormsModule,
    MatDialogModule,
    // MatTableModule,
    // MatTabsModule,
    FrontPageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SeccionComponent,
    GuiaPrestadoresComponent,
    VisacionesOnlineComponent,
    VerPrestadorComponent,
    GuiaMedicaComponent,
    VerMedicoComponent,
    CardComponent
  ],
})
export class SeccionModule {}
