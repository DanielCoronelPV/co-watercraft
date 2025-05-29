import { Component } from '@angular/core';

@Component({
  selector: 'app-social-fab',
  templateUrl: './social-fab.component.html',
  styleUrls: ['./social-fab.component.scss'],
})
export class SocialFabComponent {
  isOpen = false;
  rotateForward = false;
  bubbleVisible = true;

  hoveredLabel: string | null = null;
  hoveredIndex: number | null = null;

  socialOptions = [
    {
      label: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://instagram.com/usuario',
      class: 'fab-instagram',
    },
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/1234567890',
      class: 'fab-whatsapp',
    },
    {
      label: 'Mail',
      icon: 'fas fa-envelope',
      link: 'mailto:correo@example.com',
      class: 'fab-email',
    },
    {
      label: 'Make Call',
      icon: 'fas fa-phone',
      link: 'tel:+1234567890',
      class: 'fab-phone',
    },

    {
      label: 'Location',
      icon: 'fas fa-location-dot',
      link: 'https://maps.app.goo.gl/64Tsfc1FfWPMhGUWA',
      class: 'fab-phone',
    },
  ];

  toggleMenu() {
    if (!this.isOpen) {
      this.rotateForward = true;
      this.isOpen = true;
      this.bubbleVisible = false;
    } else {
      this.rotateForward = false;
      this.isOpen = false;

      // Esperá a que termine la animación de cierre antes de volver a mostrar la burbuja
      setTimeout(() => {
        this.bubbleVisible = true;
      }, 300); // Duración igual a fadeOutLeft
    }
  }

  onHover(label: string, index: number) {
    this.hoveredLabel = label;
    this.hoveredIndex = index;
  }

  onLeave() {
    this.hoveredLabel = null;
    this.hoveredIndex = null;
  }
}
