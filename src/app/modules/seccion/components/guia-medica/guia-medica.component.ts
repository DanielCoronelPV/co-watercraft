import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerMedicoComponent } from './ver-medico/ver-medico.component';
import { FormBuilder, FormControl } from '@angular/forms';

import { Content, TDocumentInformation } from 'pdfmake/interfaces';
import { Doctor } from './models/doctor.model';
import { VerPrestadorComponent } from './ver-prestador/ver-prestador.component';
import { ciudades } from '../../data/ciudades';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = (pdfFonts as any).pdfMake.vfs;

@Component({
  selector: 'app-guia-medica',
  templateUrl: './guia-medica.component.html',
  styleUrls: ['./guia-medica.component.scss'],
})
export class GuiaMedicaComponent {
  // path: string = 'medicos';
  // medicos: any;
  // datosFiltro: any;

  // datos: any = [];
  // ciudades: any[] = [];
  // datosFiltrados: any = [];
  // ciudadesAdd: string[] = [];
  // opcionSeleccionada = -1;
  // cities: any[] = ['Todos'];

  // filtroCiudad: string = '';
  // expanded = false;
  // pageSize: number = 12;
  // currentPage: number = 1;

  // documentos: any;

  // formulario: any;
  // especialidadesArray: any;
  // prestadoresArray = [
  //   { nombre: 'Ambulancias' },
  //   { nombre: 'Centro de Diagnóstico' },
  //   { nombre: 'Laboratorios' },
  //   { nombre: 'Sanatorios, Clínicas y Hospitales' },
  // ];

  // public orderBy: keyof Doctores | undefined | '' = '';

  // // SOBRE PRESTADORES
  // // pathPrestador: string = 'prestadores';
  // prestadores: Prestadores[] = [];
  // prestadoresCopy: Prestadores[] = [];
  // prestadoresFiltrados: any[] = [];
  // ciudadesAddPrestador: string[] = [];
  // opcionSeleccionadaPrestador = 4;
  // filtroCiudadPrestador: string = '';
  // expandedPrestador = false;
  // pageSizePrestador: number = 12;
  // currentPagePrestador: number = 1;
  // formularioPrestador: any;

  // tiposPrestadores: string[] = [];
  // prestadoresFiltro: any;

  // tiposEspecialidades: string[] = [];

  // prestadoresArrayPrestador = [
  //   { nombre: 'Ambulancias' },
  //   { nombre: 'Centro de Diagnóstico' },
  //   { nombre: 'Laboratorios' },
  //   { nombre: 'Sanatorios, Clínicas y Hospitales' },
  // ];
  // prestadoresOpciones = [
  //   { tipo: 'Ambulancias', index: 0, cantidad: 0 },
  //   { tipo: 'Centro de Diagnóstico', index: 1, cantidad: 0 },
  //   { tipo: 'Laboratorios', index: 2, cantidad: 0 },
  //   { tipo: 'Sanatorios, Clínicas y Hospitales', index: 3, cantidad: 0 },
  //   { tipo: 'Todos', index: 4, cantidad: 0 },
  // ];

  // ciudadesPrestador: string[] = [];
  // ciudadesCopy: string[] = [];
  // departamentos: string[] = [];

  // public orderByPrestador: keyof Prestadores | undefined | '' = '';

  // constructor(
  //   private firebaseService: FirebaseService,
  //   public dialog: MatDialog,
  //   private formBuilder: FormBuilder,
  //   private pdfGeneratorService: PdfGeneratorService,
  //   private alertService: AlertService,
  //   // private comunicacionDatosService: ComunicacionDatosService
  //   private comunicacionDatosService: ComunicacionDatosService
  // ) {
  //   this.formulario = this.formBuilder.group({
  //     // prestadorFilter: [''],
  //     especialidadFilter: [''],
  //     localidadFilter: [''],
  //   });

  //   this.formulario = this.formBuilder.group({
  //     prestadorFilter: ['Todos'],
  //     departamentoFilter: ['Todos'],
  //   });
  // }

  // ngOnInit() {
  //   /**
  //    * ESPECIALIDADES
  //    */
  //   this.firebaseService
  //     .getData('especialidades')
  //     .subscribe((especialidades) => {
  //       this.especialidadesArray = especialidades;

  //       this.especialidadesArray.sort((a: any, b: any) => {
  //         if (a.nombre < b.nombre) {
  //           return -1;
  //         }
  //         if (a.nombre > b.nombre) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       localStorage.setItem(
  //         'especialidades',
  //         JSON.stringify(this.especialidadesArray)
  //       );
  //     });

