import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-pwa-nav',
  template: `
    <div class="fixed bottom-0 left-0 right-0 text-sm">
      <div class="flex items-center justify-center bg-white py-1 border-t border-blue-100">
        <a
          (click)="onPrevClick()"
          class="cursor-pointer font-medium text-blue-500 tracking-tight px-2 py-1 focus:outline-none"
        >prev</a>
        <span class="text-xs text-gray-500 px-4">{{ page }}</span>
        <a
          (click)="onNextClick()"
          class="cursor-pointer font-medium text-blue-500 tracking-tight px-2 py-1 focus:outline-none"
        >next</a>
      </div>
    </div>
  `,
})
export class NavComponent {
  @Input() page = 1;
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  onPrevClick() {
    this.prev.emit();
  }

  onNextClick() {
    this.next.emit();
  }
}
