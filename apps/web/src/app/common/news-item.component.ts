import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-pwa-news-item',
  template: `
    <div class="flex w-full items-center text-gray-700 pr-3 py-3 border-b border-gray-100 max-w-lg mx-auto">
      <div class="flex-none w-14 text-base text-center text-blue-300 font-semibold">
        {{ points }}
      </div>
      <div class="leading-snug text-sm ml-3">
        <p>
          <a [href]="url" class="mr-2">{{ title }}</a>
          <span *ngIf="domain" class="text-xs text-gray-400">({{domain}})</span>
        </p>
        <p class="text-xs text-gray-500 font-light mt-2">
          <span *ngIf="user">by {{user}}</span>
          <span *ngIf="time_ago" class="mx-2">{{time_ago}}</span>
          <span *ngIf="comments_count">{{comments_count}} comments</span>
        </p>
      </div>
    </div>
  `,
})
export class NewsItemComponent {
  @Input() points = 1;
  @Input() url = '#';
  @Input() title = '';
  @Input() domain = '';
  @Input() user = '';
  @Input() time_ago = '';
  @Input() comments_count = 0;
}