  //   /**
  //    * GUIA MEDICA
  //    */
  //   this.firebaseService.getData('documentos').subscribe((doc) => {
  //     this.documentos = doc.filter(
  //       (documentos: any) => documentos.tipo === 'guia-medica'
  //     );
  //     this.documentos = this.documentos[0];
  //   });

  //   /**
  //    * MEDICOS
  //    */
  //   this.firebaseService.getData(this.path).subscribe((medicos) => {
  //     this.datos = medicos;
  //     this.medicos = medicos;
  //     // this.datosFiltrados = [...this.datos];
  //     this.ciudades = Array.from(
  //       new Set(this.medicos.map((p: any) => p.ciudad))
  //     );
  //     this.datos = this.datos.map((medicos: any) => {
  //       medicos.svg = 'doctor.svg';
  //     });
  //     localStorage.setItem('medicos', JSON.stringify(this.medicos));
  //   });

  //   /**
  //    * PRESTADORES
  //    */
  //   this.firebaseService.getData('prestadores').subscribe((data: any[]) => {
  //     this.prestadores = data;
  //     // posiblemente se eliminia abajo
  //     this.prestadoresOpciones[4].cantidad = this.prestadores.length;
  //     this.prestadores = this.prestadores.map((pf) => {
  //       switch (pf.tipo) {
  //         case 'Ambulancias':
  //           pf.svg = 'ambulance.svg';
  //           this.prestadoresOpciones[0].cantidad++;
  //           break;
  //         case 'Centro de Diagnóstico':
  //           pf.svg = 'diagnostic.svg';
  //           this.prestadoresOpciones[1].cantidad++;
  //           break;
  //         case 'Laboratorios':
  //           pf.svg = 'laboratory.svg';
  //           this.prestadoresOpciones[2].cantidad++;
  //           break;
  //         default:
  //           pf.svg = 'hospital.svg';
  //           this.prestadoresOpciones[3].cantidad++;
  //           break;
  //       }
  //       return pf;
  //     });

  //     localStorage.setItem('prestadores', JSON.stringify(this.prestadores));

  //     const ciudadesSet = new Set<string>();
  //     const departamentosSet = new Set<string>();

  //     // Recorrer el array y extraer los valores de 'ciudad' y 'departamento'
  //     this.prestadores.forEach(
  //       (item: { ciudad: string; departamento: string }) => {
  //         ciudadesSet.add(item.ciudad);
  //         departamentosSet.add(item.departamento);
  //       }
  //     );

  //     // Convertir los Sets a arrays
  //     this.ciudadesPrestador = Array.from(ciudadesSet);
  //     this.ciudadesCopy = Array.from(ciudadesSet);
  //     this.departamentos = Array.from(departamentosSet);

  //     this.departamentos.sort((a, b) => {
  //       if (a < b) {
  //         return -1;
  //       }
  //       if (a > b) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     data.forEach((d, i) => {
  //       if (i <= 5) {
  //         this.prestadoresFiltrados.push(d);
  //       }
  //     });

  //     this.addIconAndOrderPrestadores();
  //   });

  //   this.comunicacionDatosService.obtenerDato().subscribe((res) => {
  //     this.prestadoresFiltrados = this.prestadores.filter(
  //       (p: any) => p.tipo == res
  //     );
  //   });

  //   this.unificarDatos();
  // }

  // unificarDatos() {
  //   let medicosS = JSON.parse(localStorage.getItem('medicos') || '{}');
  //   let prestadoresS = JSON.parse(localStorage.getItem('prestadores') || '{}');

  //   let especialidadesS = JSON.parse(
  //     localStorage.getItem('especialidades') || '{}'
  //   );

  //   this.datosFiltro = [...prestadoresS, ...medicosS];

  //   prestadoresS.forEach((pf: any) => {
  //     if (!this.tiposPrestadores.includes(pf.tipo)) {
  //       this.tiposPrestadores.push(pf.tipo);
  //     }
  //   });

  //   especialidadesS.forEach((es: any) => {
  //     if (!this.tiposEspecialidades.includes(es.nombre)) {
  //       this.tiposEspecialidades.push(es.nombre);
  //     }
  //   });

  //   // console.log(this.tiposPrestadores);

