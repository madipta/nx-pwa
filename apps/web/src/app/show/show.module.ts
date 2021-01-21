import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ShowComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShowModule {}
