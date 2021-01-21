import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-pwa-root',
  template: `
    <div class="flex flex-col w-full bg-gray-200 max-w-screen-lg mx-auto">
      <div class="flex items-center bg-yellow-600 text-white p-2">
        <h1 class="flex items-center">
          <img
            alt="NGPWA"
            src="./assets/icons/icon-72x72.png"
            class="w-8 h-8"
          />
          <span class="leading-tight text-lg font-semibold ml-1">PWA</span>
        </h1>
        <nav class="flex-grow flex justify-end leading-tight text-xs sm:text-sm">
          <a routerLink="/top" class="px-1 mx-1">Top</a>
          <a routerLink="/news" class="px-1 mx-1">News</a>
          <a routerLink="/show" class="px-1 mx-1">Show</a>
          <a routerLink="/ask" class="px-1 mx-1">Ask</a>
          <a routerLink="/jobs" class="px-1 mx-1">Jobs</a>
        </nav>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
