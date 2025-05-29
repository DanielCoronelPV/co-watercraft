import { Component } from '@angular/core';

@Component({
  selector: 'app-aventuras',
  templateUrl: './aventuras.component.html',
  styleUrls: ['./aventuras.component.scss'],
})
export class AventurasComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const screenWidth = window.innerWidth;
      const yOffset = screenWidth >= 1024 ? -70 : -60; // Aplica el offset según el tamaño

      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
