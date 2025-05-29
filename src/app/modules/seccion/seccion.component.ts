import { Component, OnInit } from '@angular/core';
// import { ComunicacionDatosService } from 'src/app/services/comunicacion-datos.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss'],
})
export class SeccionComponent implements OnInit {

  opcionSeleccionada: number = -1;

  constructor(
  ) { }

  ngOnInit() {
  }



}
