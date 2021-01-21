import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask.component';

export const routes: Routes = [
  {
    path: '',
    component: AskComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AskModule {}
