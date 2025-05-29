import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page.component';
import { RouterModule } from '@angular/router';
import { FrontPageRoutingModule } from './front-page-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AventurasComponent } from './components/aventuras/aventuras.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { HomeComponent } from './components/home/home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SocialFabComponent } from './shared/social-fab/social-fab.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FrontPageRoutingModule,
    FormsModule,
    PipesModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FrontPageComponent,
    HeaderComponent,
    HomeComponent,
    AventurasComponent,
    FooterComponent,
    SocialFabComponent,
    ComingSoonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class FrontPageModule { }
