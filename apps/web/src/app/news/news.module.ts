import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { NewsItemComponent } from './news-item.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
];

@NgModule({
  declarations: [NavComponent, NewsItemComponent, NewsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewsModule {}
