import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-pwa-nav',
  template: `
    <div class="fixed bottom-0 left-0 right-0 text-center text-sm">
      <p class="inline-block bg-blue-50 px-4 pb-1 pt-2 rounded-t-2xl border border-blue-200 shadow-lg mx-auto">
        <a
          (click)="onPrevClick()"
          [ngClass]="{
            'text-blue-500': page > 1,
            'text-blue-300': page <= 1
          }"
          class="cursor-pointer font-medium tracking-tight px-2 py-1 focus:outline-none"
        >prev</a>
        <span class="text-xs text-gray-700 px-4">{{ page }}</span>
        <a
          (click)="onNextClick()"
          class="cursor-pointer font-medium text-blue-500 tracking-tight px-2 py-1 focus:outline-none"
        >next</a>
      </p>
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
