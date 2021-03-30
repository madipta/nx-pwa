import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HnService } from './services/hn.service';

@Component({
  selector: 'nx-pwa-root',
  template: `
    <div class="flex bg-gradient-to-b from-blue-600 to-blue-900 py-3 shadow-xl">
      <div class="flex w-full items-center px-1 max-w-screen-sm mx-auto">
        <h1 class="flex items-center">
          <img
            alt="NGPWA"
            src="./assets/icons/icon-72x72.png"
            height="36"
            width="36"
          />
          <span class="leading-tight text-blue-300 text-xl font-semibold ml-1">
            PWA
          </span>
        </h1>
        <nav class="flex-grow flex items-center justify-end text-white text-xs font-medium">
          <a routerLink="/news/top" routerLinkActive="bg-blue-500" class="px-2 py-1 rounded mr-1">Top</a>
          <a routerLink="/news/newest" routerLinkActive="bg-blue-500" class="px-2 py-1 rounded mr-1" >News</a>
          <a routerLink="/news/show" routerLinkActive="bg-blue-500" class="px-2 py-1 rounded mr-1">Show</a>
          <a routerLink="/news/ask" routerLinkActive="bg-blue-500" class="px-2 py-1 rounded mr-1">Ask</a>
          <a routerLink="/news/jobs" routerLinkActive="bg-blue-500" class="px-2 py-1 rounded mr-1">Jobs</a>
        </nav>
      </div>
    </div>
    <div
      #scrollEl
      class="bg-white w-full max-w-screen-sm overflow-x-hidden overflow-y-auto mx-auto">
      <router-outlet></router-outlet>
    </div>
    <div
      *ngIf="isLoading"
      class="fixed top-0 bottom-0 left-0 right-0 bg-gray-200 opacity-40 z-90"
    ></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen overflow-hidden';
  @ViewChild('scrollEl') scrollEl: ElementRef;

  subscription: Subscription;
  isLoading = false;

  constructor(private cdr: ChangeDetectorRef, private hnService: HnService) {}

  ngOnInit(): void {
    this.subscription = this.hnService.loading$.subscribe((val) => {
      this.isLoading = val;
      this.cdr.markForCheck();
      if (val) {
        this.scrollEl.nativeElement.scroll(0, 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
