import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
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
    <div
      class="inline-block bg-pink-500 font-medium px-4 pt-2 pb-1 border-b-2 border-t border-pink-500 rounded-t-3xl mx-auto"
    >
      <a
        (click)="onPrevClick()"
        [ngClass]="{
          'text-white': page > 1,
          'text-pink-300': page <= 1
        }"
        class="cursor-pointer tracking-tight px-2 py-1 focus:outline-none"
        >prev</a
      >
      <span class="bg-white text-pink-600 text-center py-1 px-2 rounded-full mx-1">{{ page }}</span>
      <a
        (click)="onNextClick()"
        [ngClass]="{
          'text-white': !eof,
          'text-pink-300': eof
        }"
        class="cursor-pointer tracking-tight px-2 py-1 focus:outline-none"
        >next</a
      >
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit, OnDestroy {
  @HostBinding('className')
  rootClass = 'fixed bottom-0 left-0 right-0 text-center text-xs';
  @Input() page = 1;
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  subscription: Subscription;
  eof = false;

  constructor(private cdr: ChangeDetectorRef, private hnService: HnService) {}

  ngOnInit(): void {
    this.subscription = this.hnService.eof$.subscribe((val) => {
      this.eof = val;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPrevClick() {
    if (this.page > 1) {
      this.prev.emit();
    }
  }

  onNextClick() {
    if (!this.eof) {
      this.next.emit();
    }
  }
}
