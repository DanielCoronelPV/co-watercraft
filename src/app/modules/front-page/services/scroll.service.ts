import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ScrollService {
  constructor(private router: Router) {}

  private scrollPosition: number = 0;

  getScrollPosition(): number {
    return this.scrollPosition;
  }

  setScrollPosition(position: number): void {
    this.scrollPosition = position;
  }

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement {
    // console.log("element id : ", id);
    const element = <HTMLElement>document.querySelector(`#${id}`);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
