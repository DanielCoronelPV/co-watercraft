import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import Especialidades from 'src/app/interfaces/especialidades.interface';
import { VerPrestadorComponent } from '../ver-prestador/ver-prestador.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() id?: string;
  @Input() nombre?: string;
  @Input() direccion?: string;
  @Input() departamento?: string;
  @Input() ciudad?: string;
  @Input() telefono?: string;
  @Input() registro?: string;
  // @Input() especialidad?: Especialidades[];
  @Input() descripcion?: string;
  @Input() horario?: string;
  @Input() tipo?: string;
  @Input() svg?: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // console.log(
    //   this.id,
    //   this.nombre,
    //   this.direccion,
    //   this.departamento,
    //   this.ciudad,
    //   this.telefono,
    //   this.tipo,
    // this.svg,
    // )
  }

  verCard() {
    const screenWidth = window.innerWidth;
    let dialogWidth = '330px';

    if (screenWidth >= 768) {
      dialogWidth = '500px';
    }

    this.dialog.open(VerPrestadorComponent, {
      data: {
        id: this.id,
        nombre: this.nombre,
        direccion: this.direccion,
        departamento: this.departamento,
        ciudad: this.ciudad,
        telefono: this.telefono,
        registro: this.registro,
        // especialidad: this.especialidad,
        descripcion: this.descripcion,
        horario: this.horario,
        tipo: this.tipo,
        svg: this.svg,
      },
      panelClass: 'rounded-md',
      width: dialogWidth,
      height: 'full',
    });
  }
}
