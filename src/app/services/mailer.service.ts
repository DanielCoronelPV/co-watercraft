import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  constructor() {}

  // TODO: Centralizar el envio de los correos a traves de este servicio
  public sendEmail(e: Event) {
    e.preventDefault();
    const serviceID = 'service_9magv04';
    const templateID = 'template_c466qn3';
    const publicKey = 'ggORyKWtzn-w6M3Tk';
    console.log(e.target);
    emailjs
      .sendForm(
        `${serviceID}`,
        `${templateID}`,
        e.target as HTMLFormElement,
        `${publicKey}`
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Se ha enviado su mensaje, en breve se contactarán con usted!');
        },
        (error) => {
          console.log(error.text);
          alert(JSON.stringify(error.text));
        }
      );
  }
}
