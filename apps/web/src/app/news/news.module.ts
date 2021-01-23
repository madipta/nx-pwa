import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common.module';
import { NewsComponent } from './news.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: ':id',
    component: NewsComponent,
  },
];

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, AppCommonModule, RouterModule.forChild(routes)],
})
export class NewsModule {}
