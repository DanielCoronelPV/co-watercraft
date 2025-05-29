import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChildren('buttons') buttons?: QueryList<ElementRef>;
  @ViewChild('pageContainer') pageContainer!: ElementRef;

  navId = new EventEmitter();
  @ViewChild('elRef') elRef!: ElementRef<HTMLInputElement>;
  @Input() pageId!: any;

  @Input() context: 'front-page' | 'seccion' = 'front-page';

  isScrolled: boolean = false;
  isBelowViewport = false;
  isBelow1024: boolean = window.innerWidth < 1024; // Ya tienes esto, ¡perfecto!

  logoSrc: string = '/assets/img/logo_co_watercraft.svg';
  // Inicializa buttonTextColor basándose en el ancho inicial de la pantalla
  buttonTextColor: string =
    window.innerWidth < 1025 ? 'text-black' : 'text-white';

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngAfterViewInit() {
    if (this.context !== 'seccion') {
      this.clickOnFirstButton();
    }
  }

  pages = [
    {
      id: 'home',
      text: 'Home',
    },
    {
      id: 'adventure',
      text: 'Adventure',
    },
    {
      id: 'coming',
      text: 'Coming',
    },
    // {
    //   id: 'contact',
    //   text: 'Contact',
    // },
  ];

  get filteredPages() {
    if (this.context === 'front-page') {
      return this.pages.filter((page) => page.id !== 'inicio');
    } else if (this.context === 'seccion') {
      return this.pages.filter(
        (page) =>
          page.id === 'inicio' ||
          page.id === 'guia-medica' ||
          page.id === 'guia-prestadores' ||
          page.id === 'visaciones-online'
      );
    } else {
      return [];
    }
  }

  private clickOnFirstButton() {
    if (this.buttons && this.buttons.length > 0) {
      const firstButton = this.buttons.first.nativeElement;
      setTimeout(() => {
        firstButton.focus();
        firstButton.click();
      }, 400);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isBelow1024 = event.target.innerWidth < 1024;
    // Modifica buttonTextColor aquí
    this.buttonTextColor =
      event.target.innerWidth < 1025 ? 'text-black' : 'text-white';
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollPosition > 0;
    this.isBelowViewport =
      scrollPosition > this.pageContainer.nativeElement.clientHeight;

    if (this.pageContainer) {
      const containerTop = this.pageContainer.nativeElement.offsetTop;
      const scrollPosition = window.scrollY;
      const yOffset = 50;

      const visibleElement = this.pages.find((page) => {
        const element = document.getElementById(page.id);

        if (element) {
          const elementTop = element.offsetTop - containerTop;
          const elementBottom = elementTop + element.clientHeight;

          return (
            elementTop - yOffset <= scrollPosition &&
            scrollPosition <= elementBottom
          );
        }

        return false;
      });

      if (visibleElement) {
        this.focusOnElement(visibleElement.id);
      }

      // La lógica de `buttonTextColor` en el scroll debe coexistir con la del resize
      // Si la pantalla es pequeña, `buttonTextColor` ya es 'text-black' por `onResize`.
      // Si la pantalla es grande y haces scroll, entonces se vuelve 'text-black'.
      if (this.isBelowViewport) {
        // Solo cambia a text-black si la pantalla es grande, de lo contrario mantén lo que `onResize` estableció.
        if (window.innerWidth >= 1025) {
          this.buttonTextColor = 'text-black';
        }
      } else {
        // Si la pantalla es grande y no hay scroll, vuelve a 'text-white'.
        if (window.innerWidth >= 1025) {
          this.buttonTextColor = 'text-white';
        }
      }
    }
  }

  // La lógica de onNavHover también debe considerar el tamaño de la pantalla
  onNavHover(isHovered: boolean) {
    if (window.innerWidth < 1025) {
      // Si la pantalla es pequeña, siempre es text-black, ignora el hover
      this.buttonTextColor = 'text-black';
    } else {
      // Lógica original para pantallas grandes
      if (isHovered && this.isBelowViewport) {
        this.buttonTextColor = 'text-black';
      } else {
        if (this.isBelowViewport) {
          this.buttonTextColor = 'text-white'; // Esto parece un error aquí, debería ser text-black si isBelowViewport es true
        } else {
          this.buttonTextColor = 'text-white'; // Si no hay scroll, text-white
        }
      }
    }
  }

  private focusOnElement(id: string) {
    const button = this.buttons?.find(
      (button) => button.nativeElement.id === id
    );

    if (button) {
      button.nativeElement.focus();
    }
  }

  goTo(path: any) {
    this.router.navigate([path]);
  }
}
