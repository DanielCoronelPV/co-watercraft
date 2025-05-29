import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [Validators.required, this.emailValidator, Validators.minLength(6)],
    ],
    message: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Desplázate al principio de la página cuando la navegación se completa
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    })
  }

  public sendEmail(e: Event) {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    // e.preventDefault();
    const serviceID = 'service_9magv04';
    const templateID = 'template_c466qn3';
    const publicKey = 'ggORyKWtzn-w6M3Tk';

    // console.log(e.target);

    emailjs
      .send(
        `${serviceID}`,
        `${templateID}`,
        this.myForm.value,
        `${publicKey}`
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Se ha enviado su mensaje, en breve se contactarán con usted!');
          this.myForm.reset();
        },
        (error) => {
          console.log(error.text);
          alert(JSON.stringify(error.text));
        }
      );
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailPattern: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (control.value && !emailPattern.test(control.value)) {
      return { email: true };
    }
    return null;
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Campo requerido';

        case 'minlength':
          return this.getContactTranslation(errors);

        case 'email':
          return 'Email no válido';
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

  goTo(direccion:any){
    this.router.navigate([direccion])
  }
}
