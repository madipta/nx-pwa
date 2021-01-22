import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum NewsType {
  Top = 'https://api.hackerwebapp.com/news',
  News = 'https://api.hackerwebapp.com/newest',
  Show = 'https://api.hackerwebapp.com/show',
  Ask = 'https://api.hackerwebapp.com/ask',
  Jobs = 'https://api.hackerwebapp.com/jobs'
}

@Injectable({
  providedIn: 'root',
})
export class HnService {
  private fetchSubject = new Subject<any>();
  private currentUrl = '';
  private currentPage = 1;
  private eof = false;
  readonly rowCount = 30;

  select(type: NewsType, page = 1): Observable<{page: number; result: [];}> {
    this.eof = false;
    this.currentUrl = type;
    this.currentPage = page;
    this.fetch();
    return this.fetchSubject.asObservable();
  }

  next() {
    if (this.eof) {
      return;
    }
    this.currentPage = this.currentPage + 1;
    this.fetch();
  }

  prev() {
    if (this.currentPage <= 1) {
      this.currentPage = 1;
      return;
    }
    this.currentPage = this.currentPage - 1;
    this.fetch();
  }

  private fetch(options?) {
    fetch(this.currentUrl + `?page=${this.currentPage}`, options)
      .then((res) => {
        res.json().then((result) => {
          if (!result || !result.length) {
            if (this.currentPage > 1) {
              this.eof = true;
              this.currentPage = this.currentPage - 1;
            }
            return;
          }
          if (result.length < this.rowCount) {
            this.eof = true;
          }
          this.fetchSubject.next({
            page: this.currentPage,
            result
          });
        });
      })
      .catch((err) => console.error(err));
  }
}
