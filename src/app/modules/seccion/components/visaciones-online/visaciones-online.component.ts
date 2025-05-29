import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-visaciones-online',
  templateUrl: './visaciones-online.component.html',
  styleUrls: ['./visaciones-online.component.scss'],
})
export class VisacionesOnlineComponent implements OnInit, OnDestroy {
  path: string = 'prestadores';
  especialistaSelected = false;

  prestadores: any = [];
  prestadoresFiltrados: any[] = [];
  opcionSeleccionada: any;

  public form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    cedula: ['', [Validators.required, Validators.minLength(5)]],
    especialidad: ['', Validators.required],
    prestador: [''],
    obs: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    // private firebaseService: FirebaseService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // if(!localStorage.getItem('prestadores')){
    // this.firebaseService.getData(this.path).subscribe((data) => {
    //   this.prestadores = data;
    //   // localStorage.setItem('prestadores',JSON.stringify(data));
    //   this.prestadoresFiltrados = data;
    // });
    // } else {
    //   let prestadores = JSON.parse(localStorage.getItem('prestadores')!);
    //   this.prestadores = prestadores;
    //   this.prestadoresFiltrados = prestadores;
    // }
  }

  changeEspecialidad(event: any) {
    let tipo = event.target.value;
    if (tipo == 'Selecciona una especialidad') {
      this.especialistaSelected = false;
    } else {
      this.especialistaSelected = true;
      this.prestadoresFiltrados = this.prestadores.filter(
        (prestador: any) => prestador.tipo == tipo
      );
    }
  }

  ngSubmit(e: Event) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { cedula, especialidad, nombre, obs, prestador } = this.form.value;
    let mensaje = `*Nombre:* ${nombre}\n*C.I:* ${cedula}\n*Especialidad:* ${especialidad}`;
    if (prestador !== '') {
      mensaje += `\n*Prestador:* ${prestador}`;
    }
    mensaje += `\n*Obs:* ${obs}`;

    const numero = '981916574';
    const enlace = this.generarEnlaceWhatsapp(numero, mensaje);
    window.open(enlace, '_blank');
  }

  generarEnlaceWhatsapp(numero: string, mensaje: string): string {
    numero = numero.replace(/\D/g, '');
    if (numero.charAt(0) !== '5' && numero.charAt(1) !== '5') {
      numero = '595' + numero;
    }
    mensaje = encodeURIComponent(mensaje);
    var enlace = 'https://wa.me/' + numero + '?text=' + mensaje;
    return enlace;
  }

  isValidField(field: string): boolean | null {
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.form.controls[field]) return null;

    const errors = this.form.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return ' - Campo requerido';

        case 'minlength':
          return this.getContactTranslation(errors);
      }
    }
    return null;
  }

  getContactTranslation(errors: any) {
    const minimo = 'Minimo';
    const caracteres = `${errors['minlength'].actualLength} / ${errors['minlength'].requiredLength}`;
    const caracter = 'Caracteres';

    return `${minimo} ${caracteres} ${caracter}`;
  }

  ngOnDestroy(): void {}
}
