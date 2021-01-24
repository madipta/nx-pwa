import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HnService, NewsType } from '../services/hn.service';

@Component({
  selector: 'nx-pwa-news',
  template: `
    <ng-container *ngIf="data">
      <div nxPwaNewsBody>
        <nx-pwa-news-item
          *ngFor="let res of data.result; index as i; trackBy: trackByFn"
          [item_id]="res.id"
          [points]="res.points"
          [url]="res.url"
          [title]="res.title"
          [domain]="res.domain"
          [user]="res.user"
          [time_ago]="res.time_ago"
          [comments_count]="res.comments_count"
        ></nx-pwa-news-item>
      </div>
      <nx-pwa-nav
        [page]="data.page"
        (prev)="prev()"
        (next)="next()"
      ></nx-pwa-nav>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
  data: { page: number; result: [] };
  subscription: Subscription;

  constructor(private cdr: ChangeDetectorRef, private hnService: HnService) {}

  ngOnInit() {
    this.subscription = this.hnService
      .select(NewsType.News)
      .subscribe((data) => {
        this.data = data;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackByFn(item) {
    return item.id;
  }

  prev() {
    this.hnService.prev();
  }

  next() {
    this.hnService.next();
  }
}
