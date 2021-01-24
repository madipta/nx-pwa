import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[nxPwaNewsBody]',
})
export class NewsBodyDirective {
  constructor(el: ElementRef) {
    const html = el.nativeElement as HTMLElement;
    html.classList.add(...'flex flex-col px-4 pt-2 pb-16'.split(' '));
  }
}
