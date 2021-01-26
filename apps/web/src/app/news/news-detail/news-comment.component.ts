import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NewsCommentDto } from '../../services/news-comment.dto';

@Component({
  selector: 'nx-pwa-news-comment',
  template: `
    <ng-container *ngIf="comments.length">
      <p *ngIf="root" class="text-center my-1">
        <a 
          (click)="toggleShow()"
          class="cursor-pointer text-xs text-gray-600 underline"
        >{{ show ? 'hide replies' : 'show replies' }}</a>
      </p>
      <ng-container *ngIf="show">
        <div
          *ngFor="let comment of comments;"
          [ngClass]="{
            'pl-3 sm:pl-6 mt-2': comment.level > 0 && comment.level < 6,
            'mt-8': comment.level === 0
          }">
          <p class="leading-relaxed text-xs">
            <i class="font-medium text-pink-500">{{comment.user}}</i>
            <span class="text-gray-400 ml-2">{{comment.time_ago}}</span>
          </p>
          <p 
            [innerHTML]="comment.content"
            [ngClass]="{
              'pl-2 border-l border-gray-200 ml-1': comment.level > 0
            }"
            class="leading-snug text-sm text-gray-500 break-words overflow-auto"
          ></p>
          <nx-pwa-news-comment
            *ngFor="let repl of comment.comments"
            [comments]="repl.comments"
          ></nx-pwa-news-comment>
        </div>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCommentComponent implements OnInit {
  @Input() root = false;
  @Input() comments: NewsCommentDto[];
  show = true;

  ngOnInit(): void {
    if (this.root) {
      this.show = false;
    };
  }

  trackByFn(item) {
    return item.id;
  }

  toggleShow() {
    this.show = !this.show;
  }
}
