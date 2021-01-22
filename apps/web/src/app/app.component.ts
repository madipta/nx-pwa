import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'nx-pwa-root',
  template: `
    <div class="flex items-center bg-gradient-to-b from-blue-600 to-blue-800 text-white px-1 py-3 shadow-xl">
      <h1 class="flex items-center">
        <img alt="NGPWA" src="./assets/icons/icon-72x72.png" class="w-9 h-9" />
        <span class="leading-tight text-blue-400 text-xl font-semibold sm:ml-1">PWA</span>
      </h1>
      <nav class="flex-grow flex justify-end leading-tight text-sm">
        <a routerLink="/top" class="px-1 mx-1">Top</a>
        <a routerLink="/news" class="px-1 mx-1">News</a>
        <a routerLink="/show" class="px-1 mx-1">Show</a>
        <a routerLink="/ask" class="px-1 mx-1">Ask</a>
        <a routerLink="/jobs" class="px-1 mx-1">Jobs</a>
      </nav>
    </div>
    <div class="mb-10 overflow-x-hidden overflow-y-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen max-w-screen-sm mx-auto';
}
