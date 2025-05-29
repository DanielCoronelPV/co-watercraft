import { Component, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent implements OnInit {
  constructor(private scroll: ScrollService) {}

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onClick(event: any) {
    if (!event) return;

    if (event.target.innerText.toLowerCase() === 'descargar') {
      const homeElement = document.getElementById('home');
      if (homeElement) {
        this.scroll.scrollToElementById('home');
      }
    } else {
      const targetElement = document.getElementById(
        event.target.innerText.toLowerCase() || event.target.name
      );
      if (targetElement) {
        this.scroll.scrollToElementById(targetElement.id);
      }
    }
  }

  scrollToElement(elementId: string | undefined) {
    if (!elementId) return;
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  buttonHandler() {
    // console.log('se hizo click');
  }

  onScroll() {
    this.scroll.setScrollPosition(window.scrollY);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}