  //   // Unir los arrays y permitir campos opcionales
  //   this.datosFiltro = [
  //     ...prestadoresS.map(
  //       (prestador: {
  //         registro: any;
  //         especialidad: any;
  //         descripcion: any;
  //         horario: any;
  //       }) => ({
  //         ...prestador,
  //         registro: prestador.registro || null, // Campo opcional
  //         especialidad: prestador.especialidad || null, // Campo opcional
  //         descripcion: prestador.descripcion || null, // Campo opcional
  //         horario: prestador.horario || null, // Campo opcional
  //       })
  //     ),
  //     ...medicosS.map((medico: { tipo: any; svg: any }) => ({
  //       ...medico,
  //       tipo: medico.tipo || null, // Campo opcional
  //       svg: medico.svg || null, // Campo opcional
  //     })),
  //   ];
  //   // this.datosFiltrados = this.datosFiltro.slice(1,12)
  //   this.datosFiltrados = this.datosFiltro;
  //   this.prestadoresFiltro = this.datosFiltro;
  //   // console.log('this.datosFiltro',this.datosFiltrados);
  // }

  // // REVISAR
  // // async onSubmit() {
  // //   const { especialidadFilter, localidadFilter } = this.formulario.value;
  // //   // console.log("🚀 ~ GuiaMedicaComponent ~ onSubmit ~ especialidadFilter:", especialidadFilter)

  // //   let doctorsFiltered: Doctor[] = this.datosFiltro;

  // //   // Caso 1: Si se seleccionó algo en especialidadFilter
  // //   if (especialidadFilter) {
  // //     doctorsFiltered = doctorsFiltered.filter(
  // //       (filtro) => filtro.especialidad === especialidadFilter
  // //     );
  // //   }

  // //   // Caso 2: Si se seleccionó algo en localidadFilter
  // //   if (localidadFilter) {
  // //     doctorsFiltered = doctorsFiltered.filter(
  // //       (filtro) => filtro.ciudad === localidadFilter
  // //     );
  // //   }

  // //   if (this.ciudadesAdd.length > 0) {
  // //     doctorsFiltered = doctorsFiltered.filter((filtro) =>
  // //       this.ciudadesAdd.includes(filtro.ciudad!)
  // //     );
  // //   }

  // //   doctorsFiltered.sort((a, b) => {
  // //     if (a.ciudad! < b.ciudad!) {
  // //       return -1;
  // //     }
  // //     if (a.ciudad! > b.ciudad!) {
  // //       return 1;
  // //     }
  // //     return 0;
  // //   });

  // //   if (doctorsFiltered.length > 0) {
  // //     this.pdfGeneratorService.generatePdf(
  // //       doctorsFiltered,
  // //       'assets/img/logo_precisapp.svg',
  // //       'LISTADO DE DOCTORES',
  // //       doctorsFiltered[0].ciudad!,
  // //       this.pdfGeneratorService.generateDoctorsContent
  // //     );
  // //   } else {
  // //     this.alertService.successOrError(
  // //       'Lo siento!',
  // //       'No existen prestadores en esta ciudad',
  // //       'error'
  // //     );
  // //   }
  // // }
  // onSubmit() {
  //   let dataa = this.prestadores;
  //   const { prestadorFilter, departamentoFilter } = this.formulario.value;

  //   // Caso 1: Si se seleccionó algo en especialidadFilter
  //   if (prestadorFilter !== 'Todos') {
  //     dataa = dataa.filter((filtro) => filtro.tipo === prestadorFilter);
  //   }
  //   // Caso 2: Si se seleccionó algo en departamentoFilter
  //   if (departamentoFilter !== 'Todos') {
  //     dataa = dataa.filter(
  //       (filtro) => filtro.departamento === departamentoFilter
  //     );
  //   }
  //   // Caso 3: Si se seleccionó algo en localidadFilter
  //   if (this.ciudadesAdd.length > 0) {
  //     dataa = dataa.filter((filtro) =>
  //       this.ciudadesAdd.includes(filtro.ciudad)
  //     );
  //   }

  //   dataa.sort((a, b) => {
  //     if (a.ciudad < b.ciudad) {
  //       return -1;
  //     }
  //     if (a.ciudad > b.ciudad) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   if (dataa.length > 0) {
  //     this.pdfGeneratorService.generatePdf(
  //       dataa,
  //       'assets/img/logo_precisapp.svg',
  //       'LISTADO DE PRESTADORES',
  //       dataa[0].ciudad!,
  //       this.pdfGeneratorService.generatePrestadoresContent
  //     );
  //   } else {
  //     this.alertService.successOrError(
  //       'Lo siento!',
  //       'No existen prestadores en esta ciudad',
  //       'error'
  //     );
  //   }
  // }

  // aplicarFiltro(): void {
  //   this.currentPage = 1;

  //   this.prestadoresFiltro = this.datosFiltro.filter(
  //     (data: any) =>
  //       data.ciudad.toLowerCase().includes(this.filtroCiudad.toLowerCase()) ||
  //       data.nombre.toLowerCase().includes(this.filtroCiudad.toLowerCase()) ||
  //       data.direccion.toLowerCase().includes(this.filtroCiudad.toLowerCase())
  //   );
  // }

