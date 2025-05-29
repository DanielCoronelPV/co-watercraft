import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerPrestadorComponent } from '../guia-medica/ver-prestador/ver-prestador.component';
import { FormBuilder } from '@angular/forms';
import { ciudades } from '../../data/ciudades';
import { Prestador } from '../guia-medica/models/prestador.model';

@Component({
  selector: 'app-guia-prestadores',
  templateUrl: './guia-prestadores.component.html',
  styleUrls: ['./guia-prestadores.component.scss'],
})
export class GuiaPrestadoresComponent implements OnInit {
  ngOnInit() {
  }
}
