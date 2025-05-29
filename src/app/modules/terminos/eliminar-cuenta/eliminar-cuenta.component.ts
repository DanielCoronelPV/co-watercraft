import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.scss'],
})
export class EliminarCuentaComponent {
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  nombre: string = '';
  documento: string = '';
  email: string = '';
  message: string = '';
  formulario: any;
  formIsValid = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl(''),
    });

    this.formulario.valueChanges.subscribe(() => {
      this.formIsValid = this.formulario.valid;
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  public sendEmail(e: Event) {

    e.preventDefault();
    const serviceID = 'service_9magv04';
    const templateID = 'template_c6pufvh';
    const publicKey = 'ggORyKWtzn-w6M3Tk'
    console.log(e.target)
    emailjs.sendForm(`${serviceID}`, `${templateID}`, e.target as HTMLFormElement, `${publicKey}`)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Se ha enviado su mensaje, en breve se contactarán con usted!');
      }, (error) => {
        console.log(error.text);
        alert(JSON.stringify(error.text))
      });

      this.goToHome();
  }
}
