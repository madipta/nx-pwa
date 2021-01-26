import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsCommentDto } from '../../services/news-comment.dto';

@Component({
  selector: 'nx-pwa-news-comments',
  template: `
    <div
      *ngFor="let head of comments; trackBy: trackByFn"
      [ngClass]="{
        'pl-3 mt-2': head.level > 0 && head.level < 6,
        'mt-8': head.level === 0
      }">
      <p class="leading-relaxed text-xs">
        <i class="font-medium text-pink-500">{{head.user}}</i>
        <span class="text-gray-400 ml-2">{{head.time_ago}}</span>
      </p>
      <p 
        [innerHTML]="head.content"
        [ngClass]="{
          'pl-2 border-l border-gray-200 ml-1': head.level > 0
        }"
        class="leading-snug text-sm text-gray-500 break-words overflow-auto"
      ></p>
      <nx-pwa-news-comment root="true" [comments]="head.comments"></nx-pwa-news-comment>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCommentsComponent {
  @Input() comments: NewsCommentDto[] = [];

  trackByFn(item) {
    return item.id;
  }
}
