import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common.module';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail.component';
import { NewsCommentComponent } from './news-comment.component';
import { NewsCommentsComponent } from './news-comments.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'item/:id',
    component: NewsDetailComponent,
  },
  {
    path: ':select',
    component: NewsComponent,
  },
];

@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailComponent,
    NewsCommentComponent,
    NewsCommentsComponent,
  ],
  imports: [CommonModule, AppCommonModule, RouterModule.forChild(routes)],
})
export class NewsModule {}
