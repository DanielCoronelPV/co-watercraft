import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentaciones',
  templateUrl: './documentaciones.component.html',
  styleUrls: ['./documentaciones.component.scss']
})
export class DocumentacionesComponent implements OnInit {

  path: string = 'documentos'
  documentos: any

  constructor(
  ) { }

  ngOnInit() {

  }

}
