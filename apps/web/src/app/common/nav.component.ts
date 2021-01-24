import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HnService } from '../services/hn.service';

@Component({
  selector: 'nx-pwa-nav',
  template: `
    <div class="fixed bottom-0 left-0 right-0 text-center text-sm">
      <p class="inline-block bg-gray-100 px-4 py-2 rounded-t-3xl border border-b-0 border-gray-200 shadow-lg mx-auto">
        <a
          (click)="onPrevClick()"
          [ngClass]="{
            'underline text-blue-500': page > 1,
            'text-gray-500': page <= 1
          }"
          class="cursor-pointer tracking-tight px-2 py-1 focus:outline-none"
        >prev</a>
        <span class="text-xs text-gray-600 px-4">{{ page }}</span>
        <a
          (click)="onNextClick()"
          [ngClass]="{
            'underline text-blue-500': !eof,
            'text-gray-500': eof
          }"
          class="cursor-pointer tracking-tight px-2 py-1 focus:outline-none"
        >next</a>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() page = 1;
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  subscription: Subscription;
  eof = false;

  constructor(private cdr: ChangeDetectorRef, private hnService: HnService) {}

  ngOnInit(): void {
    this.subscription = this.hnService.eof$.subscribe(val => {
      this.eof = val;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPrevClick() {
    this.prev.emit();
  }

  onNextClick() {
    this.next.emit();
  }
}
