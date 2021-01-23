import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common.module';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail.component';
import { NewsCommentComponent } from './news-comment.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':id',
    component: NewsDetailComponent,
  },
];

@NgModule({
  declarations: [NewsComponent, NewsDetailComponent, NewsCommentComponent],
  imports: [CommonModule, AppCommonModule, RouterModule.forChild(routes)],
})
export class NewsModule {}
