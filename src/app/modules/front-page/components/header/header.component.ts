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

  logoSrc: string = '/assets/img/logo_co_watercraft_blanco_sinfondo_grande.png';

  get isMobile(): boolean {
    return window.innerWidth < 1024;
  }
    get buttonTextColor(): string {
  if (this.isMobile) return 'text-gray-700';
  return this.isBelowViewport ? 'text-gray-700' : 'text-white';
}

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngAfterViewInit() {
      // this.clickOnFirstButton();
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

  // private clickOnFirstButton() {
  //   if (this.buttons && this.buttons.length > 0) {
  //     const firstButton = this.buttons.first.nativeElement;
  //     setTimeout(() => {
  //       firstButton.focus();
  //       firstButton.click();
  //     }, 400);
  //   }
  // }

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
