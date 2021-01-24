import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-pwa-news-item',
  template: `
    <div class="flex items-center pr-3 py-3 border-b border-gray-100 max-w-lg mx-auto">
      <div class="flex-none w-12 text-base text-center text-gray-300 font-medium">
        {{ points }}
      </div>
      <div class="ml-3">
        <p class="leading-tight font-medium break-words">
          <a 
            [href]="url" 
            target="_blank"
            *ngIf="!!domain"
            class="cursor-pointer text-gray-600">{{ title }}</a>
          <a 
            (click)="detail(item_id)"
            *ngIf="!domain"
            class="cursor-pointer text-gray-600">{{ title }}</a>
        </p>
        <p 
          *ngIf="domain"
          class="tracking-wide text-xs text-gray-400">({{domain}})
        </p>
        <p class="leading-relaxed text-xs text-gray-400 mt-2 break-all">
          <span *ngIf="user" class="whitespace-nowrap">by
            <i class="text-pink-500">{{user}}</i>
          </span>
          <span 
            *ngIf="time_ago"
            [ngClass]="{'border-l pl-2 ml-2': !!user, 'border-r pr-2 mr-2': comments_count>-1}"
            class="border-gray-200 whitespace-nowrap">{{time_ago}}</span>
          <span *ngIf="comments_count>-1" class="whitespace-nowrap">
            <a 
              (click)="detail(item_id)"
              class="cursor-pointer underline text-gray-600">{{comments_count}} comments
            </a>
          </span>
        </p>
      </div>
    </div>
  `,
})
export class NewsItemComponent {
  @Input() item_id = '';
  @Input() points = -1;
  @Input() url = '#';
  @Input() title = '';
  @Input() domain = '';
  @Input() user = '';
  @Input() time_ago = '';
  @Input() comments_count = -1;

  constructor(private route: Router) {}

  detail(id) {
    this.route.navigate(['news', id]);
  }
}