  // actualizarDatosPagina(): void {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   this.datosFiltrados = this.datos.slice(startIndex, endIndex);
  // }

  // cambiarPagina(pagina: number): void {
  //   // Cambia la página y actualiza la lista de datos
  //   this.currentPage = pagina;
  //   this.actualizarDatosPagina();
  // }

  // getPaginas(): number[] {
  //   const totalPaginas = this.getTotalPaginas();
  //   return Array.from({ length: totalPaginas }, (_, index) => index + 1);
  // }

  // getTotalPaginas(): number {
  //   return Math.ceil(this.datos.length / this.pageSize);
  // }

  // verDato(dato: Doctor) {
  //   this.dialog.open(VerMedicoComponent, {
  //     data: dato,
  //     panelClass: 'rounded-md',
  //     // width: '1000px',
  //     minWidth: '340px',
  //   });
  // }

  // quitarSimbolo(cadena: any) {
  //   return cadena.replace('> ', '');
  // }

  // // changeTipo(event: any, index: number) {
  // //   this.opcionSeleccionada = index;
  // //   let tipo = this.quitarSimbolo(event.srcElement.innerText);
  // //   if (tipo == 'Todos') {
  // //     this.datosFiltrados = this.datosFiltro;
  // //   } else {
  // //     this.datosFiltrados = this.datosFiltro.filter(
  // //       (p: any) => p.especialidad == tipo
  // //     );
  // //   }
  // // }

  // showCheckboxes() {
  //   let checkboxes = document.getElementById('checkboxes')!;
  //   if (!this.expanded) {
  //     checkboxes.style.display = 'block';
  //     checkboxes.style.width = '448px';
  //     this.expanded = true;
  //   } else {
  //     checkboxes.style.display = 'none';
  //     this.expanded = false;
  //   }
  // }

  // modificarCiudades(ciudad: string) {
  //   const index = this.ciudadesAdd.indexOf(ciudad);
  //   if (index > -1) {
  //     this.ciudadesAdd.splice(index, 1);
  //   } else {
  //     this.ciudadesAdd.push(ciudad);
  //   }
  // }

  // openFile() {
  //   console.log('Se abrio', this.documentos.urlArchivo);
  //   window.open(this.documentos.urlArchivo, '_blank');
  // }

  // /***** */

  // itemsToShow: number = 10;
  // mostrarDatos: boolean = true;

  // cargarMas() {
  //   this.itemsToShow += 10;
  //   if (this.itemsToShow < this.datosFiltrados.length) {
  //   } else {
  //     this.mostrarDatos = false;
  //   }
  // }

  // isDisableMorePrestadores = false;

  // //posiblemente eliminar
  // loadMorePrestadores() {
  //   let i = 0;

  //   switch (this.opcionSeleccionada) {
  //     case 4:
  //       this.prestadores.forEach((prestador, index) => {
  //         if (index >= this.prestadoresFiltrados.length && i <= 5) {
  //           i++;
  //           this.prestadoresFiltrados.push(prestador);
  //         }
  //       });
  //       this.checkDisableMorePrestadores();
  //       break;
  //     case 3:
  //       let hospitalArray = this.prestadores.filter(
  //         (prestador) => prestador.tipo === 'Sanatorios, Clínicas y Hospitales'
  //       );
  //       hospitalArray.forEach((prestador, index) => {
  //         if (
  //           index >= this.prestadoresFiltrados.length &&
  //           i <= 5 &&
  //           prestador.tipo === 'Sanatorios, Clínicas y Hospitales'
  //         ) {
  //           i++;
  //           this.prestadoresFiltrados.push(prestador);
  //         }
  //       });
  //       this.checkDisableMorePrestadores();
  //       break;
  //     case 2:
  //       let laboratoryArray = this.prestadores.filter(
  //         (prestador) => prestador.tipo === 'Laboratorios'
  //       );

  //       laboratoryArray.forEach((prestador, index) => {
  //         if (
  //           index >= this.prestadoresFiltrados.length &&
  //           i <= 5 &&
  //           prestador.tipo === 'Laboratorios'
  //         ) {
  //           this.prestadoresFiltrados.push(prestador);
  //           i++;
  //         }
  //       });
  //       this.checkDisableMorePrestadores();
  //       break;
  //     case 1:
  //       let diagnosticArray = this.prestadores.filter(
  //         (prestador) => prestador.tipo === 'Centro de Diagnóstico'
  //       );

