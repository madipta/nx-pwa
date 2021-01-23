import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'nx-pwa-root',
  template: `
    <div class="flex bg-gradient-to-b from-blue-600 to-blue-800 py-3 shadow-xl">
      <div class="flex w-full items-center px-1 max-w-screen-sm mx-auto">
        <h1 class="flex items-center">
          <img alt="NGPWA" src="./assets/icons/icon-72x72.png" class="w-9 h-9" />
          <span class="leading-tight text-blue-400 text-xl font-semibold ml-1">PWA</span>
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
    <div class="w-full mb-12 max-w-screen-sm overflow-x-hidden overflow-y-auto mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen overflow-hidden';
}
