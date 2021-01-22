import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common.module';
import { ShowComponent } from './show.component';

export const routes: Routes = [
  {
    path: '',
    component: ShowComponent,
  },
];

@NgModule({
  declarations: [ShowComponent],
  imports: [CommonModule, AppCommonModule, RouterModule.forChild(routes)],
})
export class ShowModule {}
