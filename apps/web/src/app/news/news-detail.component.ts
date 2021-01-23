import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HnService } from '../services/hn.service';
import { NewsDetailDto } from '../services/news-detail.dto';

@Component({
  selector: 'nx-pwa-news-comment',
  template: `
    <div 
      *ngIf="newsDetail$ | async as detail"
      class="flex flex-col px-4 py-3">
      <h2 class="leading-snug text-xl font-medium break-words">{{detail.title}}</h2>
      <p 
        *ngIf="detail.domain"
        class="tracking-wide text-xs text-gray-400">({{detail.domain}})</p>
      <p class="leading-relaxed text-xs text-gray-400 mt-2 break-all">
        <span class="whitespace-nowrap">by
          <i class="cursor-pointer text-pink-500">{{detail.user}}</i>
        </span>
        <span 
          class="border-l pl-2 border-gray-200 ml-2 whitespace-nowrap">{{detail.time_ago}}</span>
      </p>
      <div class="mt-6">
        <h3 class="tracking-wide text-gray-600 pb-1 border-b border-gray-200 mb-6">{{detail.comments_count}} comments</h3>
        {{detail.comments | json}}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent implements OnInit {
  newsDetail$: Observable<NewsDetailDto>;

  constructor(
    private route: ActivatedRoute,
    private hnService: HnService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.newsDetail$ = this.hnService.fetchDetail(param.id);
    });
  }
}
