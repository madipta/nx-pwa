import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './news-detail.component';
import { NewsCommentComponent } from './news-comment.component';
import { NewsCommentsComponent } from './news-comments.component';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailComponent,
  },
];

@NgModule({
  declarations: [
    NewsDetailComponent,
    NewsCommentComponent,
    NewsCommentsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewsDetailModule {}
