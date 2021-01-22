import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-pwa-nav',
  template: `
  <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-blue-50 text-gray-700 text-sm leading-tight py-2">
    <button 
      (click)="onPrevClick()"
      class="cursor-pointer text-blue-600 tracking-tight px-2 py-1 focus:outline-none">< prev</button>
    <span class="text-gray-400 mx-4">{{ page }}</span>
    <button 
      (click)="onNextClick()"
      class="cursor-pointer text-blue-600 tracking-tight px-2 py-1 focus:outline-none">next ></button>
  </div>
  `,
})
export class NavComponent {
  @Input() page = 1;
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();
  onPrevClick() {
    this.prev.emit()
  }
  onNextClick() {
    this.next.emit()
  }
}
