import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'top',
    loadChildren: async() => (await import('./top/top.module')).TopModule,
  },
  {
    path: 'show',
    loadChildren: async() => (await import('./show/show.module')).ShowModule,
  },
  {
    path: 'ask',
    loadChildren: async() => (await import('./ask/ask.module')).AskModule,
  },
  {
    path: 'jobs',
    loadChildren: async() => (await import('./jobs/jobs.module')).JobsModule,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
