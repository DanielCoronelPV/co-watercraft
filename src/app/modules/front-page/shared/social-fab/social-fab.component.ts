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
      link: 'https://www.instagram.com/cowatercraft?igsh=MW1ibndtaXBvZjAweg==',
      class: 'fab-instagram',
    },
    {
      label: 'Facebook',
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/share/15y7DzDKUU/?mibextid=wwXIfr',
      class: 'fab-facebook',
    },
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/14132126471',
      class: 'fab-whatsapp',
    },
    {
      label: 'Mail',
      icon: 'fas fa-envelope',
      link: 'mailto:info@cowatercraft.com',
      class: 'fab-email',
    },
    {
      label: 'Make Call',
      icon: 'fas fa-phone',
      link: 'tel:+14132126471',
      class: 'fab-phone',
    },

    {
      label: 'Location',
      icon: 'fas fa-location-dot',
      link: 'https://www.google.com/maps/place/Condado+de+Berkshire,+Massachusetts,+EE.+UU./@42.3928579,-73.2284436,10z/data=!3m1!4b1!4m6!3m5!1s0x89e40f35ad5002af:0x169b500c1396290b!8m2!3d42.311782!4d-73.1821623!16zL20vMGszZ2o?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D',
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
