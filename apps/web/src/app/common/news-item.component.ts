import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-pwa-news-item',
  template: `
    <div class="flex items-center pr-3 py-3 border-b border-gray-100 max-w-lg mx-auto">
      <div class="flex-none w-12 text-base text-center text-gray-300 font-medium">
        {{ points }}
      </div>
      <div class="leading-snug text-sm ml-3">
        <p>
          <a [href]="url" class="leading-tight font-medium text-base text-gray-600 mr-2">{{ title }}</a>
          <span *ngIf="domain" class="text-xs text-gray-400">({{domain}})</span>
        </p>
        <p class="text-xs text-gray-400 mt-2">
          <span *ngIf="user">by
            <a class="cursor-pointer underline text-pink-500">{{user}}</a>
          </span>
          <span 
            *ngIf="time_ago"
            [ngClass]="{'border-l': !!user, 'border-r': !!comments_count}"
            class="px-2 border-gray-200 mx-3">{{time_ago}}</span>
          <span *ngIf="comments_count">
            <a class="cursor-pointer underline text-gray-600">{{comments_count}} comments</a>
          </span>
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
