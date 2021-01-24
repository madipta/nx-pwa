import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsDetailDto } from './news-detail.dto';

export type NewsType = 'top' | 'news' | 'show' | 'ask' | 'jobs';

export const NewsLinks: Record<NewsType, string> = {
  top: 'https://api.hackerwebapp.com/news',
  news: 'https://api.hackerwebapp.com/newest',
  show: 'https://api.hackerwebapp.com/show',
  ask: 'https://api.hackerwebapp.com/ask',
  jobs: 'https://api.hackerwebapp.com/jobs',
};

@Injectable({
  providedIn: 'root',
})
export class HnService {
  private fetchSubject = new Subject<any>();
  private eofSubject = new Subject<boolean>();
  private loadingSubject = new Subject<boolean>();
  private currentUrl = '';
  private currentPage = 1;
  private _eof = false;
  readonly rowCount = 30;

  select(type: NewsType, page = 1): Observable<{ page: number; result: [] }> {
    this.eof = false;
    this.currentUrl = NewsLinks[type];
    this.currentPage = page;
    this.fetchNews();
    return this.fetchSubject.asObservable();
  }

  get eof$() {
    return this.eofSubject.asObservable();
  }

  get loading$() {
    return this.loadingSubject.asObservable();
  }

  private get eof() {
    return this._eof;
  }

  private set eof(val: boolean) {
    this._eof = val;
    this.eofSubject.next(val);
  }

  next() {
    if (this.eof) {
      return;
    }
    this.currentPage = this.currentPage + 1;
    this.fetchNews();
  }

  prev() {
    if (this.currentPage <= 1) {
      this.currentPage = 1;
      return;
    }
    this.eof = false;
    this.currentPage = this.currentPage - 1;
    this.fetchNews();
  }

  private fetchNews(options?) {
    this.loadingSubject.next(true);
    fetch(this.currentUrl + `?page=${this.currentPage}`, options)
      .then((res) => {
        res.json().then((result) => {
          if (!result || !result.length) {
            if (this.currentPage > 1) {
              this.currentPage = this.currentPage - 1;
            }
            this.loadingSubject.next(false);
            this.eof = true;
            return;
          }
          if (result.length < this.rowCount) {
            this.eof = true;
          }
          this.fetchSubject.next({
            page: this.currentPage,
            result,
          });
          this.loadingSubject.next(false);
        });
      })
      .catch((err) => {
        console.error(err);
        this.loadingSubject.next(false);
      });
  }

  fetchDetail(id, options?) {
    return new Observable<NewsDetailDto>((fetchObserver) => {
      this.loadingSubject.next(true);
      let cancelToken = false;
      fetch(`https://api.hackerwebapp.com/item/${id}`, options)
        .then((res) => {
          if (!cancelToken) {
            res.json().then((result) => {
              fetchObserver.next(result);
              this.loadingSubject.next(false);
            });
          }
        })
        .catch((err) => {
          console.error(err);
          this.loadingSubject.next(false);
        });
      return () => {
        cancelToken = true;
      };
    });
  }
}
