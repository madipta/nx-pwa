import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common.module';
import { TopComponent } from './top.component';

export const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, AppCommonModule, RouterModule.forChild(routes)],
})
export class TopModule {}
