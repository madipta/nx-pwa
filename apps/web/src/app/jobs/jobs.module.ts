import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class JobsModule {}
