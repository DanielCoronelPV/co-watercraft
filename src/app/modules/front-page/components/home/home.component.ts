import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