  //       diagnosticArray.forEach((prestador, index) => {
  //         if (
  //           index >= this.prestadoresFiltrados.length &&
  //           i <= 5 &&
  //           prestador.tipo === 'Centro de Diagnóstico'
  //         ) {
  //           i++;
  //           this.prestadoresFiltrados.push(prestador);
  //         }
  //       });
  //       this.checkDisableMorePrestadores();
  //       break;
  //     case 0:
  //       let ambulanciasArray = this.prestadores.filter(
  //         (prestador) => prestador.tipo === 'Ambulancias'
  //       );
  //       ambulanciasArray.forEach((prestador, index) => {
  //         if (
  //           index >= this.prestadoresFiltrados.length &&
  //           i <= 5 &&
  //           prestador.tipo === 'Ambulancias'
  //         ) {
  //           i++;
  //           this.prestadoresFiltrados.push(prestador);
  //         }
  //       });
  //       this.checkDisableMorePrestadores();
  //       break;
  //   }

  //   this.addIconAndOrderPrestadores();
  // }

  // checkDisableMorePrestadores() {
  //   if (
  //     this.prestadoresFiltrados.length ===
  //     this.prestadoresOpciones[this.opcionSeleccionada].cantidad
  //   ) {
  //     this.isDisableMorePrestadores = true;
  //   } else {
  //     this.isDisableMorePrestadores = false;
  //   }
  // }

  // changeTipo(event: any, metodo: string) {
  //   this.prestadoresFiltro = this.datosFiltrados;
  //   let tipo = this.quitarSimbolo(event.srcElement.innerText);

  //   if (metodo == 'especialidadSM') {
  //     let tipo = event.target.value;
  //     console.log('🚀 ~ GuiaMedicaComponent ~ changeTipo ~ tipo:', tipo);
  //     this.prestadoresFiltro = this.prestadoresFiltro.filter(
  //       (prestador: any) => prestador.especialidad === tipo
  //     );
  //   }

  //   if (tipo === 'todos') {
  //     this.prestadoresFiltro = this.datosFiltrados;
  //   }

  //   if (metodo == 'tipo') {
  //     this.prestadoresFiltro = this.prestadoresFiltro.filter(
  //       (prestador: any) => prestador.tipo === tipo
  //     );
  //   }

  //   if (metodo == 'especialidad') {
  //     this.prestadoresFiltro = this.prestadoresFiltro.filter(
  //       (prestador: any) => prestador.especialidad === tipo
  //     );
  //   }

  //   if (this.datosFiltrados.length === 0) {
  //     this.isDisableMorePrestadores = true;
  //   } else {
  //     this.checkDisableMorePrestadores();
  //     this.addIconAndOrderPrestadores();
  //   }
  // }

  // changePrestadores(event: any) {
  //   this.isDisableMorePrestadores = false;

  //   this.opcionSeleccionada = Number(event.target.value);
  //   let tipo = this.prestadoresOpciones[this.opcionSeleccionada].tipo;

  //   this.prestadoresFiltrados = [];

  //   if (tipo == 'Todos') {
  //     this.prestadores.forEach((prestador, index) => {
  //       if (index <= 5) {
  //         this.prestadoresFiltrados.push(prestador);
  //       }
  //     });
  //   } else {
  //     let i = 0;
  //     this.prestadores.forEach((prestador, index) => {
  //       if (prestador.tipo === tipo && i <= 5) {
  //         i++;
  //         this.prestadoresFiltrados.push(prestador);
  //       }
  //     });
  //   }

  //   if (this.prestadoresFiltrados.length === 0) {
  //     this.isDisableMorePrestadores = true;
  //   } else {
  //     this.addIconAndOrderPrestadores();
  //   }
  // }

  // addIconAndOrderPrestadores() {
  //   this.prestadoresFiltrados.sort((a, b) => {
  //     if (a.nombre < b.nombre) {
  //       return -1;
  //     }
  //     if (a.nombre > b.nombre) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  // updateCiudades(event: any) {
  //   let departamento: string = event.target.value;
  //   this.ciudades = [];
  //   this.ciudadesAdd = [];
  //   this.formulario.value.localidadFilter = 'Todos';

  //   if (departamento === 'Todos') {
  //     this.ciudades = this.ciudadesCopy;
  //   } else {
  //     ciudades.forEach((ciudad) => {
  //       if (ciudad.departamento.toLowerCase() === departamento.toLowerCase()) {
  //         this.ciudades.push(ciudad.ciudad);
  //       }
  //     });

  //     //ORDENA DE FORMA ASCENDENTE

  //     this.ciudades.sort((a, b) => {
  //       if (a < b) {
  //         return -1;
  //       }
  //       if (a > b) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   }
  // }
}
