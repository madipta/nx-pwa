import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
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
            class="w-9 h-9"
          />
          <span class="leading-tight text-blue-300 text-xl font-semibold ml-1">
            PWA
          </span>
        </h1>
        <nav class="flex-grow flex items-center justify-end leading-tight text-white text-sm">
          <a routerLink="/top" class="px-1 mx-1">Top</a>
          <a routerLink="/news" class="px-1 mx-1">News</a>
          <a routerLink="/show" class="px-1 mx-1">Show</a>
          <a routerLink="/ask" class="px-1 mx-1">Ask</a>
          <a routerLink="/jobs" class="px-1 mx-1">Jobs</a>
        </nav>
      </div>
    </div>
    <div class="w-full mb-9 max-w-screen-sm overflow-auto mx-auto">
      <router-outlet></router-outlet>
    </div>
    <div
      *ngIf="isLoading"
      class="fixed top-0 bottom-0 left-0 right-0 bg-gray-200 opacity-40 z-90">
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen overflow-hidden';

  subscription: Subscription;
  isLoading = false;

  constructor(private hnService: HnService) {}

  ngOnInit(): void {
    this.subscription = this.hnService.loading$.subscribe(val => {
      this.isLoading = val;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
